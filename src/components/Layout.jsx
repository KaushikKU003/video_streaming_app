import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaHome,FaFire, FaBars } from "react-icons/fa";
import {IoGameControllerOutline,IoSearch,IoMusicalNotesSharp} from "react-icons/io5"
import { FaComputer } from "react-icons/fa6";
import Youtube from "../assets/utube_light.png";

function Layout() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="d-flex">
      {/* Top Navbar */}
      <nav className="navbar bg-dark border-bottom border-body position-fixed top-0 w-100 d-flex align-items-center" 
         style={{ height: "60px", zIndex: "1050" }}>
      <div className="container-fluid d-flex justify-content-between">
        
        {/* Left: Menu & Logo */}
        <div className="d-flex align-items-center">
          <button className="btn btn-dark" onClick={() => setCollapsed(!collapsed)}>
            <FaBars size={20} />
          </button>
          <Link className="navbar-brand ms-2" to="/">
            <img src={Youtube} alt="Logo" style={{ height: "2rem", width: "auto" }} />
          </Link>
        </div>

        {/* Center: Search Form */}
        <form className="d-flex flex-grow-1 justify-content-center mx-3" style={{ maxWidth: "25rem" }}>
          <input className="form-control rounded rounded-3" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-secondary ms-2" type="submit">
            <IoSearch size={20} />
          </button>
        </form>

        {/* Right: User Profile */}
        <div className="d-flex align-items-center">
          <img src="https://shorturl.at/hqSen" alt="Profile" className="rounded-circle" 
               style={{ width: "40px", height: "40px", objectFit: "cover" }} />
        </div>
        
      </div>
    </nav>

      {/* Sidebar */}
      <div className="bg-dark text-white p-3 d-flex flex-column align-items-center position-fixed start-0" 
           style={{ 
             width: collapsed ? "60px" : "200px", 
             transition: "width 0.3s", 
             height: "calc(100vh - 60px)", // Adjust height so it doesn't overlap with navbar
             top: "60px", // Moves sidebar below navbar
             zIndex: "1000"
           }}>
        <Link to="/" className="btn btn-dark text-white d-flex align-items-center my-4" 
              style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
          <FaHome size={24} style={{ minWidth: "24px" }} />
          {!collapsed && <span className="ms-2">Home</span>}
        </Link>
        <Link to="/trending" className="btn btn-dark text-white d-flex align-items-center my-4" 
              style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
          <FaFire  size={24} className="mb-1" style={{ minWidth: "24px" }}/>
          {!collapsed && <span className="ms-2">Tending</span>}
        </Link>
        <Link to="/musics" className="btn btn-dark text-white d-flex align-items-center my-4" 
              style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
          <IoMusicalNotesSharp  size={24} className="mb-1" style={{ minWidth: "24px" }}/>
          {!collapsed && <span className="ms-2">Music</span>}
        </Link>
        <Link to="/gaming" className="btn btn-dark text-white d-flex align-items-center my-4" 
              style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
          <IoGameControllerOutline  size={24} className="mb-1" style={{ minWidth: "24px" }}/>
          {!collapsed && <span className="ms-2">Gaming</span>}
        </Link>

        <Link to="/technology" className="btn btn-dark text-white d-flex align-items-center my-4" 
              style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
          <FaComputer size={24} className="mb-1" style={{ minWidth: "24px" }} />
          {!collapsed && <span className="ms-2">Technology</span>}
        </Link>
      </div>

      {/* Main Content (Adjusted for fixed Navbar and Sidebar) */}
      <div className="flex-grow-1" style={{ 
            background: "black", 
            marginTop: "60px", // Push content below navbar
            marginLeft: collapsed ? "60px" : "200px", // Push content beside sidebar
            transition: "margin-left 0.3s",
            padding: "20px"
          }}>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
