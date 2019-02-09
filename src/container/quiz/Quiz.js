import React from "react";

import { ASPARAGUS, BUTTER_BEAN } from "../../items";
import "./styles.scss";

export class Quiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    renderKeypad(start, end) {
        var arr = [];
        for (let i = start; i <= end; i++) {
            arr.push(i);
        }

        return (
            <ul>
                {arr.map((item) => <li value={item} onClick={this.handleClick}>{item}</li>)}
            </ul>
        )
    }

    handleClick = (e) => {        
        var newVal = `${this.state.input ? this.state.input: '' }${e.target.value}`;
        this.setState({input: newVal})
    }

    clearInput = () => {
        this.setState({
            input: ''
        })
    }

    submit = () => {
        console.log("Submit answer");
        this.setState({
            input: ''
        })
    }

    render() {
        return (
            <div className="Quiz">
                <nav><p>Quiz</p></nav>
                <img src={ASPARAGUS.src}/>
                <input value={this.state.input}/>
                <div className="keypad">
                    {this.renderKeypad(0, 2)}
                    {this.renderKeypad(3, 5)}
                    {this.renderKeypad(6, 8)}
                    <ul>
                        <li value={9} onClick={this.handleClick}>9</li>
                        <li onClick={this.clearInput}>Clear</li>
                        <li onClick={this.submit}>Go</li>
                    </ul>
                </div>
            </div>
        )
    }
}