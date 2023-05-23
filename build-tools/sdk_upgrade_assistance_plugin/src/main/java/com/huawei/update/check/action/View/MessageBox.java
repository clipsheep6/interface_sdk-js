package com.huawei.update.check.action.View;

import com.intellij.openapi.project.Project;
import com.intellij.openapi.ui.MessageDialogBuilder;
import com.intellij.openapi.ui.Messages;
import com.intellij.util.Restarter;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import javax.swing.*;
import java.awt.*;
import java.awt.event.KeyEvent;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;

public class MessageBox extends JDialog {
    private final JComponent parent;
    private final String msgContent;
    private final Runnable okAction;
    private final Runnable cancelAction;
    private JPanel contentPane;
    private JButton buttonOK;
    private JLabel labelContent;

    public MessageBox(@NotNull JComponent parent, @NotNull String msgContent, @Nullable Runnable okAction,
                      @Nullable Runnable cancelAction) {
        this.parent = parent;
        this.msgContent = msgContent;
        this.okAction = okAction;
        this.cancelAction = cancelAction;
        setContentPane(contentPane);
        setModal(true);
        getRootPane().setDefaultButton(buttonOK);

        buttonOK.addActionListener(e -> onOK());

        // call onCancel() when cross is clicked
        setDefaultCloseOperation(DO_NOTHING_ON_CLOSE);
        addWindowListener(new WindowAdapter() {
            public void windowClosing(WindowEvent e) {
                onCancel();
            }
        });

        // call onCancel() on ESCAPE
        contentPane.registerKeyboardAction(e -> onCancel(), KeyStroke.getKeyStroke(KeyEvent.VK_ESCAPE, 0), JComponent.WHEN_ANCESTOR_OF_FOCUSED_COMPONENT);

        this.setTitle("失败");
        this.labelContent.setText(this.msgContent);
    }

    private void moveToCenter() {
        Dimension parentSize = this.parent.getSize();
        Dimension mySize = this.getSize();
        this.setLocation(parentSize.width / 2 - mySize.width / 2, parentSize.height / 2 - mySize.height / 2);
    }

    private void onOK() {
        Runnable okAction = this.okAction;
        // add your code here
        dispose();

        if (okAction != null) {
            okAction.run();
        }
    }

    private void onCancel() {
        Runnable cancelAction = this.cancelAction;
        // add your code here if necessary
        dispose();
        if (cancelAction != null) {
            cancelAction.run();
        }
    }

    public static void showDialog(@NotNull Project project, String title, @NotNull String msgContent) {
        showDialog(project, title, msgContent, null);
    }

    public static void showDialog(@NotNull Project project, String title, @NotNull String msgContent, @Nullable Runnable okAction) {
        showDialog(project, title, msgContent, okAction, null);
    }

    public static void showDialog(@NotNull Project project, String title, @NotNull String msgContent,
                                  @Nullable Runnable okAction, @Nullable Runnable cancelAction) {

        boolean isOK = MessageDialogBuilder.okCancel(title, msgContent)
                .icon(Messages.getInformationIcon()).ask(project);
        if (isOK) {
            if (okAction != null) {
                okAction.run();
            }
            return;
        }

        if (cancelAction != null) {
            cancelAction.run();
        }
    }
}
