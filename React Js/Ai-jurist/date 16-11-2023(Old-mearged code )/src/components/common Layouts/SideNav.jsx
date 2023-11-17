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
  const [heightSecondCom, setHeightSecondCom] = useState("drop-down");
  const toggleDropdown = (height, setStateFunction) => {
    setStateFunction((prevState) =>
      prevState === "drop-down" ? "drop-down_open" : "drop-down"
    );
  };

  const closeAllDropdowns = () => {
    setHeight("drop-down");
    setHeightSecondCom("drop-down");
    setSidebarOpen(false);
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
      <div className={`nav-wrapper  bg-nav  ${isSidebarOpen ? "open" : ""}`}>
        <div className="nav-logo py-4 position-fixed">
          <img src={Logo} alt="company logo" title="Logo" className="p-1" />
          <p className="logo-title">end-to-end contract management solution</p>
        </div>
        <div className="nav-links py-4 ">
          <ul className="links-styles">
            <NavLink
              className=""
              to="/dashboard"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <AiFillHome className="icon_size" />
                Dashboard
              </li>
            </NavLink>

            <NavLink className=" " to="/users" onClick={closeAllDropdowns}>
              <li>
                <HiOutlineUsers
                  className="icon_size"
                  activeclassname="active"
                />
                Users{" "}
              </li>
            </NavLink>
            <li
              onClick={() => toggleDropdown(height, setHeight)}
              className="pointer"
            >
              <FaChartSimple className="icon_size" />
              Reports
            </li>
            <div className={height}>
              <ul>
                <NavLink
                  className=" "
                  to="/usersreports"
                  activeclassname="active"
                  onClick={() => setSidebarOpen(false)}
                >
                  <li>
                    <FaChartSimple className="icon_size" />
                    User Reports
                  </li>
                </NavLink>
                <NavLink
                  className=" "
                  to="/financereports"
                  activeclassname="active"
                  onClick={() => setSidebarOpen(false)}
                >
                  <li>
                    <FaChartSimple className="icon_size" />
                    Finance Reports
                  </li>
                </NavLink>
              </ul>
            </div>
            <NavLink
              className=""
              to="/notification"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <FaRegBell className="icon_size" />
                Notifications
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/categories"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <BsFillGridFill className="icon_size" />
                Categories
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/templates"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <RiPagesLine className="icon_size" />
                Templates
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/coupons"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <AiOutlinePercentage className="icon_size" />
                Coupons
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/memberships"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <BsCreditCard className="icon_size" />
                Memberships
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/emailtemplate"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <HiOutlineMail className="icon_size" />
                Email Templates
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/notificationtemplate"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <HiOutlineMailOpen className="icon_size" />
                Notification Templates
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/labels"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <BsFillTagFill className="icon_size" />
                Labels
              </li>
            </NavLink>
            <li
              onClick={() =>
                toggleDropdown(heightSecondCom, setHeightSecondCom)
              }
              className="pointer"
            >
              <FaPersonMilitaryRifle className="icon_size" />
              Super Admin
            </li>
            <div className={heightSecondCom}>
              <ul>
                <NavLink
                  className=" "
                  to="/superadminusers"
                  activeclassname="active"
                  onClick={() => setSidebarOpen(false)}
                >
                  <li>
                    <FaPersonMilitaryRifle className="icon_size" />
                    Users
                  </li>
                </NavLink>
                <NavLink
                  className=" "
                  to="/superadminroles"
                  activeclassname="active"
                  onClick={() => setSidebarOpen(false)}
                >
                  <li>
                    <FaPersonMilitaryRifle className="icon_size" />
                    Roles
                  </li>
                </NavLink>
              </ul>
            </div>

            <NavLink
              className=""
              to="/settings"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
              <li>
                <BsFillGearFill className="icon_size" />
                Settings
              </li>
            </NavLink>
            <NavLink
              className=""
              to="/activitylogs"
              activeclassname="active"
              onClick={closeAllDropdowns}
            >
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
