import React, { useState } from "react";
import Maintenance from "./SettingsPageLayout/Maintenance";
import Application from "./SettingsPageLayout/Application";
import Company from "./SettingsPageLayout/Company";
import PaymentGateway from "./SettingsPageLayout/PaymentGateway";
import SMTPFCM from "./SettingsPageLayout/SMTPFCM";
import ContactUserPrice from "./SettingsPageLayout/ContactUserPrice";

const Settings = () => {
  const tabs = [
    "Maintenance",
    "Application",
    "Company",
    "Payment Gateway",
    "SMTP & FCM",
    "Contact & User Price",
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Settings</h1>
          </div>
          <div className="card mb-4">
            <div className="card-body p-4">
              <div className="d-flex flex-wrap">
                {tabs.map((tab, key) => (
                  <div
                    key={key}
                    className={`nav-link ${
                      activeTab === tab ? "active-tab" : ""
                    }`}
                  >
                    <li
                      className="active-tabs my-2 me-3 me-lg-5"
                      onClick={() => handleTabClick(tab)}
                    >
                      {tab}
                    </li>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`${activeTab === tabs[0] ? "fade-in" : "fade-out"}`}>
            <Maintenance />
          </div>
          <div className={`${activeTab === tabs[1] ? "fade-in" : "fade-out"}`}>
            <Application />
          </div>
          <div className={`${activeTab === tabs[2] ? "fade-in" : "fade-out"}`}>
            <Company />
          </div>
          <div className={`${activeTab === tabs[3] ? "fade-in" : "fade-out"}`}>
            <PaymentGateway />
          </div>
          <div className={`${activeTab === tabs[4] ? "fade-in" : "fade-out"}`}>
            <SMTPFCM />
          </div>
          <div className={`${activeTab === tabs[5] ? "fade-in" : "fade-out"}`}>
            <ContactUserPrice />
          </div>
        </div>
      </div>
    </>
  );
};

export default Settings;
