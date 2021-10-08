import React, { Component } from "react";
import "../myStyle.css";
import Image from "../media/romantic_gentleman.png";

export default class Home extends Component {
    render() {
        return (
            <div className="row" style={{padding: "75px", margin: "0 auto"}}>
                
                <div className="col-6 col-s-6">
                    <div>
                        <img src={Image} alt="Nham N. Dinh"/>
                    </div>
                </div>

                <div className="col-6 col-s-6" style={{padding: "20px"}}>
                    <p>I am a romantic gentleman who is trying to break into the tech industry. I am fully commited to my future and I am always moving forward with strong resolve and true love overdrive.</p>
                </div>
            </div>
        )
    }
}