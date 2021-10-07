import React, { Component } from "react";
import "../myStyle.css";

export default class Contact extends Component {
    render() {
        return (
            <div className="row" style={{padding: "20px", width: "90%", margin: "0 auto"}}>
                <div className="col-12">
                    <p>Nham N. Dinh</p>
                    <p>+1 (657) 365-9729</p>
                    <p>nhamnd@uci.edu</p>
                </div>
                <div className="col-12">
                    <p>Follow me at</p>
                    <p>Github</p>
                    <p>LinkedIn</p>
                </div>
            </div>
        )
    }
}