import React, { useLayoutEffect, useState } from "react";
import "./AdminContent.css";
import Chart from './charts/charts';
import Chart2 from './charts/chart2';
import Alluser from "./Alluser";
import Chart3 from "./charts/chart3";
import Chart4 from "./charts/Chart4";
import Chart5 from "./charts/Chart5";
import { Outlet } from "react-router-dom";


const AdminContent = () => {


return (
  <>
    <div className="backgroundHalf"></div>
    <div className="content">
      <div className="dashboardText p-4">
        <h2>Dashboard</h2>
        <p>
          <span>Welcome back to the Dashboard.</span>
          <br />
          Scroll down to see quick links and overviews of your Server, To do
          list Order status or get some Help using Nifty.
        </p>
      </div>
      <div className="container row my-2">
        <div className="col-7">
          <div className="box1"><Chart2 /></div>
        </div>
        <div className="col-5">
          <div className="row">
            {/* <div className="col-6"> <div className="box2 mb-4"><Chart /></div></div>
            <div className="col-6"><div className="box2 mb-4" ><Chart3/></div></div>
            <div className="col-6"><div className="box2 mb-4"><Chart4/></div></div>
            <div className="col-6"><div className="box2 mb-4"><Chart5/></div></div> */}
          </div>
        </div>
      </div>
      <Alluser/>
      {/* <div className="p-4">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-4"></div>
            <div className="col-4"></div>
          </div>
        </div> */}

        <Outlet></Outlet>
    </div>
  </>
);
};

export default AdminContent;