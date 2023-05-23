package com.huawei.update.check.utils;

import java.io.*;
import java.util.*;

@SuppressWarnings("unused")
public class IoUtils {
    public enum FileStatus {NullFile, Nonexistent, IsFile, IsDirectory, Unknown}

    private static final String BIN_FOLDER = "/bin";

    public static boolean isValidLocalPath(String pathStr)  {
        Objects.requireNonNull(pathStr);
        File ioPath = new File(pathStr);
        try {
            String absolutePath = ioPath.getCanonicalPath().replace('\\', '/');
            pathStr = pathStr.replace('\\', '/');
            return absolutePath.equals(pathStr);
        } catch (IOException e) {
            return false;
        }
    }

    public static boolean isEmptyPath(File path) {
        Objects.requireNonNull(path);
        return !path.exists() || path.isDirectory() && (Objects.requireNonNull(path.list()).length == 0);
    }
}
