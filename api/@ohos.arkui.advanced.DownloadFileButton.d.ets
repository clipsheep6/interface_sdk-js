export declare enum DownloadIconStyle {
    FULL_FILLED = 0,
    LINES = 1
}
export declare enum DownloadDescription {
    DOWNLOAD = 0,
    DOWNLOAD_FILE = 1,
    SAVE = 2,
    SAVE_IMAGE = 3,
    SAVE_FILE = 4,
    DOWNLOAD_AND_SHARE = 5,
    RECEIVE = 6,
    CONTINUE_TO_RECEIVE = 7
}
export declare enum DownloadLayoutDirection {
    HORIZONTAL = 0,
    VERTICAL = 1
}
export interface DownloadContentOption {
    icon?: DownloadIconStyle;
    text?: DownloadDescription;
}
export interface DownloadStyleOption {
    iconSize?: Dimension;
    layoutDirection?: DownloadLayoutDirection;
    fontSize?: Dimension;
    fontStyle?: FontStyle;
    fontWeight?: number | FontWeight | string;
    fontFamily?: string | Resource;
    fontColor?: ResourceColor;
    iconColor?: ResourceColor;
    textIconSpace?: Dimension;
}
@Component
export declare struct DownloadFileButton {
    @State
    contentOption: DownloadContentOption;
    @State
    styleOption: DownloadStyleOption;
    build(): void;
    @Builder
    downloadImage(): void;
    @Builder
    downloadText(): void;
}
