  import { useState } from "react";
  import { Link, NavLink, Outlet,useNavigate } from "react-router-dom";
  import { FaHome,FaFire, FaBars } from "react-icons/fa";
  import {IoGameControllerOutline,IoSearch,IoMusicalNotesSharp} from "react-icons/io5"
  import { FaComputer } from "react-icons/fa6";
  import Youtube_light from "../assets/utube_light.png";
  import Youtube__dark from "../assets/utube_dark.png"
  import { MdDarkMode,MdLightMode } from "react-icons/md";
  import "../CSS/Layout.css"

  import { useTheme } from "../context/ThemeContext";

  function Layout() {
    const [collapsed, setCollapsed] = useState(true);
    const [query, setQuery] = useState("");
    const {theme,toggleTheme}=useTheme()
    const navigate = useNavigate();

    const handleSearch = (e) => {
      e.preventDefault();
      if (query.trim()) {
        navigate(`/result?search=${encodeURIComponent(query)}`);
      }
    };

    return (
      <div className="d-flex">
        {/* Top Navbar */}
        <nav className={`navbar position-fixed top-0 w-100 d-flex align-items-center ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`} 
          style={{ height: "60px", zIndex: "1050" }}>
        <div className="container-fluid d-flex justify-content-between">
          
          {/* Left: Menu & Logo */}
          <div className="d-flex align-items-center">
            <button className={`btn ${theme==="dark"?"btn-dark":"btn-light"}`} onClick={() => setCollapsed(!collapsed)}>
              <FaBars size={20} />
            </button>
            <Link className="navbar-brand ms-2" to="/">
            {theme==="dark"?<img src={Youtube_light} alt="Logo" style={{ height: "2rem", width: "auto" }} />: <img src={Youtube__dark} alt="Logo" style={{ height: "2.5rem", width: "auto" }} />}
              
            </Link>
          </div>

          {/* Center: Search Form */}
          <form className="d-flex flex-grow-1 justify-content-center mx-3" style={{ maxWidth: "25rem" }} onSubmit={handleSearch}>
            <input className={`form-control rounded rounded-3 ${theme==="dark"?"":"bg-secondary"}`} type="search" placeholder="Search" aria-label="Search"  value={query}
              onChange={(e) => setQuery(e.target.value)}/>
            <button className="btn btn-secondary ms-2" type="submit">
              <IoSearch size={20} />
            </button>
          </form>
          {/* Right: Theme Toggle & User Profile */}
          <div className="d-flex align-items-center gap-3">
            <button className="btn btn-light" onClick={toggleTheme}>
              {theme === "light" ? <MdDarkMode size={24} /> : <MdLightMode size={24} />}
            </button>

            <img
              src="https://shorturl.at/hqSen"
              alt="Profile"
              className="rounded-circle"
              style={{ width: "40px", height: "40px", objectFit: "cover" }}
            />
          </div>

          
        </div>
      </nav>

        {/* Sidebar */}
        <div className={`sidebar p-3 d-flex flex-column align-items-center position-fixed start-0 ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
          style={{ 
            width: collapsed ? "60px" : window.innerWidth < 611 ? "150px" : "200px", 
            transition: "width 0.3s", 
            height: "100vh", // Ensure full viewport height
            minHeight: "100vh", // Prevent height shrinking issue
            top: "60px", // Moves sidebar below navbar
            zIndex: "1000"
          }}>
          <NavLink
            to="/"
            className={`btn ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"} d-flex align-items-center my-4`}
            style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}
          >
            <FaHome size={24} style={{ minWidth: "24px" }} />
            {!collapsed && <span className="ms-2">Home</span>}
          </NavLink>
          <NavLink to="/trending" className={`btn ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"} d-flex align-items-center my-4`}
                style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
            <FaFire  size={24} className="mb-1" style={{ minWidth: "24px" }}/>
            {!collapsed && <span className="ms-2">Tending</span>}
          </NavLink>
          <NavLink to="/musics" className={`btn ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"} d-flex align-items-center my-4`} 
                style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
            <IoMusicalNotesSharp  size={24} className="mb-1" style={{ minWidth: "24px" }}/>
            {!collapsed && <span className="ms-2">Music</span>}
          </NavLink>
          <NavLink to="/gaming" className={`btn ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"} d-flex align-items-center my-4`}
                style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
            <IoGameControllerOutline  size={24} className="mb-1" style={{ minWidth: "24px" }}/>
            {!collapsed && <span className="ms-2">Gaming</span>}
          </NavLink>

          <NavLink to="/technology" className={`btn ${theme === "dark" ? "btn-dark text-white" : "btn-light text-dark"} d-flex align-items-center my-4`} 
                style={{ width: "100%", fontSize: "1.2rem", justifyContent: "center" }}>
            <FaComputer size={24} className="mb-1" style={{ minWidth: "24px" }} />
            {!collapsed && <span className="ms-2">Technology</span>}
          </NavLink>
        </div>

        {/* Main Content (Adjusted for fixed Navbar and Sidebar) */}
        <div className="flex-grow-1" style={{ 
              background: theme === "dark" ? "black" : "white", 
              color: theme === "dark" ? "white" : "black",
              marginTop: "60px", // Push content below navbar
              marginLeft: window.innerWidth <= 610 ? (collapsed ? "60px" : "150px") : (collapsed ? "60px" : "200px"),
              transition: "margin-left 0.3s",
              padding: "20px",
              maxWidth:"100vw",
              overflowX: "hidden"
            }}>
          <Outlet />
        </div>
      </div>
    );
  }

export default Layout;