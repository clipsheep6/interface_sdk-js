/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.huawei.update.check.log;


import org.apache.logging.log4j.LogManager;

/**
 * The implementation class of {@link com.huawei.update.check.log.Logger}, based on Log4j.
 */
class LoggerImpl extends com.huawei.update.check.log.Logger {
    private static final String MESSAGE_FORMAT = "[%s] %s - %s";
    private final org.apache.logging.log4j.Logger logger;
    private final String prefix;

    LoggerImpl() {
        prefix = "updateCheck";
        logger = LogManager.getLogger(Logger.LOGGER_NAME);
    }

    @Override
    public void e(String tag, String message) {
        logger.error(String.format(MESSAGE_FORMAT, prefix, tag, message));
    }

    @Override
    public void i(String tag, String message) {
        logger.info(String.format(MESSAGE_FORMAT, prefix, tag, message));
    }

    @Override
    public void w(String tag, String message) {
        logger.warn(String.format(MESSAGE_FORMAT, prefix, tag, message));
    }

    @Override
    public void d(String tag, String message) {
        logger.debug(String.format(MESSAGE_FORMAT, prefix, tag, message));
    }

}