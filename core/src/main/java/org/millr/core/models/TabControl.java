package org.millr.core.models;

import com.day.cq.wcm.api.Page;
import com.day.cq.wcm.api.PageManager;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Iterator;
import java.util.List;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;

@Model(
    adaptables = { SlingHttpServletRequest.class },
    resourceType = "pugranch/components/content/tabControl",
    defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
@Exporter(name = "jackson", extensions = "json")
public class TabControl {
    @ValueMapValue
    private String title;

    @SlingObject
    private SlingHttpServletRequest request;

    @SlingObject
    private ResourceResolver resolver;

    @SlingObject
    private Resource resource;

    public String getTitle() {
        return title;
    }

    public String getSort() {
        return request.getParameter("sort");
    }

    public List<Page> getChildren() {
        List<Page> children = new ArrayList<Page>();
        PageManager pageManager = resolver.adaptTo(PageManager.class);
        if (pageManager != null) {
            Page currentPage = pageManager.getContainingPage(resource);
            Iterator<Page> childPages = currentPage.listChildren();
            childPages.forEachRemaining(children::add);
            if ("ZA".equals(getSort())) {
                Collections.reverse(children);
            }
            return children;
        }
        return null;
    }


}