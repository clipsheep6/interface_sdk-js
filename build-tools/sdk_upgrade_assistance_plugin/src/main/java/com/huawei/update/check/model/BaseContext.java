package com.huawei.update.check.model;

import com.intellij.openapi.util.Ref;

import java.util.HashMap;
import java.util.Map;
import java.util.Objects;
import java.util.function.BiFunction;
import java.util.function.Function;
import java.util.function.Supplier;

@SuppressWarnings("unused")
public abstract class BaseContext<T> {
    private final Map<ComponentKey<?>, Object> components;
    public BaseContext() {
        this.components = new HashMap<>();
    }

    public abstract T getContextImpl();

    public synchronized <T1, T2, T3> T3 addComponent(ComponentKey<T3> key, BiFunction<T1, T2, T3> supplier, T1 arg1, T2 arg2) {
        return addComponent(key, () -> supplier.apply(arg1, arg2));
    }

    public synchronized <T1, T2, T3> T3 addComponent(ComponentKey<T3> key, Ref<Boolean> newCreated, BiFunction<T1, T2, T3> supplier, T1 arg1, T2 arg2) {
        newCreated.set(false);
        return addComponent(key, () -> {
            newCreated.set(true);
            return supplier.apply(arg1, arg2);
        });
    }

    public synchronized <T1, T2> T2 addComponent(ComponentKey<T2> key, Function<T1, T2> supplier, T1 arg1) {
        return addComponent(key, () -> supplier.apply(arg1));
    }

    public synchronized <T1, T2> T2 addComponent(ComponentKey<T2> key, Ref<Boolean> newCreated, Function<T1, T2> supplier, T1 arg1) {
        newCreated.set(false);
        return addComponent(key, () -> {
            newCreated.set(true);
            return supplier.apply(arg1);
        });
    }

    public synchronized <T1> T1 addComponent(ComponentKey<T1> key, Ref<Boolean> newCreated, Supplier<T1> supplier) {
        newCreated.set(false);
        return addComponent(key, () -> {
            newCreated.set(true);
            return supplier.get();
        });
    }

    public synchronized <T1> T1 addComponent(ComponentKey<T1> key, Supplier<T1> supplier) {
        Objects.requireNonNull(key);
        Objects.requireNonNull(supplier);

        Object preValue = this.components.get(key);
        if (preValue != null) {
            return Objects.requireNonNull(key.safeCast(preValue));
        }

        T1 value = Objects.requireNonNull(supplier.get());
        this.components.put(key, value);
        return value;
    }

    public synchronized <T1> T1 getComponent(ComponentKey<T1> key) {
        Objects.requireNonNull(key);

        Object value = this.components.get(key);
        return key.safeCast(value);
    }

    public synchronized <T1> T1 removeComponent(ComponentKey<T1> key) {
        Objects.requireNonNull(key);
        Object value = this.components.remove(key);
        return key.safeCast(value);
    }

    public synchronized <T1, T2, T3> T3 updateComponent(ComponentKey<T3> key, BiFunction<T1, T2, T3> supplier, T1 arg1, T2 arg2) {
        return addComponent(key, () -> supplier.apply(arg1, arg2));
    }

    public synchronized <T1, T2> T2 updateComponent(ComponentKey<T2> key, Function<T1, T2> supplier, T1 arg1) {
        return addComponent(key, () -> supplier.apply(arg1));
    }

    public synchronized <T1> T1 updateComponent(ComponentKey<T1> key, Supplier<T1> supplier) {
        Objects.requireNonNull(key);
        Objects.requireNonNull(supplier);

        T1 value = Objects.requireNonNull(supplier.get());
        this.components.put(key, value);
        return value;
    }

    public synchronized void removeAllComponents() {
        this.components.clear();
    }

}
