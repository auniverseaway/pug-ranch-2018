import { DOMRegistry } from 'react-dom-components';
import TabControlDOM from './components/tabControl/TabControlDOM';
import { TabItemDOM } from './components/tabItem/TabItemDOM';

const tabControl = new TabControlDOM();
const tabItem = new TabItemDOM();

new DOMRegistry([
    tabControl,
    tabItem,
]);
