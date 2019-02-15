import React from "react";
import { connect } from "react-redux";

import { COMMON_VEGETABLES } from "../../items";
import "./styles.scss";
import { getQuizResults } from "../../actions";

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
        this.inputEl = React.createRef();
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

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
            this.submit();
        }
    }

    submit = () => {        
        var correctAns = this.state.questions[this.state.currentQuestion]
        var nextNumber = ++this.state.currentQuestion;
        var { incorrectQuestions, score, input } = this.state;

        if (input == correctAns.plu) {
            ++score;
        } else { 
            incorrectQuestions.push(`${correctAns.plu} - ${correctAns.name}`)
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
        this.inputEl.current.focus();
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
                <input autoFocus={true} ref={this.inputEl} value={this.state.input} 
                    onChange={this.handleChange} type="number"
                    onKeyPress={this.handleKeyPress}
                    />
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