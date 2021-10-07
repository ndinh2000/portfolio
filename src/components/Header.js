import React, { Component } from "react";
import "../myStyle.css";
import { isMobile } from "react-device-detect";

export default class Header extends Component {
    render() {
        return (
            <header>
                <h1 className="header-brand" style={{fontSize: isMobile ? "40px" : "60px"}}>Nham N. Dinh</h1>
            </header>
        )
    }
}