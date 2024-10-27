import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const LayOut = () => {
  return (
    <div className="layout">
      <Header></Header>
      <div className="">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default LayOut;
