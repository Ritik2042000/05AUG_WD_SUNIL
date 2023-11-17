import { Route, Routes, useLocation } from "react-router-dom";
import "../assets/css/App.css";
import "../assets/css/media.css";
import Loginpage from "../components/Loginpage";
import Users from "../components/User.jsx";
import Dashboard from "../components/Dashboard.jsx";
import UsersReports from "../components/UsersReports.jsx";
import FinanceReports from "../components/FinanceReports.jsx";
import Notification from "../components/Notifications.jsx";
import Categories from "../components/Categories.jsx";
import Coupons from "../components/Coupons.jsx";
import Memberships from "../components/Membership.jsx";
import EmailTemplate from "../components/EmailTemplate.jsx";
import NotificationTemplate from "../components/NotificationTemplate.jsx";
import Lables from "../components/Lables.jsx";
import SuperAdminUsers from "../components/SuperAdminuser.jsx";
import Settings from "../components/Settings.jsx";
import ActivityLogs from "../components/ActivityLogs.jsx";
import NotificationBell from "../components/NotificationBell";
import Templates from "../components/Templates.jsx";
import CreateTemplate from "../components/Template_Inr_Pages/CreateTemplate";
import UpdateTemplate from "../components/Template_Inr_Pages/UpdateTemplate";
import CategoriesTemplates from "../components/CategoriesTemplates";
import UserDetalis from "../components/UserPageLayouts/UserDetalis";
import ScrollupButton from "../components/common Layouts/ScrollupButton";
import SideNav from "../components/common Layouts/SideNav";
import SuperAdminRoles from "../components/SuperAdminRoles";
import BusinessAdminDetalis from "../components/UserPageLayouts/BusinessAdminDetalis.jsx";
import EditEmailTemplate from "../components/EditEmailTemplate";
import EditNotificationTemplate from "../components/EditNotificationTemplate";

function App() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <SideNav />}

      <Routes>
        {/* <Route
          path="/*"
          element={<SideNav />}
          index={<Outlet/>}/> */}
        <Route index path="/" element={<Loginpage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/userdetalis" element={<UserDetalis />} />
        <Route path="/users/businessadmin" element={<BusinessAdminDetalis />} />
        <Route path="/usersreports" element={<UsersReports />} />
        <Route path="/financereports" element={<FinanceReports />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/categories" element={<Categories />} />
        <Route
          path="/categories/categoriestemplate"
          element={<CategoriesTemplates />}
        />
        <Route path="/templates" element={<Templates />} />
        <Route path="/templates/createtemplate" element={<CreateTemplate />} />
        <Route path="/templates/updatetemplate" element={<UpdateTemplate />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/memberships" element={<Memberships />} />
        <Route path="/emailtemplate" element={<EmailTemplate />} />
        <Route
          path="/emailtemplate/editemailtemplate"
          element={<EditEmailTemplate />}
        />
        <Route
          path="/notificationtemplate"
          element={<NotificationTemplate />}
        />
        <Route
          path="notificationtemplate/editnotificationtemplate"
          element={<EditNotificationTemplate />}
        />
        <Route path="/labels" element={<Lables />} />
        <Route path="/superadminusers" element={<SuperAdminUsers />} />
        <Route path="/superadminroles" element={<SuperAdminRoles />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/activitylogs" element={<ActivityLogs />} />
        <Route path="/notificationbell" element={<NotificationBell />} />
        {/* <Route path='/logout' element={<LogOut/>} /> */}
      </Routes>
      <ScrollupButton />
    </>
  );
}

export default App;
