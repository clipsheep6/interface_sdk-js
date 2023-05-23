package com.huawei.update.check.utils.decompressionTool;

import org.apache.commons.compress.archivers.tar.TarArchiveEntry;
import org.apache.commons.compress.archivers.tar.TarArchiveInputStream;
import org.apache.commons.lang.StringUtils;


import java.io.*;
import java.util.zip.GZIPInputStream;

public class DecompressionTool {
    public static String unGzFile(String filePath){
        String outputfile = "";
        try {
            //建立gzip压缩文件输入流
            FileInputStream fin = new FileInputStream(filePath);
            //建立gzip解压工作流
            GZIPInputStream gzin = new GZIPInputStream(fin);
            //建立解压文件输出流
            outputfile = filePath.substring(0,filePath.lastIndexOf('.'));
            FileOutputStream fout = new FileOutputStream(outputfile);
            int num;
            byte[] buf=new byte[1024];
            while ((num = gzin.read(buf,0,buf.length)) != -1)
            {
                fout.write(buf,0,num);
            }
            gzin.close();
            fout.close();
            fin.close();
            //解压tar压缩文件
            String folderPath = getFolderPath(outputfile);
            unTarFile(outputfile,folderPath);

        } catch (Exception ex){
            System.err.println(ex.toString());
        }
        return null;
    }

    public static void unTarFile(String unTarPath,String tarPath) throws IOException {
        TarArchiveEntry tae;
        TarArchiveInputStream tais = new TarArchiveInputStream(new FileInputStream(tarPath));
        while((tae = tais.getNextTarEntry()) != null){
            String dir = unTarPath + File.separator + tae.getName();
            File dirFile = new File(dir);
            BufferedOutputStream bos = new BufferedOutputStream(new FileOutputStream(dirFile));
            int count;
            byte data[] = new byte[1024];
            while((count = tais.read(data,0,1024)) !=-1){
                bos.write(data,0,count);
            }
            bos.close();
        }
    }

    private static String getFolderPath(String filePath){
        File file = new File(filePath);
        return file.getParent();

    }
}
