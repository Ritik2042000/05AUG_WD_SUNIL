import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { AiFillHome, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { FaChartSimple } from "react-icons/fa6";
import { FaRegBell } from "react-icons/fa";
import { BsFillGearFill, BsFillGridFill } from "react-icons/bs";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlinePercentage } from "react-icons/ai";
import { BsCreditCard } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsFillTagFill } from "react-icons/bs";
import { AiOutlineBars } from "react-icons/ai";
import { MdLogout } from "react-icons/md";
import { FaPersonMilitaryRifle } from "react-icons/fa6";
import { useState } from "react";
import Profilepic from "../../assets/images/admin.jpg";
import Header from "./Header";
import Footer from "./Footer";

const SideNav = () => {
  // for click to navlinks
  const [height, setHeight] = useState("drop-down");
  const dropdown = (height, setStatefunction) => {
    if (height === "drop-down") {
      setStatefunction((height) => (height = "drop-down_open"));
    } else {
      setStatefunction((height) => (height = "drop-down"));
    }
  };

  // for responsive button state
  //  function for button open & close
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => {
    setSidebarOpen(true);
  };

  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  return (
    <>
      <Header />
      {isSidebarOpen ? (
        <button
          id="close-button"
          className="btn btn-primary"
          onClick={closeSidebar}
        >
          <AiOutlineClose />
        </button>
      ) : (
        <button
          id="menu-button"
          className="btn btn-primary"
          onClick={openSidebar}
        >
          <AiOutlineMenu />
        </button>
      )}
      <div
        className={`nav-wrapper px-3 bg-nav  ${isSidebarOpen ? "open" : ""}`}
      >
        <div className="nav-logo py-4 position-fixed">
          <NavLink to="/">
            <img src={Logo} alt="company logo" title="Logo" className="p-1" />
          </NavLink>
        </div>
        <div className="nav-links py-4 ">
          <ul>
            <NavLink
              className="align-items-center d-flex "
              to="/dashboard"
              activeClassname="active"
            >
              <li>
                <AiFillHome className="icon_size" />
                Dashboard
              </li>
            </NavLink>
            <NavLink className=" " to="/users">
              <li>
                <HiOutlineUsers
                  className="icon_size"
                  activeClassname="active"
                />
                Users{" "}
              </li>
            </NavLink>
            <li onClick={() => dropdown(height, setHeight)} className="pointer">
              <FaChartSimple className="icon_size" />
              Reports
            </li>
            <div className={height}>
              <ul>
                <NavLink
                  className=" "
                  to="/usersreports"
                  activeClassname="active"
                >
                  <li>
                    <FaChartSimple className="icon_size" />
                    User Reports
                  </li>
                </NavLink>
                <NavLink
                  className=" "
                  to="/financereports"
                  activeClassname="active"
                >
                  <li>
                    <FaChartSimple className="icon_size" />
                    Finance Reports
                  </li>
                </NavLink>
              </ul>
            </div>
            <NavLink className="" to="/notification" activeClassname="active">
              <li>
                <FaRegBell className="icon_size" />
                Notifications
              </li>
            </NavLink>
            <NavLink className="" to="/categories" activeClassname="active">
              <li>
                <BsFillGridFill className="icon_size" />
                Categories
              </li>
            </NavLink>
            <NavLink className="" to="/templates" activeClassname="active">
              <li>
                <RiPagesLine className="icon_size" />
                Templates
              </li>
            </NavLink>
            <NavLink className="" to="/coupans" activeClassname="active">
              <li>
                <AiOutlinePercentage className="icon_size" />
                Coupons
              </li>
            </NavLink>
            <NavLink className="" to="/memberships" activeClassname="active">
              <li>
                <BsCreditCard className="icon_size" />
                Memberships
              </li>
            </NavLink>
            <NavLink className="" to="/emailtemplate" activeClassname="active">
              <li>
                <HiOutlineMail className="icon_size" />
                Email Templates
              </li>
            </NavLink>
            <NavLink className="" to="/notifictiontem" activeClassname="active">
              <li>
                <HiOutlineMailOpen className="icon_size" />
                Notification Templates
              </li>
            </NavLink>
            <NavLink className="" to="/labels" activeClassname="active">
              <li>
                <BsFillTagFill className="icon_size" />
                Labels
              </li>
            </NavLink>
            <NavLink className="" to="/superadmin" activeClassname="active">
              <li>
                <FaPersonMilitaryRifle className="icon_size" />
                Super Admin Users
              </li>
            </NavLink>
            <NavLink className="" to="/settings" activeClassname="active">
              <li>
                <BsFillGearFill className="icon_size" />
                Settings
              </li>
            </NavLink>
            <NavLink className="" to="/activitylogs" activeClassname="active">
              <li>
                <AiOutlineBars className="icon_size" />
                Activity Logs
              </li>
            </NavLink>
            <NavLink className="" to="/">
              <li>
                <MdLogout className="icon_size" />
                Log Out
              </li>
            </NavLink>
          </ul>
        </div>
        <div className="admin_detalis d-flex align-items-center py-3  ">
          <div className="rounded_img-sidenav border-radius-50 text-end px-2">
            <img src={Profilepic} alt="adminprofiepicture" />
          </div>
          <div className="admininfo">
            <p className="">Ai Jurist User</p>
            <span className="text-warning">Super Admin</span>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SideNav;
