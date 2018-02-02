import { DOMModel, DOMComponent } from 'react-dom-components';
import TabItem from './TabItem';

class TabItemModel extends DOMModel {
    constructor(element) {
        super(element);
        this.getTextContent();
    }
}

export default class TabItemDOM extends DOMComponent {
    static get nodeName() { return 'tab-item'; }
    static get model() { return TabItemModel; }
    static get component() { return TabItem; }
}

export { TabItemModel, TabItemDOM };
