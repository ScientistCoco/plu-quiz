import React from "react";
import { connect } from "react-redux";

import "./styles.scss";
import { CardNav } from "../../component/cardNav/CardNav";

export class ConnectedScore extends React.Component {
    render() {
        return (
            <div className="Score">
                <nav><p>Results</p></nav>
                <p> Score </p>
                <p> {this.props.score} out of {this.props.totalQuestions} </p>
                <CardNav/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { score: state.score, totalQuestions: state.totalQuestions };
};

export const Score = connect(mapStateToProps)(ConnectedScore);