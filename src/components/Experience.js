import React, { Component } from "react";
import experienceData from "../media/experienceData";
import ExperienceItem from "./ExperienceItem";
import "../myStyle.css";

export default class Experience extends Component {
    constructor(props) {
        super(props);
        this.listRef = React.createRef();
        this.data = experienceData.map(exp => {
            return <ExperienceItem key={exp.id} employer={exp.employer}
                url={exp.url} jobTitle={exp.jobTitle}
                timeFrame={exp.timeFrame} description={exp.description} />
        })
    }
    
    render() {
        return (
            <div className="experience">
                {this.data}
            </div>
        )
    }
}