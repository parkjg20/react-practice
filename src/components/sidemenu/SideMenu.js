import './side-menu.css'
import React from "react";
import {Link} from "react-router-dom";

export default class SideMenu extends React.Component {

    render() {
        return (
            <div className="sideMenu">
                <ul>
                    <li>
                        <Link to="/">
                            <h3 className="">Main</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bind">
                            <h3 className="">Bind</h3>
                        </Link>
                    </li>
                </ul>
            </div>
        )
    }
}