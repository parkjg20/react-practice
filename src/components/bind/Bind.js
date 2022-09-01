import "../../stylesheets/bind/bind.css"
import React from "react";
import BasicButton from "../BasicButton";

export default class Bind extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {text: '', boundText: ''}
    }

    render() {
        return (
            <div className="Page-Bind">
                <h1>Bind Test</h1>

                <div className="Input-Box">
                    <input
                        type="text"
                        name="bind_data"
                        onChange={(e) => {
                            this.setState({ text: e.target.value })
                        }}
                    />
                    <br/>
                    <input type="text" readOnly={true} name="bind_target" value={ this.state.boundText }/>
                    <br/>
                    <BasicButton buttonName={"Print!"} onClick={() => {
                        this.setState({
                            boundText: this.state.text
                        })
                    }}>
                    </BasicButton>
                </div>
            </div>
        )
    }
}
