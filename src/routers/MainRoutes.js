import {Route, Routes} from "react-router-dom";

import React from "react";
import Bind from "../components/bind/Bind";
import Home from "../components/Home";
import NotFound from "../components/NotFound";

export default class MainRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" exact element={ <Home /> }/>
                <Route path="/bind" exact element={ <Bind /> }/>
                <Route path="*" exact element={ <NotFound /> }/>
            </Routes>
        )
    }
}