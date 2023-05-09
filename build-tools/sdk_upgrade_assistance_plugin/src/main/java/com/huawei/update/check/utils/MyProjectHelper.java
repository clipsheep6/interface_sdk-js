package com.huawei.update.check.utils;

import java.io.File;

public class MyProjectHelper {
    public static boolean isOpenHarmonyProject(String projectPath) {
        if (projectPath == null) {
            return false;
        }
        return isOpenHarmonyProject(new File(projectPath));
    }

    public static boolean isOpenHarmonyProject(File projectPath) {
        if (projectPath == null) {
            return false;
        }

        if (!projectPath.exists()) {
            return false;
        }

        if (!projectPath.isDirectory()) {
            return false;
        }

        String sdkPath = FileUtils.getNodePath(projectPath.getPath(), "local.properties", "sdk.dir");
        return sdkPath != null;
    }

}
