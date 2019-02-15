import * as React from "react";
import Confetti from "react-dom-confetti";

import "./styles.scss";

// Interface:
// tab0Content: string
// tab1Content: string
// tab0Name: string
// tab1Name: string

export class CardTabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeTab: 0,
            content: ""
        }
    }

    getActiveTabContent = (e) => {
        var content = e.target.id === "tab0" ? this.props.tab0Content : this.props.tab1Content;
        this.setState({
            content: content
        })
    }

    componentDidMount() {
        this.setState({
            content: this.props.tab0Content
        })
    }

    render() {
        const { tab0Name, tab1Name, tab0Content, tab1Content } = this.props;

        return (
            <div className="CardTabs">
                <section className="card-image">       
                    <img id="img" src={this.props.imgSrc}/>
                </section>
                <section className="card-content">
                    <div className="tabs">
                        <input type="radio" name="tabs-group" defaultChecked id="tab0" onChange={this.getActiveTabContent}/>
                        <label htmlFor="tab0"> {tab0Name} </label>
                        <input type="radio" name="tabs-group" id="tab1" onChange={this.getActiveTabContent}/>
                        <label htmlFor="tab1"> {tab1Name} </label>
                    </div>
                    <p className="tab-content">{this.state.content}</p>
                </section>                
            </div>
        )
    }
}

CardTabs.defaultProps = {
    tab0Name: "tab0",
    tab1Name: "tab1",
    tab0Content: "Tab0 content",
    tab1Content: "Tab1 content"
}