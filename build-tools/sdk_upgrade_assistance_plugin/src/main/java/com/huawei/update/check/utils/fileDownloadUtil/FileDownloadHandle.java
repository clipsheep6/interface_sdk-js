package com.huawei.update.check.utils.fileDownloadUtil;


import com.huawei.update.check.utils.fileDownloadUtil.support.MultiThreadDownloadProgressPrinter;

import java.io.IOException;
import java.util.concurrent.CompletableFuture;


public class FileDownloadHandle {

    public String downloadFile(String fileURL,String fileStoragePath) {
        try {
            MultiThreadDownloadProgressPrinter downloadProgressPrinter = new MultiThreadDownloadProgressPrinter(30);

            CompletableFuture.runAsync(() -> {
                while (true) {
                    long alreadyDownloadLength = downloadProgressPrinter.getAlreadyDownloadLength();
                    long contentLength = downloadProgressPrinter.getContentLength();
                    System.out.println(contentLength + "  =>  " + alreadyDownloadLength);
                    if (alreadyDownloadLength != 0 && alreadyDownloadLength > contentLength || contentLength == alreadyDownloadLength && alreadyDownloadLength != 0) {
                        break;
                    }
                    try {
                        Thread.sleep(1000L);
                    } catch (InterruptedException e) {
                        e.printStackTrace();
                    }
                }
            });

            Downloader downloader = new MultiThreadFileDownloader(30, downloadProgressPrinter);
            return downloader.download(fileURL, fileStoragePath);
        } catch (IOException ioException){
            ioException.printStackTrace();
        }
        return null;
    }
}
