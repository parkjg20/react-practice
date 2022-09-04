import {Route, Routes} from "react-router-dom";

import React from "react";
import Bind from "../pages/Bind";
import Home from "../components/Home";
import NotFound from "../components/NotFound";
import ConditionalRendering from "../pages/ConditionalRendering";

export default class MainRoutes extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" exact element={ <Home /> }/>
                <Route path="/bind" exact element={ <Bind /> }/>
                <Route path="/conditional-rendering" exact element={ <ConditionalRendering /> }/>
                <Route path="*" exact element={ <NotFound /> }/>
            </Routes>
        )
    }
}