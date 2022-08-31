import {Route, Routes} from "react-router-dom";

import React from "react";
import App from "../App";
import Bind from "../components/bind/Bind";

export default class RouterComponent extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" component={<App/>}/>
                <Route path="/bind" component={<Bind/>}/>
            </Routes>
        )
    }
}