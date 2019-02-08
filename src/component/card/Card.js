import * as React from "react";

import "./styles.scss";

export class Card extends React.Component {
    render() {
        return (
            <div className="Card">
                <section className="card-image">
                    <div id="squash"/>
                </section>
                <section className="card-content">
                    <p> Common fruits </p>
                    <i className="material-icons">play_arrow</i>
                </section>
            </div>
        )
    }
}