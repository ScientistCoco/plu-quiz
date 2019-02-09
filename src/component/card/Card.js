import * as React from "react";

import { connect } from "react-redux";
import { startQuiz } from "../../actions";
import "./styles.scss";

/** Prop Types:
 * - type = what kind of quiz it is
 * - image = what image to display
 */
class ConnectedCard extends React.Component {
    handleClick = () => {
        this.props.startQuiz(this.props.type)
    }

    render() {
        const { type, image } = this.props;

        return (
            <div className={`Card ${image}`}>
                <section className="card-image">
                    <div id={image ? image : "squash"}/>
                </section>
                <section className="card-content" onClick={this.handleClick}>
                    <p> {type ? type : "Common fruits"} </p>
                    <i className="material-icons">play_arrow</i>
                </section>                
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startQuiz: quiz => dispatch(startQuiz(quiz))
    };
}

export const Card = connect(null, mapDispatchToProps) (ConnectedCard);