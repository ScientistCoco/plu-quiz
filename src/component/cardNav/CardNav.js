import * as React from "react";

import "./styles.scss";

// TODO: 
// Clicking on label ticks the radio input
// Add onchange event to inputs -> triggers the getActiveTabContent

export class CardNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            content: ""
        }
    }

    getActiveTabContent = () => {
        var content = this.state.activeTab == 0 ? this.props.tab1 : this.props.tab2;
        this.setState({
            content: content
        })
    }

    render() {
        return (
            <div className="CardNav">
                <section className="card-image">
                    <div id="img"/>
                </section>
                <section className="card-content">
                    <div className="tabs">
                        <input type="radio" name="tabs-group" tag="tab0"/>
                        <label name="tab0"> Tab0 </label>
                        <input type="radio" name="tabs-group" tag="tab1"/>
                        <label name="tab1"> Tab1 </label>
                    </div>
                    <p className="tab-content">{this.state.content}</p>
                </section>                
            </div>
        )
    }
}