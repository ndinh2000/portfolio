import React, { Component } from "react";
import { isMobile } from 'react-device-detect';
import "../myStyle.css";

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="row">
                
                    <div className="col-6 col-s-6">
                        <nav style={{textAlign: isMobile ? "center" : "left"}}>
                            <a href="https://www.linkedin.com/in/nhamdinh/" target="_blank" className="fa fa-linkedin-square fa_custom fa-2x links" style={{color: "rgb(52, 57, 67)"}}></a>
                            <a href="https://github.com/ndinh2000" target="_blank" className="fa fa-github-square fa_custom fa-2x links"></a>
                            <a href="mailto:nhamnd@uci.edu?subject=OMG%20I%20Love%20Nham%20Dinh" className="fa fa-envelope-square fa_custom fa-2x links"></a>
                        </nav>
                    </div>

                    <div className="col-6 col-s-6" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                        <p style={{marginTop: "auto", textAlign: isMobile ? "center" : "right"}}>Copyright 2021</p>
                    </div>
                </div>
            </footer>
        )
    }
}