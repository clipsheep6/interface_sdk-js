package com.huawei.update.check.action;

import java.util.ArrayList;
import java.util.List;

public class DataUpdateNotifier {
    private static DataUpdateNotifier dataUpdateNotifier = new DataUpdateNotifier();
    private List<UpdateListener> listeners = new ArrayList<>();
    private DataUpdateNotifier() {
    }

    public static DataUpdateNotifier getInstance() {
        return dataUpdateNotifier;
    }

    public interface UpdateListener {
        void onUpdate();
    }

    public void notifyDataChange() {
        listeners.forEach((UpdateListener::onUpdate));
    }


    public void addUpdateListener(UpdateListener listener) {
        listeners.add(listener);
    }

}
