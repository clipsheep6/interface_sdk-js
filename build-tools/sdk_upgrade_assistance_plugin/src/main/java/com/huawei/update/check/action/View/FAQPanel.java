package com.huawei.update.check.action.View;

import com.intellij.openapi.Disposable;
import com.intellij.openapi.project.Project;
import com.intellij.openapi.ui.SimpleToolWindowPanel;
import com.intellij.openapi.util.Disposer;
import com.intellij.openapi.wm.ToolWindow;
import com.intellij.ui.Gray;
import com.intellij.ui.JBColor;
import com.intellij.ui.content.Content;
import com.intellij.ui.content.ContentManager;
import com.intellij.ui.jcef.JBCefBrowser;
import com.intellij.util.ui.JBDimension;
import org.jetbrains.annotations.NotNull;

import javax.swing.*;
import java.awt.*;

public class FAQPanel extends SimpleToolWindowPanel implements Disposable {
    private JPanel faqPanel;
    private final JBCefBrowser jbCefBrowser;

    public FAQPanel(){
        super(true,true);
        this.jbCefBrowser = JBCefBrowser.createBuilder()
                .setOffScreenRendering(false)
                .setUrl("https://www.baidu.com")
                .createBrowser();
        this.jbCefBrowser.getComponent().setBackground(new JBColor(Gray._246,new Color(61,63,65)));
        this.faqPanel.setPreferredSize(new JBDimension(980,585));
        this.faqPanel.add(jbCefBrowser.getComponent(),BorderLayout.CENTER);
        //this.setContent(this.faqPanel);
    }

    public JComponent getPanel() {
        return this.faqPanel;
    }

    public static void loadPanel(@NotNull Project project, @NotNull ToolWindow toolWindow){
        FAQPanel faqPanel = new FAQPanel();
        ContentManager contentManager = toolWindow.getContentManager();
        Content content = contentManager.getFactory().createContent(faqPanel.getPanel(), "FAQ", false);
        contentManager.addContent(content);
        Disposer.register(project, faqPanel);
    }

    @Override
    public void dispose() {
        this.jbCefBrowser.dispose();
    }
}
