import { useState } from "react";
import "./Sidebar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import sidebardata from "./SidebarData";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleTrigger = () => setIsOpen(!isOpen);

  return (
    <>
      <div></div>
      <div className={`sidebar ${isOpen ? "sidebar_open" : ""}`}>
        <div className="trigger" onClick={handleTrigger}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </div>
        {sidebardata.map((item, key) => (
          <Link to={item.link} key={key} style={{ textDecoration: "none" }}>
            <div className="sidebar-position">
              <FontAwesomeIcon icon={item.icon} />
              <span>{item.title}</span>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
