package com.huawei.update.check.action.View;

import com.alibaba.fastjson.JSON;
import com.huawei.update.check.action.DataUpdateNotifier;
import com.huawei.update.check.dto.ApiDiffResultDto;
import com.huawei.update.check.dto.CollectApplicationApiDto;
import com.huawei.update.check.dto.UpdateCheckReportDto;
import com.huawei.update.check.log.Logger;
import com.huawei.update.check.utils.FileUtils;
import com.huawei.update.check.utils.IoUtils;
import com.huawei.update.check.utils.MySystemUtils;
import com.huawei.update.check.utils.ResourceFileUtil;
import com.huawei.update.check.utils.fileDownloadUtil.Downloader;
import com.huawei.update.check.utils.fileDownloadUtil.FileDownloadHandle;
import com.huawei.update.check.utils.fileDownloadUtil.MultiThreadFileDownloader;
import com.huawei.update.check.utils.fileDownloadUtil.support.MultiThreadDownloadProgressPrinter;
import com.intellij.openapi.fileChooser.FileChooserDescriptor;
import com.intellij.openapi.progress.ProgressIndicator;
import com.intellij.openapi.progress.ProgressManager;
import com.intellij.openapi.progress.Task;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.ui.DialogWrapper;
import com.intellij.openapi.ui.TextFieldWithBrowseButton;
import org.apache.commons.lang.StringUtils;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.*;
import java.awt.event.ActionEvent;
import java.awt.event.ItemEvent;
import java.awt.event.KeyEvent;
import java.io.*;
import java.util.*;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ForkJoinPool;

public class UpdateCheckWizardDialog extends DialogWrapper {
    private static final String LOG_TAG = UpdateCheckWizardDialog.class.getName();
    private static final Logger LOGGER = Logger.createLogger();
    private JPanel centerPanel;
    private TextFieldWithBrowseButton textFieldOldSdkPath;
    private TextFieldWithBrowseButton textFieldNewSdkPath;
    private JComboBox sdkLargeVersion;
    private JComboBox sdkSmallVersion;
    private JButton download;
    private JLabel labelErrorNotice;
    private TextFieldWithBrowseButton downloadAddress;
    private ResourceFileUtil resourceFileUtil;
    private Project project;
    private String downloadUrl;
    private String fileStoragePath;
    private String sdkFileName;
    private String lastDir;
    private List<UpdateCheckReportDto> updateCheckReportDtos = new ArrayList<>();
    private String newSdkVersion;
    private String oldSdkVersion;
    private String newSdkFilePath;
    private String reportPath;
    private FileUtils fileUtils;
    private List<CollectApplicationApiDto> deprecatedApiResults = new ArrayList<>();
    private String applicationApiType;
    private final int DELETE = 0;
    private final int MODEL_CHANGES = 13;
    private final int SYSTEM_API_CHANGES = 9;
    private final int PERMISSION_CHANGES = 12;
    private final int PERMISSION_DELETE = 10;
    private final int NEW_ERROR_CODE = 6;
    private final int DEPRECATED_CHANGES = 5;
    private final int PERMISSION_NEW = 11;
    private final int FUNCTION_CHANGES = 16;


    public UpdateCheckWizardDialog(@NotNull Project project) {
        super((Project) null, false);
        this.project = project;
        this.fileUtils = new FileUtils();
        this.getNewSdkFilePath();
        this.setTitle(ConstString.get("ama.sdk.choose.dir.dialog.title"));
        this.textFieldNewSdkPath.setText(this.newSdkFilePath);
        this.applicationApiType = FileUtils.getApplicationApiType(project.getBasePath());
        this.resourceFileUtil = new ResourceFileUtil();
        DefaultComboBoxModel<String> stringDefaultComboBoxModel = new DefaultComboBoxModel<>(this.resourceFileUtil.getSdkLargeVersion());
        sdkLargeVersion.setModel(stringDefaultComboBoxModel);
        this.initEventListeners();
        this.lastDir = FileUtils.getLastDir();
        this.init();
    }


