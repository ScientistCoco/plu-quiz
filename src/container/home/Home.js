import * as React from "react";

import { Card } from "../../component/card";
import "./styles.scss";

export class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <nav><p>Home</p></nav>
                <Card/>
            </div>
        )
    }
}