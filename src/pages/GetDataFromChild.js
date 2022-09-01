
import React from "react";
import {Link} from "react-router-dom";
import BasicButton from "../components/BasicButton";
import ClickCountButton from "../components/ClickCountButton";

export default class GetDataFromChild extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = { clickCount: 0 }
    }

    render() {
        return (
            <div className="Page-Get-From-Child">
                <h1>Get Data From Child</h1>

                <p>버튼 클릭 횟수는 { this.state.clickCount }</p>
                <br/>
                <ClickCountButton buttonName={"Print!"} onClick={}>
                </ClickCountButton>
                <Link to="/">
                    <BasicButton buttonName="Go to Home"></BasicButton>
                </Link>
            </div>
        )
    }
}
