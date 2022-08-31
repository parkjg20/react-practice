import './App.css';
import BasicButton from './components/BasicButton'
import RouterComponent from './routers/RouterComponent'
import {Link} from "react-router-dom";

export default function App() {
    return (
        <div className="App">
            <RouterComponent></RouterComponent>
            <h2>Hello React</h2>
            <Link to="/bind">
                <BasicButton buttonName={"I'm Button"}>
                </BasicButton>
            </Link>
        </div>
    );
}