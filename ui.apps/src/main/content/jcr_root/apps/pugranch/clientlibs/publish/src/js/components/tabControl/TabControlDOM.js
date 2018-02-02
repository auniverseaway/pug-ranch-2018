import { DOMModel, DOMComponent } from 'react-dom-components';
import TabControl from './TabControl';
import { TabItemModel } from '../tabItem/TabItemDOM';

class SubTitleModel extends DOMModel {
    constructor(element) {
        super(element);
        this.getTextContent();
    }
}

class TabControlModel extends DOMModel {
    constructor(element) {
        super(element);
        this.getDataAttribute('title');
        this.getDataAttribute('model');
        this.getChildComponent('h2', SubTitleModel);
        this.getChildComponentArray('tab-item', TabItemModel);
    }
}

export default class TabControlDOM extends DOMComponent {
    static get nodeName() { return 'tab-control'; }
    static get model() { return TabControlModel; }
    static get component() { return TabControl; }
}


