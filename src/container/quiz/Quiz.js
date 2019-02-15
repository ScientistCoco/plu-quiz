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
            attempts: 0,
            shake: false,
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

    handleIncorrectAnswer = () => {
        this.setState({
            shake: true
        })

        setTimeout(() => {
            this.setState({shake: false});
        }, 200)
    }

    submit = () => {        
        var correctAns = this.state.questions[this.state.currentQuestion]
        var nextNumber = ++this.state.currentQuestion;
        var { incorrectQuestions, score, input, attempts } = this.state;

        if (input == correctAns.plu) {
            ++score;
        } 
        else if (attempts === 2) {
            incorrectQuestions.push(`${correctAns.plu} - ${correctAns.name}`);
            attempts = 0;
            this.handleIncorrectAnswer();
        } else {
            --nextNumber;
            ++attempts;            
            this.handleIncorrectAnswer();
        }

        this.setState({
            currentQuestion: nextNumber,
            incorrectQuestions: incorrectQuestions,
            score: score,
            attempts: attempts
        })

        if (nextNumber == this.state.questions.length) {
            this.props.getQuizResults({score: score, incorrectQuestions: incorrectQuestions, 
                totalQuestions: this.state.questions.length});
        }
        
        this.clearInput();
        this.inputEl.current.focus();
    }

    generateQuestionOrder = () => {   
        var temp = this.props.questionDeck;
        for (let i = temp.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [temp[i], temp[j]] = [temp[j], temp[i]];
        }

        this.setState({
            questions: temp,
            lastQuestion: temp.length
        })
    }

    componentWillMount() {
        this.generateQuestionOrder();
    }

    render() {
        return (
            <div className="Quiz">
                <nav>
                    <p>Quiz</p>
                    <p>{this.state.currentQuestion} / {this.state.questions.length}</p>
                </nav>
                <img className={this.state.shake ? "shake" : ""} src={this.state.questions[this.state.currentQuestion].src}/>
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

const mapStateToProps = state => {
    return {
        questionDeck: state.questionDeck
    };
};

function mapDispatchToProps(dispatch) {
    return {
        getQuizResults: results => dispatch(getQuizResults(results))
    };
}

export const Quiz = connect(mapStateToProps, mapDispatchToProps) (ConnectedQuiz);