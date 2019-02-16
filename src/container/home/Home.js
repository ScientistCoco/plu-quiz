import * as React from "react";

import { Card } from "../../component/card";
import "./styles.scss";

export class Home extends React.Component {
    render() {
        return (
            <div className="Home">
                <nav><p>Home</p></nav>
                <div className="content">
                    <Card type="Common fruits" image="common-fruit"/>
                    <Card type="Common vegetables" image="common-vegetables"/>
                    <Card type="Tomatoes" image="tomatoes"/>                    
                    <Card type="Potatoes" image="potatoes"/>
                    <Card type="Herbs" image="herbs"/>
                    <Card type="Beans" image="beans"/>
                    <Card type="Chinese vegetables" image="chinese-vegetables"/>
                    <Card type="Squash" image="squash"/>
                </div>
            </div>
        )
    }
}