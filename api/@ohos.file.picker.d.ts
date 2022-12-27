import { AsyncCallback, Callback } from "./basic";

interface DocumentSelectOption {
    defaultPath?: string;
    pickerSubMIMEType?: Array<string>;
    maxSelectNumber?: number;
}

interface DocumentSaveOption {
    NewFileName?: Array<string>;
}

interface AudioSelectOption {
    maxSelectNumber?: number;
}

interface AudioSaveOption {
    NewFileName?: Array<string>;
}

interface PhotoSelectOption {
    pickerSubMIMEType?: Array<string>;
    maxSelectNumber?: number;
}

interface PhotoSaveOption {

}

interface DocumentPickerViewController {
    select(option: DocumentSelectOption) : Promise<Array<string>>;
    select(option: DocumentSelectOption, callback: AsyncCallback<Array<string>>) : void;

    save(option: DocumentSaveOption) : Promise<Array<string>>;
    save(option: DocumentSaveOption, callback: AsyncCallback<Array<string>>) : void;
}

interface AudioPickerViewController {
    select(option: AudioSelectOption) : Promise<Array<string>>;
    select(option: AudioSelectOption, callback: AsyncCallback<Array<string>>) : void;

    save(option: AudioSaveOption) : Promise<Array<string>>;
    save(option: AudioSaveOption, callback: AsyncCallback<Array<string>>) : void;
}

interface PhotoPickerViewController {
    select(option: PhotoSelectOption) : Promise<Array<string>>;
    select(option: PhotoSelectOption, callback: AsyncCallback<Array<string>>) : void;

    save(option: PhotoSaveOption) : Promise<Array<string>>;
    save(option: PhotoSaveOption, callback: AsyncCallback<Array<string>>) : void;
}