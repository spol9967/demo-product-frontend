import React, { useState } from "react";
// import bgimage from '../assets/Products.png'

const Dashboard = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
  };
  return (
    <div className="banner">
    </div>
  );
};

export default Dashboard;
