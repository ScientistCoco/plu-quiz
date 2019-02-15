import React from "react";
import { connect } from "react-redux";

import { COMMON_VEGETABLES } from "../../items";
import "./styles.scss";
import { getQuizResults } from "../../actions";

// TODO: 
// 1. Add focus to the input element when page finishes loading

export class ConnectedQuiz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            questions: [],
            incorrectQuestions: [],
            currentQuestion: 0,
            score: 0,
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

    handleChange = (e) => {             
        this.setState({
            input: e.target.value
        })
    }

    submit = () => {        
        var correctAns = this.state.questions[this.state.currentQuestion].plu
        var nextNumber = ++this.state.currentQuestion;
        var { incorrectQuestions, score, input } = this.state;

        if (input == correctAns) {
            ++score;
        } else { 
            incorrectQuestions.push(correctAns)
        }

        this.setState({
            currentQuestion: nextNumber,
            incorrectQuestions: incorrectQuestions,
            score: score
        })

        if (nextNumber == this.state.questions.length) {
            this.props.getQuizResults({score: score, incorrectQuestions: incorrectQuestions, 
                totalQuestions: this.state.questions.length});
        }
        
        this.clearInput();
    }

    generateQuestionOrder = () => {   
        this.setState({
            questions: COMMON_VEGETABLES,
            lastQuestion: COMMON_VEGETABLES.length
        })
    }

    componentWillMount() {
        this.generateQuestionOrder();
    }

    render() {
        return (
            <div className="Quiz">
                <nav><p>Quiz</p></nav>
                <img src={this.state.questions[this.state.currentQuestion].src}/>
                <input value={this.state.input} onChange={this.handleChange} type="number"/>
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


function mapDispatchToProps(dispatch) {
    return {
        getQuizResults: results => dispatch(getQuizResults(results))
    };
}

export const Quiz = connect(null, mapDispatchToProps) (ConnectedQuiz);