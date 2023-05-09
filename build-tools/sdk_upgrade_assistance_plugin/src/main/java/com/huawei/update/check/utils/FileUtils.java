package com.huawei.update.check.utils;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.huawei.update.check.dto.ApiDiffResultDto;
import com.huawei.update.check.log.Logger;
import org.apache.commons.compress.archivers.tar.TarArchiveEntry;
import org.apache.commons.compress.archivers.tar.TarArchiveInputStream;
import org.apache.commons.compress.compressors.gzip.GzipCompressorInputStream;
import org.apache.commons.compress.utils.IOUtils;
import java.io.*;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.util.*;
import java.util.List;
import java.util.zip.ZipEntry;
import java.util.zip.ZipFile;

public class FileUtils {
    private static final String LOG_TAG = FileUtils.class.getName();
    private static final Logger LOGGER = Logger.createLogger();

    public void getApiTools() {
        try {
            //getLastDir
            String lastDir = getLastDir();
            File updateCheck = new File(lastDir, "updateCheck");
            if (!updateCheck.exists()) {
                updateCheck.mkdirs();
            }
            //api diff tool
            File diffPath = new File(updateCheck.toString(), "api-diff");
            if (!diffPath.exists()) {
                InputStream apiDiffInputStream = this.getToolsInputStream("api-diff.tar.gz");
                if (apiDiffInputStream != null) {
                    unGzipFile(apiDiffInputStream, updateCheck);
                }
            }
            //application api scanning tool
            File applicationPath = new File(updateCheck.toString(), "collect_application_api");
            if (!applicationPath.exists()) {
                InputStream applicationInputStream = this.getToolsInputStream("collect_application_api.tar.gz");
                if (applicationInputStream != null) {
                    unGzipFile(applicationInputStream, updateCheck);
                }
            }
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, "get api tools error! " + e.getMessage());
        }

    }

    public static String getLastDir() {
        return File.listRoots()[File.listRoots().length - 1].toString();
    }

    private InputStream getToolsInputStream(String toolName) {
        return getClass().getClassLoader().getResourceAsStream(toolName);
    }


    public static void unGzipFile(InputStream inputStream, File targetDir) throws IOException {
        TarArchiveInputStream tarArchiveInputStream = new TarArchiveInputStream(new GzipCompressorInputStream(inputStream));
        TarArchiveEntry entry;
        while ((entry = tarArchiveInputStream.getNextTarEntry()) != null) {
            if (entry.isDirectory()) {
                continue;
            }
            File targetFile = new File(targetDir, entry.getName());
            File parent = targetFile.getParentFile();
            if (!parent.exists()) {
                parent.mkdirs();
            }
            IOUtils.copy(tarArchiveInputStream, Files.newOutputStream(targetFile.toPath()));
        }
    }

    public static String getApplicationApiType(String projectBasePath) {
        File buildFile = new File(projectBasePath, "build-profile.json5");
        try {
            String jsonString = getJsonString(buildFile);
            JSONObject parse = (JSONObject) JSONObject.parse(jsonString);
            JSONArray modules = (JSONArray) parse.get("modules");
            JSONObject model = (JSONObject) modules.get(0);
            String modelName = String.valueOf(model.get("name"));
            File file = new File(projectBasePath, modelName + "\\build-profile.json5");
            String modelJson = getJsonString(file);
            JSONObject parseModel = (JSONObject) JSONObject.parse(modelJson);
            return (String) parseModel.get("apiType");
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, e.getMessage());
            return null;
        }
    }

    public static String getSdkVersionFromJsonFile(String jsonFilePath) throws IOException {
        String jsonStr = "";
        File jsonFile = new File(jsonFilePath);
        FileReader jsonFileReader = new FileReader(jsonFile);
        Reader reader = new InputStreamReader(new FileInputStream(jsonFile), StandardCharsets.UTF_8);
        int ch = 0;
        StringBuilder jsonSb = new StringBuilder();
        while ((ch = reader.read()) != -1) {
            jsonSb.append((char) ch);
        }
        jsonFileReader.close();
        reader.close();
        jsonStr = jsonSb.toString();
        ApiDiffResultDto dto = JSON.parseObject(jsonStr, ApiDiffResultDto.class);
        return dto.getVersion();
    }

    public static <T> List<T> readJsonFileToJavaList(String jsonFilePath, Class<T> clazz) throws IOException {
        String jsonStr = "";
        File jsonFile = new File(jsonFilePath);
        FileReader jsonFileReader = new FileReader(jsonFile);
        Reader reader = new InputStreamReader(new FileInputStream(jsonFile), StandardCharsets.UTF_8);
        int ch = 0;
        StringBuilder jsonSb = new StringBuilder();
        while ((ch = reader.read()) != -1) {
            jsonSb.append((char) ch);
        }
        jsonFileReader.close();
        reader.close();
        jsonStr = jsonSb.toString();
        return JSON.parseArray(jsonStr, clazz);

    }

    public static void writerJsonToFile(String jsonString, String jsonFilePath) {
        BufferedWriter bufferedWriter = null;
        try {
            File file = new File(jsonFilePath);
            if (!file.getParentFile().exists()) {
                file.getParentFile().mkdirs();
                file.createNewFile();
            }
            bufferedWriter = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(file), StandardCharsets.UTF_8));
            bufferedWriter.write(jsonString);
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, e.getMessage());
        } finally {
            if (null != bufferedWriter) {
                try {
                    bufferedWriter.close();
                } catch (IOException exception) {
                    exception.printStackTrace();
                }
            }
        }
    }


    public static String getNodePath(String projectPath, String file, String name) {
        Properties properties = new Properties();
        File props = new File(projectPath, file);
        if (!props.exists()) {
            return null;
        }
        try (InputStream in = new FileInputStream(props)) {
            properties.load(in);
            return properties.getProperty(name);
        } catch (IOException e) {
            LOGGER.e(LOG_TAG, e.getMessage());
            return null;
        }
    }

    public static String getCompileSdkVersion(String projectPath) throws IOException {
        if (projectPath == null) {
            return null;
        }
        File buildFile = new File(projectPath, "build-profile.json5");

        if (!buildFile.exists()) {
            return null;
        }
        return getCompileSdkVersion(buildFile);
    }

    public static String getCompileSdkVersion(File buildFile) throws IOException {
        String jsonString = getJsonString(buildFile);
        JSONObject parse = (JSONObject) JSONObject.parse(jsonString);
        JSONObject app = (JSONObject) parse.get("app");
        return String.valueOf(app.get("compileSdkVersion"));
    }

    public static String getJsonString(File buildFile) throws IOException {
        String jsonStr;
        FileReader fileReader = new FileReader(buildFile);
        Reader reader = new InputStreamReader(new FileInputStream(buildFile), StandardCharsets.UTF_8);
        int ch = 0;
        StringBuilder stringBuilder = new StringBuilder();
        while ((ch = reader.read()) != -1) {
            stringBuilder.append((char) ch);
        }
        fileReader.close();
        reader.close();
        jsonStr = stringBuilder.toString();
        return jsonStr;
    }

    public static void decompress(String srcPath, String dest) throws Exception {
        File file = new File(srcPath);
        if (!file.exists()) {
            throw new RuntimeException(srcPath + "所指文件不存在");
        }
        ZipFile zf = new ZipFile(file);
        Enumeration entries = zf.entries();
        ZipEntry entry = null;
        while (entries.hasMoreElements()) {
            entry = (ZipEntry) entries.nextElement();
            if (entry.isDirectory()) {
                String dirPath = dest + File.separator + entry.getName();
                File dir = new File(dirPath);
                dir.mkdirs();
            } else {
                // 表示文件
                File f = new File(dest + File.separator + entry.getName());
                if (!f.exists()) {
                    //String dirs = FileUtils.getParentPath(f);
                    String dirs = f.getParent();
                    File parentDir = new File(dirs);
                    parentDir.mkdirs();
                }
                f.createNewFile();
                // 将压缩文件内容写入到这个文件中
                InputStream is = zf.getInputStream(entry);
                FileOutputStream fos = new FileOutputStream(f);
                int count;
                byte[] buf = new byte[8192];
                while ((count = is.read(buf)) != -1) {
                    fos.write(buf, 0, count);
                }
                is.close();
                fos.close();
            }
        }
    }

}
