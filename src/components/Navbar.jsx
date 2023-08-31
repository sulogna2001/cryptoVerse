import React, { useState, useEffect } from "react";
import { Typography, Avatar, Button, Menu } from "antd";
import {
  MenuOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

// import icon from "../images/cryptocurrency.png"
import icon from "../images/logo.png";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleScreen = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleScreen);
    return () => window.removeEventListener("resize", handleScreen);
  }, []);
  useEffect(() => {
    if (screenSize <= 800) setActiveMenu(false);
    else setActiveMenu(true);
  }, [screenSize]);

  return (
    <div className="nav-container">
      <div className="logo-container">
        <img src={icon} alt="logo" />
        <h2 className="logo">Cryptostat</h2>
        <Button
          className="menu-control-container"
          onClick={() => setActiveMenu(!activeMenu)}
        >
          <MenuOutlined />
        </Button>
      </div>
      {activeMenu && (
        <Menu style={{ background: "#bbf3e0",fontSize:'1.2rem',margin:'1rem' }}>
          <Menu.Item>
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item>
            <Link to="/cryptocurrencies">Crypto</Link>
          </Menu.Item>
          <Menu.Item >
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      )}
    </div>
  );
};
export default Navbar;
