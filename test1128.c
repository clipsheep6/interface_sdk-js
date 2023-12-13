  int32_t ret;
    struct VibratorDevice *priv = GetVibratorDevicePriv();

    if (duration == 0) {
        HDF_LOGE("%s:invalid duration para", __func__);
        return HDF_ERR_INVALID_PARAM;
    }

    (void)OsalMutexLock(&priv->mutex);
    struct HdfSBuf *msg = HdfSbufObtainDefaultSize();
    if (msg == NULL) {