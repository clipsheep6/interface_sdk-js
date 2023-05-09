package com.huawei.update.check.utils.fileDownloadUtil;

import java.io.IOException;

public interface Downloader {

    String download(String fileURL, String dir) throws IOException;

}
