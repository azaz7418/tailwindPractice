import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const LayOut = () => {
    return (
        <div className="layout">
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default LayOut;