package com.huawei.update.check.action;

import com.huawei.update.check.action.View.ConstString;
import com.huawei.update.check.action.View.MessageBox;
import com.huawei.update.check.action.View.UpdateCheckWizardDialog;
import com.huawei.update.check.log.Logger;
import com.huawei.update.check.utils.MyProjectHelper;
import com.intellij.openapi.actionSystem.AnAction;
import com.intellij.openapi.actionSystem.AnActionEvent;
import com.intellij.openapi.project.Project;
import org.jetbrains.annotations.NotNull;

import java.io.File;


public class ToCheck extends AnAction {
    private Logger LOGGER;
    private static final String TAG = ToCheck.class.getName();

    @Override
    public void actionPerformed(@NotNull AnActionEvent e) {
        Project project = e.getProject();

        if (project == null) {
            return;
        }

        if (!MyProjectHelper.isOpenHarmonyProject(project.getBasePath())) {
            MessageBox.showDialog(project, "", ConstString.get("ama.check.not.openHarmony.project"));
            return;
        }
        initLogConfig(project.getBasePath().concat("/updateCheck/log"));
        LOGGER.i(TAG, "Check start");
        UpdateCheckWizardDialog.showDialog(e.getProject());
    }

    /**
     * Set the log output directory.
     *
     * @param logDir log directory
     */
    private void initLogConfig(String logDir) {
        File logFile = new File(logDir);
        if (!logFile.exists()) {
            logFile.mkdirs();
        }
        Logger.init(logDir);
        LOGGER = Logger.createLogger();
    }
}
