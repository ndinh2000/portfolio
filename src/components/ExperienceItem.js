import React, { Component } from "react";
import "../myStyle.css";
import Parser from 'html-react-parser';

export default class ExperienceItem extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.description = []
    }

    getDescription = () => {
        let result = ""
        for (var i = 0; i < this.props.description.length; ++i) {
            console.log(this.props.description[i])
            result = result + "<p>" + this.props.description[i] + "</p>"
        }
        console.log(result)
        return result
    }

    getTitle = () => {
        return "<a href=" + this.props.url + ">" + this.props.employer + "</a>"
    }

    render() {
        return (
            <div className="experience-item">
                {/* <h1>{this.props.employer}</h1> */}
                <h1>{Parser(this.getTitle())}</h1>
                <h2>{this.props.jobTitle}</h2>
                <h3>{this.props.timeFrame}</h3>
                <div>{Parser(this.getDescription())}</div>
            </div>
        )
    }
}