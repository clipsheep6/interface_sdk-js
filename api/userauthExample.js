import userAuthNorth from '@ohos.userIAM.userAuth'

// 获取版本信息
try {
    let version = userAuthNorth.getVersion();
    // do success
} catch (error) {
    console.log(error);
    // do error
}

// 查询是否可用
try {
    userAuthNorth.getAvailableStatus(userAuthNorth.UserAuthType.FACE, userAuthNorth.AuthTrustLevel.ATL1);
} catch (error) {
    console.log(error);
    // do error
}

// 进行一次认证
let challenge = null;
let authType = userAuthNorth.UserAuthType.FACE;
let authTrustLevel = userAuthNorth.AuthTrustLevel.ATL1;

try {
    var authInstance = userAuthNorth.getAuthInstance(challenge, authType, authTrustLevel);
    authInstance.on("result", (result) => {
        if (result.result != userAuthNorth.ResultCodeV9.SUCCESS) {
            // do error
            // if (result.error == userAuthNorth.ResultCodeV9.XXXX) {
            //     do something
            // }
        }
        let token = result.token;
        let remainAttempts = result.remainAttempts;
        let lockoutDuration = result.lockoutDuration;
    });

    // if need tip
    authInstance.on("tip", (result) => {
        switch (result.tip) {
            case userAuthNorth.FaceTips.FACE_AUTH_TIP_TOO_BRIGHT:
                // do something;
            case userAuthNorth.FaceTips.FACE_AUTH_TIP_TOO_DARK:
                // do something;
                // ...
            default:
                // do others
        } 
    });
    authInstance.start();
} catch (error) {
    console.log(error);
    // do error
}

// 取消认证
try {
    authInstance.cancel();
} catch (error) {
    console.log(error);
    // do error
}