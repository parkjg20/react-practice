import './App.css';
import MainRoutes from "./routers/MainRoutes";
import SideMenu from "./components/sidemenu/SideMenu";

export default function App() {
    return (
        <div className="App">
            <div className="Snb">
                <h2 className="Color-React">Tabs</h2>
                <SideMenu />
            </div>
            <div className="Main">
                <MainRoutes />

            </div>
        </div>
    );
}