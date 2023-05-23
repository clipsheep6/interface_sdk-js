package com.huawei.update.check.model;

import java.util.Objects;

public class ComponentKey<T> {
    private final Class<T> componentType;

    public ComponentKey(Class<T> key) {
        Objects.requireNonNull(key);
        this.componentType = key;
    }

    public Class<T> getComponentType() {
        return this.componentType;
    }

    public T safeCast(Object value) {
        if (value == null) {
            return null;
        }

        if (!this.componentType.isInstance(value)) {
            return null;
        }

        return this.componentType.cast(value);
    }
}
