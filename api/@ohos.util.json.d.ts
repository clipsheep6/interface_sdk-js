declare namespace ArkTS {
    interface ArkJSON extends JSON {
        remove(obj: Object, key: string): void;

        has(obj: Object, key: string): boolean;
    }

    var JSON: JSON;
}

export default ArkTS;