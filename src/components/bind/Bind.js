import React from "react";
import {Link} from "react-router-dom";
import BasicButton from "../BasicButton";

export default function Bind() {
    return (
        <div className="page-bind">
            <p>텍스트텍스트</p>
            <input type="text" name="bind_target"/>
            <input type="text" readOnly="" name="binded_target"/>
            <BasicButton buttonName={"Bind!"}>
            </BasicButton>
            <Link to="/">
                <BasicButton buttonName="Go to Home"></BasicButton>
            </Link>
        </div>
    )
}