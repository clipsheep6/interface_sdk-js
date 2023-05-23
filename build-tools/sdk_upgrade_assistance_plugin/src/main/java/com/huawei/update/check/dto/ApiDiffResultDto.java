package com.huawei.update.check.dto;

public class ApiDiffResultDto {
    private String packageName;
    private String className;
    private String rawText;
    private String dtsName;
    private Integer statusCode;
    private String oldMessage;
    private String newMessage;
    private String version;
    private String useinstead;
    private String hint;

    public String getHint() {
        return hint;
    }

    public void setHint(String hint) {
        this.hint = hint;
    }

    public Integer getStatusCode() {
        return statusCode;
    }

    public void setStatusCode(Integer statusCode) {
        this.statusCode = statusCode;
    }

    public String getUseinstead() {
        return useinstead;
    }

    public void setUseinstead(String useinstead) {
        this.useinstead = useinstead;
    }

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
    }

    public String getDtsName() {
        return dtsName;
    }

    public void setDtsName(String dtsName) {
        this.dtsName = dtsName;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    public String getClassName() {
        return className;
    }

    public void setClassName(String className) {
        this.className = className;
    }

    public String getRawText() {
        return rawText;
    }

    public void setRawText(String rawText) {
        this.rawText = rawText;
    }

    public String getOldMessage() {
        return oldMessage;
    }

    public void setOldMessage(String oldMessage) {
        this.oldMessage = oldMessage;
    }

    public String getNewMessage() {
        return newMessage;
    }

    public void setNewMessage(String newMessage) {
        this.newMessage = newMessage;
    }

    @Override
    public String toString() {
        return "ApiDiffResultDto{" +
                "packageName='" + packageName + '\'' +
                ", className='" + className + '\'' +
                ", rawText='" + rawText + '\'' +
                ", dtsName='" + dtsName + '\'' +
                ", statusCode=" + statusCode +
                ", oldMessage='" + oldMessage + '\'' +
                ", newMessage='" + newMessage + '\'' +
                ", version='" + version + '\'' +
                ", useinstead='" + useinstead + '\'' +
                '}';
    }
}
