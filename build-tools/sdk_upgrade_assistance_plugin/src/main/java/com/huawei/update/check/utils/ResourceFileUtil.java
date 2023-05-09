package com.huawei.update.check.utils;

import java.util.*;

public class ResourceFileUtil {
    private static final String PROPERTIES_FILE_NAME = "resource-sdk-version";
    private static final Map<String, String> resourceDataMap = new HashMap<>();

    public ResourceFileUtil() {
        ResourceBundle resourceBundle = ResourceBundle.getBundle(PROPERTIES_FILE_NAME);
        Set<String> keys = resourceBundle.keySet();
        for (String key : keys) {
            resourceDataMap.put(key, resourceBundle.getString(key));
        }
    }

    public String[] getSdkLargeVersion() {
        return resourceDataMap.get("sdk_version") == null ? new String[]{} : resourceDataMap.get("sdk_version").split(",");
    }

    public String[] getSdkSmallVersion(String sdkLargeVersion) {
        return resourceDataMap.get("sdk_version_" + sdkLargeVersion.split(" ")[1]) == null ? new String[]{} : resourceDataMap.get("sdk_version_" + sdkLargeVersion.split(" ")[1]).split(",");
    }

    public String getDownloadLink(String sdkSmallVersion) {
        return resourceDataMap.get("version_" + sdkSmallVersion.split(" ")[0]);
    }

}
