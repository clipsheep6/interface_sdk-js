package com.huawei.update.check.dto;

public class CollectApplicationApiDto {
    private String packageName;
    private String typeName;
    private String propertyName;
    private String apiRawText;
    private String deprecated;
    private String applicationFile;
    private String pos;
    private String useinstead;
    private String dtsName;
    private String sourceFileName;

    public String getSourceFileName() {
        return sourceFileName;
    }

    public void setSourceFileName(String sourceFileName) {
        this.sourceFileName = sourceFileName;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

    public String getPropertyName() {
        return propertyName;
    }

    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    public String getApiRawText() {
        return apiRawText;
    }

    public void setApiRawText(String apiRawText) {
        this.apiRawText = apiRawText;
    }

    public String getDeprecated() {
        return deprecated;
    }

    public void setDeprecated(String deprecated) {
        this.deprecated = deprecated;
    }

    public String getApplicationFile() {
        return applicationFile;
    }

    public void setApplicationFile(String applicationFile) {
        this.applicationFile = applicationFile;
    }

    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public String getUseinstead() {
        return useinstead;
    }

    public void setUseinstead(String useinstead) {
        this.useinstead = useinstead;
    }

    public String getDtsName() {
        return dtsName;
    }

    public void setDtsName(String dtsName) {
        this.dtsName = dtsName;
    }

    @Override
    public String toString() {
        return "CollectApplicationApiDto{" +
                "packageName='" + packageName + '\'' +
                ", className='" + typeName + '\'' +
                ", methodName='" + propertyName + '\'' +
                ", methodText='" + apiRawText + '\'' +
                ", deprecated='" + deprecated + '\'' +
                ", applicationFile='" + applicationFile + '\'' +
                ", pos='" + pos + '\'' +
                ", useInstead='" + useinstead + '\'' +
                ", dtsName='" + dtsName + '\'' +
                '}';
    }
}
