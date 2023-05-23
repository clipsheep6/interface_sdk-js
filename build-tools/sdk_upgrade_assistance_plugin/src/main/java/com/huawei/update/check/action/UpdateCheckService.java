package com.huawei.update.check.action;

import com.huawei.update.check.model.BaseContext;
import com.huawei.update.check.model.ComponentKey;
import com.intellij.openapi.Disposable;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.util.Disposer;
import org.jetbrains.annotations.NotNull;

import java.util.function.Function;

@SuppressWarnings("unused")
public class UpdateCheckService extends BaseContext<UpdateCheckService> implements Disposable {
    @Override
    public UpdateCheckService getContextImpl() {
        return this;
    }

    public enum Mode {None, Conversion, Fix}

    private final Project project;
    private final Mode mode;
    public UpdateCheckService(@NotNull Project project) {
        this.project = project;
        this.mode = initMode(project);
        Disposer.register(this.project, this);
    }

    private Mode initMode(@NotNull Project project) {
        return Mode.None;
    }

    @NotNull
    public Mode getMode() {
        return this.mode;
    }

    @NotNull
    public Project getProject() {
        return this.project;
    }

    @Override
    public void dispose() {
    }

    public synchronized <T1> T1 addComponent(ComponentKey<T1> key, Function<? super Project, T1> supplier) {
        return super.addComponent(key, supplier, this.project);
    }

    public static UpdateCheckService getInstance(@NotNull Project project) {
        return project.getService(UpdateCheckService.class);
    }

}
