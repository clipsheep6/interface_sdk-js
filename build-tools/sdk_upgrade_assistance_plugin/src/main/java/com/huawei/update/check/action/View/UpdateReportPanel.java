package com.huawei.update.check.action.View;

import com.huawei.update.check.action.DataUpdateNotifier;
import com.huawei.update.check.dto.UpdateCheckReportDto;
import com.huawei.update.check.log.Logger;
import com.huawei.update.check.utils.FileUtils;
import com.intellij.openapi.Disposable;
import com.intellij.openapi.editor.*;
import com.intellij.openapi.fileEditor.FileEditorManager;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.Disposer;
import com.intellij.openapi.vfs.LocalFileSystem;
import com.intellij.openapi.vfs.VirtualFile;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.ui.JBColor;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentManager;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;
import javax.swing.table.*;
import java.awt.*;
import java.awt.event.MouseAdapter;
import java.awt.event.MouseEvent;
import java.io.File;
import java.io.IOException;
import java.net.URI;
import java.net.URISyntaxException;
import java.util.*;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class UpdateReportPanel implements Disposable {
    private static final String LOG_TAG = UpdateReportPanel.class.getName();
    private static final com.huawei.update.check.log.Logger LOGGER = Logger.createLogger();
    private JPanel rootPanel;
    private JTable updateReport;
    private JLabel sumLabel;
    private Project project;
    private Map<String, String> errorCodeMap = new HashMap<>();

    public UpdateReportPanel(@NotNull Project project) {
        this.project = project;
        this.init();
    }

    @Override
    public void dispose() {
    }

    public static void loadPanel(@NotNull Project project, @NotNull ToolWindow toolWindow) {
        UpdateReportPanel updateReportPanel = new UpdateReportPanel(project);
        ContentManager contentManager = toolWindow.getContentManager();
        Content content = contentManager.getFactory().createContent(updateReportPanel.getPanel(), "Report", false);
        contentManager.addContent(content);
        Disposer.register(project, updateReportPanel);
    }

    public JComponent getPanel() {
        return this.rootPanel;
    }

    public void init() {
        Report report = new Report(this.project);
        this.updateReport.setModel(report);
        this.setTableStyle();
    }

    private void setTableStyle() {
        LOGGER.i(LOG_TAG, "Start rendering JTable");
        this.sumLabel.setFont(new java.awt.Font(Font.DIALOG, 1, 20));
        this.sumLabel.setForeground(JBColor.RED);
        // Set Table Row Height
        this.updateReport.setRowHeight(30);
        // add addMouseListener
        this.updateReport.setRowSelectionAllowed(true);
        this.updateReport.setColumnSelectionAllowed(true);
        TableColumn tc = this.updateReport.getColumnModel().getColumn(0);
        tc.setCellEditor(this.updateReport.getDefaultEditor(Boolean.class));
        tc.setCellRenderer(this.updateReport.getDefaultRenderer(Boolean.class));
        tc.setPreferredWidth(100);
        tc.setMaxWidth(100);
        tc.setMinWidth(100);
        TableColumn tableColumn = this.updateReport.getColumnModel().getColumn(5);
        tableColumn.setPreferredWidth(200);
        tableColumn.setMaxWidth(200);
        tableColumn.setMinWidth(200);
        this.updateReport.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseClicked(MouseEvent e) {
                int row = updateReport.getSelectedRow();
                int col = updateReport.columnAtPoint(e.getPoint());
                //api in simple address
                if (col == 4 && e.getClickCount() == 2) {
                    String valueAt = (String) updateReport.getValueAt(row, 4);
                    if (StringUtils.isBlank(valueAt)) {
                        return;
                    }
                    if (getApiInApplicationPath(valueAt) != null) {
                        try {
                            VirtualFile fileByIoFile = LocalFileSystem.getInstance().findFileByIoFile(new File(project.getBasePath(), getApiInApplicationPath(valueAt)));
                            FileEditorManager.getInstance(project).openFile(fileByIoFile, true);
                            gotoLine(Integer.parseInt(valueAt.replaceAll("^\\D*(\\d+).*", "$1")));
                        } catch (Exception exception) {
                            MessageBox.showDialog(project, "", ConstString.get("ama.check.can.not.find.file"));
                        }
                    }
                } else if (col == 5) { //changeLog
                    clickUrl(getUrlFromHtml((String) updateReport.getValueAt(row, 5)).trim());
                }
            }
        });
        LOGGER.i(LOG_TAG, "Rendering JTable end");
    }

    private String getApiInApplicationPath(String apiAddress) {
        String pattern = ".*?(?=\\()";
        Pattern r = Pattern.compile(pattern);
        Matcher m = r.matcher(apiAddress);
        if (m.find()) {
            return m.group(0);
        }
        return null;
    }

    private String getUrlFromHtml(String htmlStr) {
        Pattern pattern = Pattern.compile("(?<=(href=\\\")).*?(?=\\\")");
        Matcher matcher = pattern.matcher(htmlStr);
        StringBuilder builder = new StringBuilder();
        while (matcher.find()) {
            builder.append(matcher.group());
            builder.append("\r\n");
        }
        return builder.toString();
    }

    private void clickUrl(String url) {
        try {
            if (StringUtils.isNotBlank(url)) {
                Desktop desktop = Desktop.getDesktop();
                URI uri = new URI(url);
                desktop.browse(uri);
            }
        } catch (URISyntaxException | IOException exception) {
            exception.printStackTrace();
            LOGGER.e(LOG_TAG, "Click " + url + " error! " + exception.getMessage());
        }
    }

    private void gotoLine(int lineNumber) {
        Editor editor = FileEditorManager.getInstance(this.project).getSelectedTextEditor();
        if (editor == null) {
            return;
        }
        CaretModel caretModel = editor.getCaretModel();
        int totalLineCount = editor.getDocument().getLineCount();
        if (lineNumber > totalLineCount) {
            return;
        }
        //Moving caret to line number
        caretModel.moveToLogicalPosition(new LogicalPosition(lineNumber - 1, 0));
        //Scroll to the caret
        ScrollingModel scrollingModel = editor.getScrollingModel();
        scrollingModel.scrollToCaret(ScrollType.CENTER);
    }

    class Report extends AbstractTableModel implements DataUpdateNotifier.UpdateListener {
        List<Object[]> dataList = new ArrayList<>();
        String[] titles = new String[7];
        int sum = 0;

        public Report(@NotNull Project project) {
            LOGGER.i(LOG_TAG, "Start loading report window");
            DataUpdateNotifier.getInstance().addUpdateListener(this);
            List<UpdateCheckReportDto> reportResult = this.getReportResult(project);
            if (reportResult == null) {
                return;
            }
            sum = reportResult.size();
            sumLabel.setText(ConstString.get("ama.check.sum.report") + sum);
            for (int i = 0; i < reportResult.size(); i++) {
                UpdateCheckReportDto report = reportResult.get(i);
                String filePath = report.getSourceFileName().replace(project.getBasePath() + "/", "");
                dataList.add(new Object[]{false, getFileName(report.getSourceFileName()), report.getApiDefinition(), report.getReminderInformation()
                        , filePath + "(" + report.getPos() + ")", this.setChangeLogUrl(report.getChangeLogPath())});
            }
            titles[0] = ConstString.get("ama.check.report.order.number");
            titles[1] = ConstString.get("ama.check.report.ets.name");
            titles[2] = ConstString.get("ama.check.report.old.method.text");
            titles[3] = ConstString.get("ama.check.report.new.method.text");
            titles[4] = ConstString.get("ama.check.report.function.position");
            titles[5] = ConstString.get("ama.check.report.change.log");
            LOGGER.i(LOG_TAG, "Loading report window end");
        }

        private List<UpdateCheckReportDto> getReportResult(@NotNull Project project) {
            List<UpdateCheckReportDto> updateCheckReports = new ArrayList<>();
            try {
                File resultJsonFile = new File(project.getBasePath(), "updateCheck\\report.json");
                return FileUtils.readJsonFileToJavaList(resultJsonFile.toString(), UpdateCheckReportDto.class);
            } catch (IOException e) {
                LOGGER.e(LOG_TAG, "Get report result error!" + e.getMessage());
                return updateCheckReports;
            }
        }

        private void update() {
            LOGGER.i(LOG_TAG, "Start reload report window");
            dataList.clear();
            List<UpdateCheckReportDto> reportResult = this.getReportResult(project);
            if (reportResult == null) {
                return;
            }
            sum = reportResult.size();
            sumLabel.setText(ConstString.get("ama.check.sum.report") + sum);
            for (int i = 0; i < reportResult.size(); i++) {
                UpdateCheckReportDto report = reportResult.get(i);
                String filePath = report.getSourceFileName().replace(project.getBasePath() + "/", "");
                dataList.add(new Object[]{false, getFileName(report.getSourceFileName()), report.getApiDefinition(), report.getReminderInformation()
                        , filePath + "(" + report.getPos() + ")", this.setChangeLogUrl(report.getChangeLogPath())});
            }
            titles[0] = ConstString.get("ama.check.report.order.number");
            titles[1] = ConstString.get("ama.check.report.ets.name");
            titles[2] = ConstString.get("ama.check.report.old.method.text");
            titles[3] = ConstString.get("ama.check.report.new.method.text");
            titles[4] = ConstString.get("ama.check.report.function.position");
            titles[5] = ConstString.get("ama.check.report.change.log");
            fireTableDataChanged();
            LOGGER.i(LOG_TAG, "Reload report window end");
        }

        private String setChangeLogUrl(String changeLogPath) {
            if (StringUtils.isNotBlank(changeLogPath)) {
                return "<html><a href=\"" + changeLogPath + "\">查看详情</a></html>";
            }
            return "";
        }

        private String getFileName(String filePath) {
            File file = new File(filePath);
            if (file.isFile()) {
                return file.getName();
            }
            return "";
        }

        @Override
        public boolean isCellEditable(int row, int col) {
            return col == 0;
        }

        @Override
        public String getColumnName(int column) {
            return titles[column];
        }

        @Override
        public int getRowCount() {
            return sum;
        }

        @Override
        public int getColumnCount() {
            return 6;
        }

        @Override
        public Object getValueAt(int rowIndex, int columnIndex) {
            return this.dataList.get(rowIndex)[columnIndex];
        }

        @Override
        public void setValueAt(Object aValue, int rowIndex, int columnIndex) {
            this.dataList.get(rowIndex)[columnIndex] = aValue;
        }

        @Override
        public void onUpdate() {
            update();
        }
    }

}
