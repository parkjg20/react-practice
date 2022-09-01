import "../stylesheets/basic-button.css"
import React from "react";

export default class BasicButton extends React.Component {

    constructor(props, context) {
        super(props, context);

        if (!props.buttonName) {
            throw new Error("BasicButton: buttonName is required")
        }
    }

    render() {
        return (
            <button className="BasicButton" onClick={ this.props.onClick } >
                { this.props.buttonName }
            </button>
        )
    }
}