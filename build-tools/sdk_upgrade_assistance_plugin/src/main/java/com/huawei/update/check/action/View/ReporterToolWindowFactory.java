package com.huawei.update.check.action.View;

import com.huawei.update.check.log.Logger;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.openapi.wm.ToolWindowFactory;
import org.jetbrains.annotations.NotNull;

public class ReporterToolWindowFactory implements ToolWindowFactory{
    private static final String LOG_TAG = ReporterToolWindowFactory.class.getName();
    private static final Logger LOGGER = Logger.createLogger();
    @Override
    public void createToolWindowContent(@NotNull Project project, @NotNull ToolWindow toolWindow) {
        LOGGER.i(LOG_TAG,"Start loading report window");
        UpdateReportPanel.loadPanel(project,toolWindow);
        FAQPanel.loadPanel(project,toolWindow);
    }
}
