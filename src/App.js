import React from "react";
import { connect } from "react-redux";
import { Home, Quiz, Score } from "./container";

const HOME_PAGE = "Home";
const QUIZ_PAGE = "Quiz";
const SCORE_PAGE = "Score";

export class ConnectedApp extends React.Component {
    
    renderPage = () => {
        switch(this.props.page) {
            case (HOME_PAGE):
                return <Home/>
            case (QUIZ_PAGE):
                return <Quiz/>
            case(SCORE_PAGE):
                return <Score/>
            default:
                return <Home/>
        }  
    }

    render() {
        return (
            <div className="App">
                {this.renderPage()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return { page: state.page, quiz: state.quiz };
};

export const App = connect(mapStateToProps)(ConnectedApp);