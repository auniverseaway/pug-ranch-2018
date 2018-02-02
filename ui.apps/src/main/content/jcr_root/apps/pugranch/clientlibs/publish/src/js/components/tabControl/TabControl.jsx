/* global fetch */
import React from 'react';
import TabItem from '../tabItem/TabItem';

export default class TabControl extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {};
        this.state = { sort: 'AZ', tabItems: [] };

        this.props['tab-item'].map(tabItem => this.state.tabItems.push(tabItem.props.text));

        // Gross React Stuff
        this.handleClick = this.handleClick.bind(this);
        this.getData = this.getData.bind(this);
    }

    getData() {
        const fetchStr = `${this.props.model}?sort=${this.state.sort}`;
        const responsePromise = fetch(fetchStr, { credentials: 'same-origin' })
            .then(response => response.json());
        return responsePromise;
    }

    handleClick() {
        if (this.state.sort === 'AZ') {
            this.state.sort = 'ZA';
        } else {
            this.state.sort = 'AZ';
        }

        this.getData()
            .then((data) => {
                this.state.tabItems = [];
                data.children.forEach(child => this.state.tabItems.push(child.title));
                this.setState({
                    tabItems: this.state.tabItems,
                });
            });
    }

    render() {
        return (
            <React.Fragment>
                <h2>{this.props.title}</h2>
                <h3 className="test-sub-title">{this.props.h2.props.text}</h3>
                <button onClick={this.handleClick}>A-Z</button>
                {this.state.tabItems.map(tabItem =>
                    <TabItem key={tabItem} text={tabItem} />)}
            </React.Fragment>
        );
    }
}
