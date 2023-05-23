package com.huawei.update.check.dto;

public class ApiDiffToolParameters {
    private String oldDir;
    private String newDir;
    private String oldVersion;
    private String newVersion;
    private String objectDir;
    private String oldApiDir;
    private String oldComponentDir;

    public String getOldDir() {
        return oldDir;
    }

    public void setOldDir(String oldDir) {
        this.oldDir = oldDir;
    }

    public String getNewDir() {
        return newDir;
    }

    public void setNewDir(String newDir) {
        this.newDir = newDir;
    }

    public String getOldVersion() {
        return oldVersion;
    }

    public void setOldVersion(String oldVersion) {
        this.oldVersion = oldVersion;
    }

    public String getNewVersion() {
        return newVersion;
    }

    public void setNewVersion(String newVersion) {
        this.newVersion = newVersion;
    }

    public String getObjectDir() {
        return objectDir;
    }

    public void setObjectDir(String objectDir) {
        this.objectDir = objectDir;
    }

    public String getOldApiDir() {
        return oldApiDir;
    }

    public void setOldApiDir(String oldApiDir) {
        this.oldApiDir = oldApiDir;
    }

    public String getOldComponentDir() {
        return oldComponentDir;
    }

    public void setOldComponentDir(String oldComponentDir) {
        this.oldComponentDir = oldComponentDir;
    }
}
