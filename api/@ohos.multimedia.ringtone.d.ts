  /**
   * Enum for ringtone type.
   * @since 8
   */
  enum RingtoneType {
    /**
     * Default type.
     * @since 8
     */
    RINGTONE_TYPE_DEFAULT = 0,
    /**
     * Multi-sim type.
     * @since 8
     */
    RINGTONE_TYPE_MULTISIM
  }

  /**
   * Interface for ringtone options.
   * @since 8
   */
  interface RingtoneOptions {
    /**
     * Ringtone volume.
     * @since 8
     */
    volume: number;
    /**
     * Loop value.
     * @since 8
     */
    loop: boolean;
  }

  /**
   * Ringtone player object.
   * @since 8
   */
  interface RingtonePlayer {
    /**
     * Gets player state.
     * @since 8
     */
    readonly state: AudioState;

    /**
     * Gets the title of ringtone.
     * @since 8
     */
    getTitle(callback: AsyncCallback<string>): void;
    getTitle(): Promise<string>;

    /**
     * Gets audio renderer info.
     * @return AudioRendererInfo value
     * @since 8
     */
    getAudioRendererInfo(callback: AsyncCallback<AudioRendererInfo>): void;
    getAudioRendererInfo(): Promise<AudioRendererInfo>;

    /**
     * Configure ringtone options.
     * @param options Ringtone configure options.
     * @since 8
     */
    configure(options: RingtoneOptions, callback: AsyncCallback<void>): void;
    configure(options: RingtoneOptions): Promise<void>;

    /**
     * Starts playing ringtone
     * @since 8
     */
    start(callback: AsyncCallback<void>): void;
    start(): Promise<void>;

    /**
     * Stop playing ringtone
     * @since 8
     */
    stop(callback: AsyncCallback<void>): void;
    stop(): Promise<void>;

    /**
     * Release ringtone player resource
     * @since 8
     */
    release(callback: AsyncCallback<void>): void;
    release(): Promise<void>;
  }

  /**
   * Gets system sound manager for all type sound.
   * @return SystemSoundManager instance.
   * @since 8
   */
  function getSystemSoundManager(): SystemSoundManager;

  /**
   * System sound manager object.
   * @since 8
   */
  interface SystemSoundManager {
    /**
     * Sets the ringtone uri to system.
     * @param context Current application context.
     * @param uri Ringtone uri to set.
     * @param type Ringtone type to set.
     * @since 8
     */
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType, callback: AsyncCallback<void>): void;
    setSystemRingtoneUri(context: Context, uri: string, type: RingtoneType): Promise<void>;
    /**
     * Gets the ringtone uri.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @return Ringtone uri maintained in system.
     * @since 8
     */
    getSystemRingtoneUri(context: Context, type: RingtoneType, callback: AsyncCallback<string>): void;
    getSystemRingtoneUri(context: Context, type: RingtoneType): Promise<string>;
    /**
     * Gets the ringtone player.
     * @param context Current application context.
     * @param type Ringtone type to get.
     * @return Ringtone player maintained in system.
     * @since 8
     */
    getSystemRingtonePlayer(context: Context, type: RingtoneType, callback: AsyncCallback<RingtonePlayer>): void;
    getSystemRingtonePlayer(context: Context, type: RingtoneType): Promise<RingtonePlayer>;

    /**
     * Sets the notification uri to system.
     * @param context Current application context.
     * @param uri Ringtone uri to set.
     * @since 8
     */
    setSystemNotificationUri(context: Context, uri: string, callback: AsyncCallback<void>): void;
    setSystemNotificationUri(context: Context, uri: string): Promise<void>;
    /**
     * Gets the notification uri.
     * @param context Current application context.
     * @return Notification uri maintained in system.
     * @since 8
     */
    getSystemNotificationUri(context: Context, callback: AsyncCallback<string>): void;
    getSystemNotificationUri(context: Context): Promise<string>;

    /**
     * Sets the alarm uri to system.
     * @param context Current application context.
     * @param uri Alarm uri to set.
     * @since 8
     */
    setSystemAlarmUri(context: Context, uri: string, callback: AsyncCallback<void>): void;
    setSystemAlarmUri(context: Context, uri: string): Promise<void>;
    /**
     * Gets the alarm uri.
     * @param context Current application context.
     * @return Alarm uri maintained in system.
     * @since 8
     */
    getSystemAlarmUri(context: Context, callback: AsyncCallback<string>): void;
    getSystemAlarmUri(context: Context): Promise<string>;
  }