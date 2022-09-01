import React from "react";

export default class ClickCountButton extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = { clickCount: 0 }
    }

    onClick = () => {
        this.setState(
            (clickCount) => {
                clickCount: clickCount++
            }
        )
    }

    render() {
        return (
            <button onClick={ this.onClick } >
                Click!
            </button>
        )
    }
}