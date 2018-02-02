package org.millr.core.models;

import java.util.ArrayList;
import java.util.List;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = Resource.class)
public class TableModel {

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long rows;

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private Long columns;

    public List<Long> getRows() {
        return getList(rows);
    }
    
    public List<Long> getColumns() {
        return getList(columns);
    }
    
    public List<Long> getList(Long count) {
        List<Long> colList = new ArrayList<Long>();
        for (int i = 0; i < count; i++) {
            colList.add((long) i);
        }
        return colList;
    }
}