    private void initEventListeners() {
        this.textFieldNewSdkPath.addBrowseFolderListener(ConstString.get("ama.sdk.choose.new.dir.path"),
                ConstString.get("ama.sdk.choose.new.dir.path"),
                this.project,
                new FileChooserDescriptor(false, true, false, false, false, false)
        );

        this.textFieldOldSdkPath.addBrowseFolderListener(ConstString.get("ama.sdk.choose.old.dir.path"),
                ConstString.get("ama.sdk.choose.old.dir.path"),
                this.project,
                new FileChooserDescriptor(false, true, false, false, false, false)
        );
        this.downloadAddress.addBrowseFolderListener(ConstString.get("ama.choose.sdk.download.address"),
                ConstString.get("ama.choose.sdk.download.address"),
                this.project,
                new FileChooserDescriptor(false, true, false, false, false, false)
        );

        sdkLargeVersion.addItemListener(e -> {
            if (e.getStateChange() == ItemEvent.SELECTED) {
                this.downloadUrl = null;
                if (sdkLargeVersion.getSelectedIndex() == 0) {
                    sdkSmallVersion.removeAllItems();
                    return;
                }
                DefaultComboBoxModel<String> stringDefaultComboBoxModel = new DefaultComboBoxModel<>(resourceFileUtil.getSdkSmallVersion((String) sdkLargeVersion.getSelectedItem()));
                this.sdkSmallVersion.setModel(stringDefaultComboBoxModel);
            }
        });
        sdkSmallVersion.addItemListener(e -> {
            if (e.getStateChange() == ItemEvent.SELECTED) {
                downloadUrl = resourceFileUtil.getDownloadLink((String) sdkSmallVersion.getSelectedItem());
            }
        });
        download.addActionListener(e -> {
            if (downloadUrl == null) {
                this.labelErrorNotice.setText(ConstString.get("ama.sdk.choose.complete.download.path"));
                return;
            }
            if (StringUtils.isBlank(this.downloadAddress.getText())) {
                this.labelErrorNotice.setText(ConstString.get("ama.sdk.choose.dir.path"));
                return;
            }
            this.fileStoragePath = this.downloadAddress.getText();
            ProgressManager.getInstance().run(new Task.Backgroundable(this.project, "正在下载") {
                private long tmpAlreadyDownloadLength;
                private long speed;
                @Override
                public void run(@NotNull ProgressIndicator progressIndicator) {
                    String fileName = null;
                    try {
                        MultiThreadDownloadProgressPrinter downloadProgressPrinter = new MultiThreadDownloadProgressPrinter(30);
                        CompletableFuture.runAsync(() -> {
                            while (true) {
                                long alreadyDownloadLength = downloadProgressPrinter.getAlreadyDownloadLength();
                                long contentLength = downloadProgressPrinter.getContentLength();
                                System.out.println(contentLength + "  =>  " + alreadyDownloadLength);
                                if (alreadyDownloadLength != 0 && alreadyDownloadLength > contentLength || contentLength == alreadyDownloadLength && alreadyDownloadLength != 0) {
                                    progressIndicator.setFraction(1.0);
                                    progressIndicator.setText("finished");
                                    break;
                                }
                                setProgressIndicator(progressIndicator, contentLength, alreadyDownloadLength);
                                try {
                                    Thread.sleep(1000L);
                                } catch (InterruptedException e) {
                                    e.printStackTrace();
                                }
                            }
                        });
                        Downloader downloader = new MultiThreadFileDownloader(30, downloadProgressPrinter);
                        fileName = downloader.download("https://contentcenter-drcn.dbankcdn.com/pub_1/DevEcoSpace_1_900_9/ac/v3/Y0y2fql4RYS7zlBT7673BA/CuQ7Z5l1ToyNZy6LCMUrMQ.zip", fileStoragePath);
                    } catch (Exception e) {
                        e.printStackTrace();
                    }
                    try {
                        FileUtils.decompress(fileStoragePath + "\\" + fileName, fileStoragePath);
                        textFieldOldSdkPath.setText(fileStoragePath + "\\ets");
                    } catch (Exception exception) {
                        LOGGER.e(LOG_TAG, "unZip exception " + exception.getMessage());
                    }
                }

                private void setProgressIndicator(ProgressIndicator progressIndicator, long contentLength,
                                                  long alreadyDownloadLength) {
                    if (alreadyDownloadLength == 0 || contentLength == 0) {
                        return;
                    }
                    speed = alreadyDownloadLength - tmpAlreadyDownloadLength;
                    tmpAlreadyDownloadLength = alreadyDownloadLength;
                    double value = (double) alreadyDownloadLength / (double) contentLength;
                    double fraction = Double.parseDouble(String.format("%.2f", value));
                    progressIndicator.setFraction(fraction);
                    String text = "下载速度: " + (speed / 1000) + "kb/s";
                    progressIndicator.setText(text);
                }
            });
        });
        this.centerPanel.registerKeyboardAction(this::onCancel,
                KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0),
                JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT);
    }

    private void getNewSdkFilePath() {
        try {
            String sdkDir = FileUtils.getNodePath(this.project.getBasePath(), "local.properties", "sdk.dir");
            if (sdkDir == null) {
                return;
            }
            String compileSdkVersion = FileUtils.getCompileSdkVersion(this.project.getBasePath());
            if (compileSdkVersion == null) {
                return;
            }
            File file = new File(sdkDir, compileSdkVersion + "/ets");
            this.newSdkFilePath = file.getPath();
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, "Get new sdk file path error! " + e.getMessage());
        }
    }

    private void process() {
        // decompression tools
        this.fileUtils.getApiTools();
        // get old and new sdk version
        this.getSdkVersion();
        // run api tools asynchronously
        CompletableFuture.allOf(CompletableFuture.runAsync(this::runApiDiffTool, ForkJoinPool.commonPool()),
                CompletableFuture.runAsync(this::runApiCollectTool, ForkJoinPool.commonPool())).join();
        //process and filter data
        this.processAndFilterData();
        //updateReport Save to disk
        this.saveReportToDisk();
    }

    private void saveReportToDisk() {
        LOGGER.i(LOG_TAG, "Start save report to disk");
        String reportStr = JSON.toJSONString(this.updateCheckReportDtos);
        FileUtils.writerJsonToFile(reportStr, this.reportPath + "\\report.json");
        LOGGER.i(LOG_TAG, "Save report to disk end");
    }

    private void runApiDiffTool() {
        try {
            LOGGER.i(LOG_TAG, "Start run api diff tool");
            // Is it cached
            File diffResultPath = new File(this.lastDir + "updateCheck\\api-diff\\result\\" + "diff(" + this.oldSdkVersion + "_" + this.newSdkVersion + ")" + ".json");
            if (diffResultPath.exists()) {
                return;
            }
            File resultPath = new File(this.lastDir + "updateCheck\\api-diff\\result");
            if (!resultPath.exists()) {
                resultPath.mkdirs();
            }
            String orders = FileUtils.getLastDir().split(":")[0] + ":" + " && " +
                    "cd updateCheck && cd api-diff " + " && " + MySystemUtils.guessNodeFile() + " --old " +
                    this.textFieldOldSdkPath.getText() + " --new " + this.newSdkFilePath + " --oldVersion " + this.oldSdkVersion + " --newVersion " +
                    this.newSdkVersion + " --output " + this.lastDir + "updateCheck\\api-diff\\result";
            ProcessBuilder builder = new ProcessBuilder();
            builder.command("cmd.exe", "/c", orders);
            Process start = builder.start();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(start.getInputStream()));
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
            LOGGER.i(LOG_TAG, "Run api diff tool end");
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, "Run api diff tool error! " + e.getMessage());
        }
    }

    private void runApiCollectTool() {
        try {
            LOGGER.i(LOG_TAG, "Start run api collect tool");
            File updateCheck = new File(this.project.getBasePath(), "updateCheck");
            this.reportPath = updateCheck.toString();
            String orders = FileUtils.getLastDir().split(":")[0] + ":" + " && " +
                    "cd updateCheck && cd collect_application_api " + " && " + MySystemUtils.guessNodeFile() +
                    " api-collector.js --app " +
                    this.project.getBasePath() + " --output " + updateCheck + " --sdk " +
                    this.textFieldOldSdkPath.getText() + " --format json";
            ProcessBuilder builder = new ProcessBuilder();
            builder.command("cmd.exe", "/c", orders);
            Process start = builder.start();
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(start.getInputStream()));
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                System.out.println(line);
            }
            LOGGER.i(LOG_TAG, "Run api collect tool end");
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, "Run api collect tool error! " + e.getMessage());
        }
    }

    private List<ApiDiffResultDto> getApiDiffResult() {
        List<ApiDiffResultDto> apiDiffResults = new ArrayList<>();
        try {
            String diffJsonFilePath = this.lastDir + "updateCheck\\api-diff\\result\\diff(" + this.oldSdkVersion + "_" + this.newSdkVersion + ").json";
            apiDiffResults = FileUtils.readJsonFileToJavaList(diffJsonFilePath, ApiDiffResultDto.class);
            return apiDiffResults;
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, "Get api diff result error! " + e.getMessage());
            return apiDiffResults;
        }
    }

    private List<CollectApplicationApiDto> getAllCollectApiResult() {
        List<CollectApplicationApiDto> collectApplicationApiDtos = new ArrayList<>();
        try {
            File allApiJsonFilePath = new File(this.reportPath, "collectedApi.json");
            collectApplicationApiDtos = FileUtils.readJsonFileToJavaList(allApiJsonFilePath.toString(), CollectApplicationApiDto.class);
            if (collectApplicationApiDtos != null) {
                for (CollectApplicationApiDto allApi : collectApplicationApiDtos) {
                    if (StringUtils.isNotBlank(allApi.getDeprecated())) {
                        this.deprecatedApiResults.add(allApi);
                    }
                }
            }
            return collectApplicationApiDtos;
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, "Get collect api result error! " + e.getMessage());
            return collectApplicationApiDtos;
        }
    }

    private void processAndFilterData() {
        LOGGER.i(LOG_TAG, "Start process and filter data");
        List<ApiDiffResultDto> apiDiffResultDtos = this.getApiDiffResult();
        List<CollectApplicationApiDto> allApiResult = this.getAllCollectApiResult();
        List<Integer> subscript = new ArrayList<>();
        //Filter data
        for (ApiDiffResultDto apiDto : apiDiffResultDtos) {
            if (apiDto.getStatusCode() == null || apiDto.getStatusCode() == 3) { //新增
                continue;
            }
            for (int i = 0; i < this.deprecatedApiResults.size(); i++) {
                if (apiDto.getStatusCode() == 5 || apiDto.getStatusCode() == 0) {
                    if (this.judgeApi(apiDto, this.deprecatedApiResults.get(i))) {
                        subscript.add(i);
                    }
                }
            }
            for (CollectApplicationApiDto collApiDto : allApiResult) {
                if (this.judgeApi(apiDto, collApiDto)) {
                    if (this.generateReportData(apiDto, collApiDto) != null) {
                        this.updateCheckReportDtos.add(this.generateReportData(apiDto, collApiDto));
                    }
                }
            }
        }
        for (int i = 0; i < this.deprecatedApiResults.size(); i++) {
            if (!subscript.contains(i)) {
                UpdateCheckReportDto updateCheckReportDto = new UpdateCheckReportDto();
                //fill data
                updateCheckReportDto.setApiDefinition(this.deprecatedApiResults.get(i).getApiRawText());
                String reminderInformation = (StringUtils.isBlank(this.deprecatedApiResults.get(i).getUseinstead()))
                        ? ConstString.get("ama.check.api.deleted")
                        : ConstString.get("ama.check.obsolete.version.change.to")
                        + ConstString.get("ama.check.api.recommended.use") + this.deprecatedApiResults.get(i).getUseinstead();
                updateCheckReportDto.setReminderInformation(reminderInformation);
                updateCheckReportDto.setSourceFileName(this.deprecatedApiResults.get(i).getSourceFileName());
                updateCheckReportDto.setPos(this.deprecatedApiResults.get(i).getPos());
                updateCheckReportDto.setChangeLogPath("");
                this.updateCheckReportDtos.add(updateCheckReportDto);
            }
        }
        LOGGER.i(LOG_TAG, "Process and filter data end");
    }

    private boolean judgeApi(ApiDiffResultDto apiDto, CollectApplicationApiDto collApiDto) {
        return apiDto.getDtsName().equals(collApiDto.getDtsName())
                && apiDto.getRawText().equals(collApiDto.getApiRawText())
                && apiDto.getClassName().equals(collApiDto.getTypeName());
    }

    private UpdateCheckReportDto generateReportData(ApiDiffResultDto apiDto, CollectApplicationApiDto collApiDto) {
        UpdateCheckReportDto updateCheckReportDto = null;
        int statusCode = apiDto.getStatusCode();
        String checkOld = convertString(apiDto.getOldMessage());
        String checkNew = convertString(apiDto.getNewMessage());
        switch (statusCode) {
            case FUNCTION_CHANGES:
                updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.version.change") + apiDto.getNewMessage(), collApiDto, "");
                break;
            case MODEL_CHANGES:
                UpdateCheckReportDto report = this.setApiModelChange(apiDto, collApiDto);
                if (report != null) {
                    updateCheckReportDto = report;
                }
                break;
            case SYSTEM_API_CHANGES:
                updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.access.level.change.to") + checkOld + ConstString.get("ama.check.change.to") + checkNew, collApiDto, "");
                break;
            case PERMISSION_CHANGES:
                updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.limits.of.authority.change.to") + checkOld + ConstString.get("ama.check.change.to") + checkNew, collApiDto, "");
                break;
            case PERMISSION_DELETE:
                updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.limits.of.authority") + checkOld + ConstString.get("ama.check.deleted"), collApiDto, "");
                break;
            case NEW_ERROR_CODE:
                updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.add.error.code") + checkNew, collApiDto, "");
                break;
            case DEPRECATED_CHANGES:
                String useInstead = apiDto.getHint();
                if (StringUtils.isBlank(useInstead)) {
                    updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.obsolete.version.change.to"), collApiDto, "");
                } else {
                    updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.obsolete.version.change.to") + ConstString.get("ama.check.api.recommended.use") + useInstead.replace("useinstead: ", ""), collApiDto, "");
                }
                break;
            case PERMISSION_NEW:
                updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.add.limits.of.authority.change.to") + checkNew, collApiDto, "");
                break;
            case DELETE:
                updateCheckReportDto = new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.api.deleted"), collApiDto, "");
                break;
        }
        return updateCheckReportDto;
    }

    private String convertString(String str) {
        return StringUtils.isBlank(str) ? ConstString.get("ama.check.nothing") : str;
    }

    private UpdateCheckReportDto setApiModelChange(ApiDiffResultDto apiDto, CollectApplicationApiDto collApiDto) {
        if (StringUtils.isBlank(apiDto.getNewMessage())) {
            return null;
        }

        if (apiDto.getNewMessage().toLowerCase().startsWith(this.applicationApiType.toLowerCase())) {
            return null;
        }

        String oldModelOnly = StringUtils.isBlank(apiDto.getOldMessage()) ? ConstString.get("ama.check.nothing") : apiDto.getOldMessage();

        return new UpdateCheckReportDto(apiDto, ConstString.get("ama.check.model.change.to") + oldModelOnly + ConstString.get("ama.check.change.to") + apiDto.getNewMessage(), collApiDto, "");

    }

    private File readOldSdkPath() {
        if (!IoUtils.isValidLocalPath(this.textFieldOldSdkPath.getText())) {
            this.labelErrorNotice.setText(ConstString.get("ama.error.invalid_old_sdk_path"));
            return null;
        }
        if (this.isEtsFilePath(this.textFieldOldSdkPath.getText())) {
            this.labelErrorNotice.setText(ConstString.get("ama.select.old.sdk.file.path"));
            return null;
        }
        return new File(this.textFieldOldSdkPath.getText());
    }

    private File readNewSdkPath() {
        if (!IoUtils.isValidLocalPath(this.textFieldNewSdkPath.getText())) {
            this.labelErrorNotice.setText(ConstString.get("ama.error.invalid_new_sdk_path"));
            return null;
        }
        if (this.isEtsFilePath(this.textFieldNewSdkPath.getText())) {
            this.labelErrorNotice.setText(ConstString.get("ama.select.new.sdk.file.path"));
            return null;
        }
        return new File(this.textFieldNewSdkPath.getText());
    }

    private boolean isEtsFilePath(String filePath) {
        File apiFile = new File(filePath, "api");
        File componentFile = new File(filePath, "component");
        return !apiFile.exists() || !componentFile.exists();
    }

    private void downloadFile() {
        FileDownloadHandle fileDownloadHandle = new FileDownloadHandle();
        this.sdkFileName = fileDownloadHandle.downloadFile("https://contentcenter-drcn.dbankcdn.com/pub_1/DevEcoSpace_1_900_9/ac/v3/Y0y2fql4RYS7zlBT7673BA/CuQ7Z5l1ToyNZy6LCMUrMQ.zip", this.fileStoragePath);
    }

    protected UpdateCheckWizardDialog(@Nullable Project project, boolean canBeParent, @Nullable Runnable okAction) {
        super(project, canBeParent);
    }

    private void getSdkVersion() {
        try {
            this.oldSdkVersion = FileUtils.getSdkVersionFromJsonFile(this.textFieldOldSdkPath.getText() + "\\oh-uni-package.json");
            this.newSdkVersion = FileUtils.getSdkVersionFromJsonFile(this.newSdkFilePath + "\\oh-uni-package.json");
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, "Get sdk version error! " + e.getMessage());
        }

    }


    @Override
    protected @Nullable JComponent createCenterPanel() {
        return this.centerPanel;
    }

    @Override
    protected void doOKAction() {
        File oldSdkPath = this.readOldSdkPath();
        if (oldSdkPath == null) {
            return;
        }

        File newSdkPath = this.readNewSdkPath();
        if (newSdkPath == null) {
            return;
        }
        super.doOKAction();
        ProgressManager.getInstance().runProcessWithProgressSynchronously(this::process, ConstString.get("ama.generating.report"), false, this.project);
        MessageBox.showDialog(this.project, ConstString.get("ama.check.report.generated.successfully"), ConstString.get("ama.check.view.report"));
        DataUpdateNotifier.getInstance().notifyDataChange();
    }

    private void onCancel(@Nullable ActionEvent event) {
        super.doCancelAction();
        dispose();

    }

    @Override
    public void doCancelAction() {
        this.onCancel(null);
    }

    public static synchronized void showDialog(Project project) {
        UpdateCheckWizardDialog updateCheckWizardDialog = new UpdateCheckWizardDialog(project);
        updateCheckWizardDialog.show();
    }

}
