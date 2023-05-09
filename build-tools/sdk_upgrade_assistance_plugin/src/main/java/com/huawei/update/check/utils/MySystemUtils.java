package com.huawei.update.check.utils;

import java.io.File;
import java.util.*;
import java.util.stream.Collectors;

public class MySystemUtils {
    public static final boolean isWindows = System.getProperty("os.name").toLowerCase().startsWith("windows");
    private static final String pathSplitStr = isWindows ? ";" : ":";
    private static final Collection<String> PATH;
    private static final Collection<String> PATHEXT;

    static {
        Collection<String> localPaths = Collections.emptyList();
        String paths = System.getenv("PATH");
        if (paths != null) {
            localPaths = Arrays.asList(paths.split(pathSplitStr));
        }
        PATH = localPaths;

        Collection<String> localPathExt = Collections.emptyList();
        if (isWindows) {
            String pathExt = System.getenv("PATHEXT");
            if (pathExt != null) {
                localPathExt = Arrays.asList(pathExt.split(";"));
            }
        }
        PATHEXT = localPathExt;
    }

    public static File guessNodeHome() {
        File nodeFile = guessNodeFile();
        if (nodeFile == null) {
            return null;
        }

        return nodeFile.getParentFile();
    }

    public static File guessNodeFile() {
        return findExecutableFileInPathEnv("node");
    }

    public static File guessJavaHome() {
        File javaFile = guessJavaFile();
        if (javaFile == null) {
            return null;
        }

        return javaFile.getParentFile().getParentFile();
    }
    public static File guessJavaFile() {
        String javaHome = System.getenv("JAVA_HOME");
        if (javaHome != null) {
            File javaFile = getExecutableFile(new File(javaHome, "bin"), "java");
            if (javaFile != null) {
                return javaFile;
            }
        }

        return findExecutableFileInPathEnv("java");
    }

    public static File findExecutableFileInPathEnv(String fileName) {
        Objects.requireNonNull(fileName);
        List<String> fileNames = new LinkedList<>();
        fileNames.add(fileName);
        if (isWindows) {
            fileNames.addAll(PATHEXT.stream().map(x -> fileName + x).collect(Collectors.toList()));
        }
        return findExecutableFileInPathEnv(fileNames);
    }

    private static File findExecutableFileInPathEnv(Collection<String> fileNames) {
        Objects.requireNonNull(fileNames);
        for (String path : PATH) {
            for (String fileName : fileNames) {
                File ioFile = new File(path, fileName);
                if (isExecutableFile(ioFile)) {
                    return ioFile;
                }
            }
        }
        return null;
    }

    private static boolean isExecutableFile(File ioFile) {
        if (!ioFile.exists()) {
            return false;
        }

        if (!ioFile.isFile()) {
            return false;
        }
        return ioFile.canExecute();
    }

    public static File getExecutableFile(String ioDir, String fileName) {
        if (ioDir == null) {
            return null;
        }

        return getExecutableFile(new File(ioDir), fileName);
    }

    public static File getExecutableFile(File ioDir, String fileName) {
        Objects.requireNonNull(ioDir);
        Objects.requireNonNull(fileName);

        File ioFile = new File(ioDir, fileName);
        if (isExecutableFile(ioFile)) {
            return ioFile;
        }

        for (String ext : PATHEXT) {
            ioFile = new File(ioDir, fileName + ext);
            if (isExecutableFile(ioFile)) {
                return ioFile;
            }
        }
        return null;
    }
}
