import React from "react";
import { connect } from "react-redux";
import { startQuiz, goToStart } from "../../actions";

import "./styles.scss";
import { CardTabs } from "../../component/cardTabs/CardTabs";

export class ConnectedScore extends React.Component {
    parseIncorrectQuestions = () => {
        return this.props.incorrectQuestions.map((item) => <p>{item}</p>)
    }

    restartQuiz = () => {
        this.props.startQuiz(this.props.quiz);
    }

    goBackToHome = () => {
        this.props.goToStart();
    }

    render() {
        return (
            <div className="Score">
                <nav>
                    <p>Results</p>
                    <p onClick={this.restartQuiz}>Redo</p>
                    <p onClick={this.goBackToHome}>Home</p></nav>
                <section>
                    <CardTabs 
                        imgSrc={require("../../img/Icons/healthy-food.png")}
                        tab0Name="Result"
                        tab1Name="Incorrect questions"
                        tab0Content={`You got ${this.props.score} out of ${this.props.totalQuestions}`}
                        tab1Content={["The following were incorrect:", this.parseIncorrectQuestions()]}
                    />
                </section>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { score: state.score, 
            totalQuestions: state.totalQuestions, 
            incorrectQuestions: state.incorrectQuestions,
            quiz: state.quiz };
};

function mapDispatchToProps(dispatch) {
    return {
        startQuiz: quiz => dispatch(startQuiz(quiz)),
        goToStart: () => dispatch(goToStart())
    }
}

export const Score = connect(mapStateToProps, mapDispatchToProps)(ConnectedScore);