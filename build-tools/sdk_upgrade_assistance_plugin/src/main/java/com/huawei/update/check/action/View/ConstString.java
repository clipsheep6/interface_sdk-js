package com.huawei.update.check.action.View;

import com.intellij.AbstractBundle;
import com.intellij.reference.SoftReference;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.PropertyKey;

import java.lang.ref.Reference;
import java.util.ResourceBundle;

public class ConstString {
    private static final String BUNDLE = "const";
    private static Reference<ResourceBundle> outBundle;

    public static String get(@NotNull @PropertyKey(resourceBundle = BUNDLE) String key, @NotNull Object ... params) {
        return AbstractBundle.message(ConstString.getBundle(), key, params);
    }

    public static ResourceBundle getBundle() {
        ResourceBundle bundle = SoftReference.dereference(ConstString.outBundle);
        if (bundle == null) {
            bundle = ResourceBundle.getBundle(ConstString.BUNDLE);
            ConstString.outBundle = new SoftReference<>(bundle);
        }

        return bundle;
    }
}
