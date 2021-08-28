/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
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

/**
 * A static class pertaining to the product information.
 *
 * @devices phone, tablet
 * @since 5
 * @Syscap SystemCapability.Startup.SysInfo
 */
declare namespace deviceInfo {
     /**
     * Obtains the device type represented by a string.
     *
     * @return Returns a string representing the device type,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const deviceType: string;

    /**
     * Obtains the manufacture name represented by a string.
     *
     * @return Returns a string representing the manufacture name,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const manufacture: string;

    /**
     * Obtains the product brand represented by a string.
     *
     * @return Returns a string representing the product brand,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const brand: string;

    /**
     * Obtains the external product family name represented by a string.
     *
     * @return Returns a string representing the external product family name,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const marketName: string;

    /**
     * Obtains the product series represented by a string.
     *
     * @return Returns a string representing the product series,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const productSeries: string;

    /**
     * Obtains the certified model represented by a string.
     *
     * @return Returns a string representing the certified model,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const productModel: string;

    /**
     * Obtains the internal software sub-model represented by a string.
     *
     * @return Returns a string representing the internal software sub-model,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const softwareModel: string;

    /**
     * Obtains the hardware version represented by a string.
     *
     * @return Returns a string representing the hardware version,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const hardwareModel: string;

    /**
     * Obtains the hardware profile represented by a string.
     *
     * @return Returns a string representing the hardware profile,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const hardwareProfile: string;

    /**
     * Obtains the device serial number represented by a string.
     *
     * @return Returns a string representing the device serial number,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const serial: string;

    /**
     * Obtains the bootloader version number represented by a string.
     *
     * @return Returns a string representing the bootloader version number,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const bootloaderVersion: string;

    /**
     * Obtains the instruction set supported by the system.
     *
     * @return Returns a string representing instruction set supported by the system.
     *
     * @since 5
     */
    const abiList: string;

    /**
     * Obtains the security patch level represented by a string.
     *
     * @return Returns a string representing the security patch level,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const securityPatchTag: string;

    /**
     * Obtains the version number visible to users represented by a string.
     *
     * @return Returns a string representing the version number visible to users,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const displayVersion: string;

    /**
     * Obtains the difference version number represented by a string.
     *
     * @return Returns a string representing the difference version number,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const incrementalVersion: string;

    /**
     * Obtains the OS release type.
     *
     * <p>The OS release category can be {@code Release}, {@code Beta}, or {@code Canary}.
     * The specific release type may be {@code Release}, {@code Beta1}, or others alike.
     *
     * @return Returns the OS release type.
     * @since 5
     */
    const osReleaseType: string;

    /**
     * Obtains the operating system full name.
     *
     * @return Returns a string representing the operating system name,
     * which can be {@code phone} (or {@code default} for phones), {@code wearable}, {@code liteWearable},
     * {@code tablet}, {@code tv}, {@code car}, or {@code smartVision}.
     *
     * @since 5
     */
    const osFullName: string;

    /**
     * Obtains the major (M) version number, which increases with any updates to the overall architecture.
     * <p>The M version number monotonically increases from 1 to 99.
     *
     * @return Returns the M version number.
     * @since 5
     */
    const majorVersion: number;

    /**
     * Obtains the senior (S) version number, which increases with any updates to the partial
     * architecture or major features.
     * <p>The S version number monotonically increases from 0 to 99.
     *
     * @return Returns the S version number.
     * @since 5
     */
    const seniorVersion: number;

    /**
     * Obtains the feature (F) version number, which increases with any planned new features.
     * <p>The F version number monotonically increases from 0 or 1 to 99.
     *
     * @return Returns the F version number.
     * @since 5
     */
    const featureVersion: number;

    /**
     * Obtains the build (B) version number, which increases with each new development build.
     * <p>The B version number monotonically increases from 0 or 1 to 999.
     *
     * @return Returns the B version number.
     * @since 5
     */
    const buildVersion: number;

    /**
     * Obtains the API version number.
     * <p>Mappings between versions and API versions:</p>
     * <pre>
     * Version        API Version
     * 1.0                1
     * 1.1                2
     * 2.0.0              3
     * 2.0.1              4
     * 2.1.0              5
     * </pre>
     *
     * @return Returns the API version number.
     * @since 5
     */
    const sdkApiVersion: number;

    /**
     * Obtains the first API version number.
     *
     * @return Returns the first API version number.
     * @since 5
     */
    const firstApiVersion: number;

    /**
     * Obtains the version ID number.
     *
     * @return Returns the version ID number.
     * @since 5
     */
    const versionId: string;

    /**
     * Obtains the different build types of the same baseline code.
     *
     * @return Returns a string representing the different build types of the same baseline code.
     *
     * @since 5
     */
    const buildType: string;

    /**
     * Obtains the different build user of the same baseline code.
     *
     * @return Returns a string representing the different build user of the same baseline code.
     *
     * @since 5
     */
    const buildUser: string;

    /**
     * Obtains the different build host of the same baseline code.
     *
     * @return Returns a string representing the different build host of the same baseline code.
     *
     * @since 5
     */
    const buildHost: string;

    /**
     * Obtains the build time.
     *
     * @return Returns a string representing the build time.
     *
     * @since 5
     */
    const buildTime: string;

    /**
     * Obtains the version hash.
     *
     * @return Returns a string representing the version hash.
     *
     * @since 5
     */
    const buildRootHash: string;
}

export default deviceinfo;
