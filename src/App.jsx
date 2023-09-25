import React from "react";
import "./App.css";
import DashBoard from "./components/DashBoard/DashBoard";
import NavigationBar from "./components/SideBar/NavigationBar";
const App = () => {
  return (
    <div className="flex">
      <NavigationBar className="fixed left-0 top-0"></NavigationBar>
      <DashBoard></DashBoard>
    </div>
  );
};

export default App;
