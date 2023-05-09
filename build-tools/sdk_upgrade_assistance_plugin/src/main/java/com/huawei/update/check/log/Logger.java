package com.huawei.update.check.log;

import org.apache.logging.log4j.Level;
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.core.Appender;
import org.apache.logging.log4j.core.LoggerContext;
import org.apache.logging.log4j.core.appender.ConsoleAppender;
import org.apache.logging.log4j.core.appender.RollingFileAppender;
import org.apache.logging.log4j.core.appender.rolling.SizeBasedTriggeringPolicy;
import org.apache.logging.log4j.core.config.AppenderRef;
import org.apache.logging.log4j.core.config.Configuration;
import org.apache.logging.log4j.core.config.LoggerConfig;
import org.apache.logging.log4j.core.layout.PatternLayout;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

/**
 * Log abstract base class.
 */
public abstract class Logger {
    public static final String LOGGER_NAME = "com.ohos.ui.migration";
    /**
     * Logs a message CharSequence with the ERROR level.
     *
     * @param tag     the tag CharSequence to log.
     * @param message the message CharSequence to log.
     */
    public abstract void e(String tag, String message);

    /**
     * Logs a message CharSequence with the INFO level.
     *
     * @param tag     the tag CharSequence to log.
     * @param message the message CharSequence to log.
     */
    public abstract void i(String tag, String message);

    /**
     * Logs a message CharSequence with the WARN level.
     *
     * @param tag     the tag CharSequence to log.
     * @param message the message CharSequence to log.
     */
    public abstract void w(String tag, String message);

    /**
     * Logs a message CharSequence with the DEBUG level.
     *
     * @param tag     the tag CharSequence to log.
     * @param message the message CharSequence to log.
     */
    public abstract void d(String tag, String message);

    public static void init(String logDir) {
        System.out.println("configure log directory: " + logDir);
        LoggerContext ctx = (LoggerContext) LogManager.getContext(false);
        Configuration config = ctx.getConfiguration();
        PatternLayout layout = PatternLayout.newBuilder()
                .withPattern(PatternLayout.SIMPLE_CONVERSION_PATTERN)
                .build();
        List<AppenderRef> refs = new ArrayList<>();
        Appender rollingFileAppender = createRollingFileAppender(logDir, layout, config, refs);
        Appender consoleAppender = createConsoleAppender(layout, config, refs);
        LoggerConfig loggerConfig = LoggerConfig.newBuilder().withAdditivity(false)
                .withLevel(Level.DEBUG)
                .withLoggerName(LOGGER_NAME)
                .withIncludeLocation("true")
                .withRefs(refs.toArray(new AppenderRef[0]))
                .withConfig(config)
                .build();
        loggerConfig.addAppender(rollingFileAppender, null, null);
        loggerConfig.addAppender(consoleAppender, null, null);
        config.addLogger(LOGGER_NAME, loggerConfig);
        ctx.updateLoggers();
    }

    private static Appender createRollingFileAppender(String logDir, PatternLayout layout, Configuration config,
                                                      List<AppenderRef> refs) {
        File logFile = new File(logDir, "updateCheck.log");
        // 5MB = 5 * 1024 * 1024 = 5242880
        SizeBasedTriggeringPolicy policy = SizeBasedTriggeringPolicy.createPolicy("5242880");
        String appenderName = "updateCheck-file";
        Appender appender = RollingFileAppender.newBuilder().withFileName(logFile.getPath())
                .withFilePattern("%d{yyyyMMdd-HHmm}.log.zip")
                .withAppend(true)
                .withPolicy(policy)
                .setName(appenderName)
                .setLayout(layout)
                .setConfiguration(config)
                .build();
        appender.start();
        config.addAppender(appender);
        refs.add(AppenderRef.createAppenderRef(appenderName, null, null));
        return appender;
    }

    private static Appender createConsoleAppender(PatternLayout layout, Configuration config, List<AppenderRef> refs) {
        String appenderName = "check-console";
        Appender appender = ConsoleAppender.newBuilder()
                .setName(appenderName)
                .setLayout(layout)
                .setConfiguration(config)
                .build();
        appender.start();
        config.addAppender(appender);
        refs.add(AppenderRef.createAppenderRef(appenderName, null, null));
        return appender;
    }


    /**
     * Create a Logger instance.
     *
     * @return subclass of {@link Logger}
     */
    public static Logger createLogger() {
        return new LoggerImpl();
    }
}