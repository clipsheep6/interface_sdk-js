package com.huawei.update.check.dto;

public class UpdateCheckReportDto {
    private String apiDefinition; //api定义
    private String reminderInformation; //提示信息
    private String sourceFileName; //代码所在位置
    private String pos;
    private String changeLogPath;

    public UpdateCheckReportDto() {
    }

    public UpdateCheckReportDto(ApiDiffResultDto apiDto, String reminderInformation, CollectApplicationApiDto collApiDto,String changeLogPath) {
        this.apiDefinition = apiDto.getRawText();
        this.reminderInformation = reminderInformation;
        this.sourceFileName = collApiDto.getSourceFileName();
        this.pos = collApiDto.getPos();
        this.changeLogPath = changeLogPath;
    }


    public String getPos() {
        return pos;
    }

    public void setPos(String pos) {
        this.pos = pos;
    }

    public String getApiDefinition() {
        return apiDefinition;
    }

    public void setApiDefinition(String apiDefinition) {
        this.apiDefinition = apiDefinition;
    }

    public String getReminderInformation() {
        return reminderInformation;
    }

    public void setReminderInformation(String reminderInformation) {
        this.reminderInformation = reminderInformation;
    }

    public String getSourceFileName() {
        return sourceFileName;
    }

    public void setSourceFileName(String sourceFileName) {
        this.sourceFileName = sourceFileName;
    }

    public String getChangeLogPath() {
        return changeLogPath;
    }

    public void setChangeLogPath(String changeLogPath) {
        this.changeLogPath = changeLogPath;
    }

    @Override
    public String toString() {
        return "UpdateCheckReportDto{" +
                "apiDefinition='" + apiDefinition + '\'' +
                ", reminderInformation='" + reminderInformation + '\'' +
                ", sourceFileName='" + sourceFileName + '\'' +
                ", pos='" + pos + '\'' +
                ", changeLogPath='" + changeLogPath + '\'' +
                '}';
    }
}
