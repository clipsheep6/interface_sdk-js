import faceAuth from @ohos.userIAM.faceAuth

let surfaceId = "dummy surface id"

let manager = new faceAuth.FaceAuthManager()
try {
    manager.setSurfaceId(surfaceId)
} catch (err) {
    console.error("set surfaceId fail, err " + err)
}