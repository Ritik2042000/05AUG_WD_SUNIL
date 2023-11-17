import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";

const NotificationData = [
  {
    id: 1,
    notificationUserIcon: <FaUserCircle className="notification-user-icon" />,
    notificationBlockHeading: "Amaira has accepted rent contract. 1 Minute Ago",
    notificationDate: "3rd Dec 2022 11:5221",
    notificationDelete: <RiDeleteBin5Fill />,
    notificationDescription:
      "Pest vetum promissa memini cuius adeptione tupis: quem pollicitus est aversione aversi et fuga. Qui autem de re dest libido frustra miseri qui incurrit odium sul obiecti",
  },
  {
    id: 2,
    notificationUserIcon: <FaUserCircle className="notification-user-icon" />,
    notificationBlockHeading: "Amaira has accepted rent contract. 1 Minute Ago",
    notificationDate: "3rd Dec 2022 11:5221",
    notificationDelete: <RiDeleteBin5Fill />,
    notificationDescription:
      "Pest vetum promissa memini cuius adeptione tupis: quem pollicitus est aversione aversi et fuga. Qui autem de re dest libido frustra miseri qui incurrit odium sul obiecti",
  },
  {
    id: 3,
    notificationUserIcon: <FaUserCircle className="notification-user-icon" />,
    notificationBlockHeading: "Special Renewal Offer -25% Off",
    notificationDate: "3rd Dec 2022 11:5221",
    notificationDelete: <RiDeleteBin5Fill />,
    notificationDescription:
      "Pest vetum promissa memini cuius adeptione tupis: quem pollicitus est aversione aversi et fuga. Qui autem de re dest libido frustra miseri qui incurrit odium sul obiecti",
  },
  {
    id: 4,
    notificationUserIcon: <FaUserCircle className="notification-user-icon" />,
    notificationBlockHeading: "Special Renewal Offer -25% Off",
    notificationDate: "3rd Dec 2022 11:5221",
    notificationDelete: <RiDeleteBin5Fill />,
    notificationDescription:
      "Pest vetum promissa memini cuius adeptione tupis: quem pollicitus est aversione aversi et fuga. Qui autem de re dest libido frustra miseri qui incurrit odium sul obiecti",
  },
  {
    id: 5,
    notificationUserIcon: <FaUserCircle className="notification-user-icon" />,
    notificationBlockHeading: "Special Renewal Offer -25% Off",
    notificationDate: "3rd Dec 2022 11:5221",
    notificationDelete: <RiDeleteBin5Fill />,
    notificationDescription:
      "Pest vetum promissa memini cuius adeptione tupis: quem pollicitus est aversione aversi et fuga. Qui autem de re dest libido frustra miseri qui incurrit odium sul obiecti",
  },
];

const NotificationBell = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="container">
          <div className="page-title">
            <h1 className="page-heading mb-0">Notification</h1>
          </div>

          <div className="notification-container">
            {NotificationData.map((value) => {
              return (
                <div className="card notification-card" key={value.id}>
                  <div className="card-body notification-card-body">
                    <div className="card-content d-md-flex">
                      <div className="text-center pb-4 pb-md-0">
                        {value.notificationUserIcon}
                      </div>
                      <div className="ps-md-4">
                        <div className="notification-block-heading d-md-flex justify-content-md-between align-items-baseline">
                          <h5 className="text-md-start text-center">
                            {value.notificationBlockHeading}
                          </h5>
                          <div className="notification-block-date d-flex justify-content-between align-items-baseline py-sm-1 py-md-0">
                            <p>{value.notificationDate}</p>
                            <span className="notification-block-delete">
                              {value.notificationDelete}
                            </span>
                          </div>
                        </div>
                        <p className="notification-block-description">
                          {value.notificationDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default NotificationBell;
