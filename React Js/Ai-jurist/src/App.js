import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Loginpage from './components/Loginpage';
import SideNav from './components/common Layouts/SideNav';
import Users from './components/User.jsx';
import Dashboard from './components/Dashboard.jsx';
import UsersReports from './components/UsersReports.jsx';
import FinanceReports from './components/FinanceReports.jsx';
import Notification from './components/Notifications.jsx';
import Categories from './components/Categories.jsx'
import Tempalte from './components/Template.jsx'
import Coupans from './components/Coupans.jsx'
import Memberships from './components/Membership.jsx'
import EmailTemplate from './components/EmailTemplate.jsx'
import NotificationTemplate from './components/NotificationTemplate.jsx'
import Lables from './components/Lables.jsx'
import SuperAdminUsers from './components/SuperAdminuser.jsx'
import Settings from './components/Settings.jsx'
import ActivityLogs from './components/ActivityLogs.jsx'


function App() {
  return (
    <>
      {/* <Loginpage/> */}
      {/* <SideNav/> */}
      <Routes>
        <Route index path='/' element={<Loginpage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/users' element={<Users />} />
        <Route path='/usersreports' element={<UsersReports />} />
        <Route path='/financereports' element={<FinanceReports />} />
        <Route path='/notification' element={<Notification />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/tempalte' element={<Tempalte />} />
        <Route path='/coupans' element={<Coupans />} />
        <Route path='/memberships' element={<Memberships />} />
        <Route path='/emailtemplate' element={<EmailTemplate />} />
        <Route path='/notifictiontem' element={<NotificationTemplate />} />
        <Route path='/labels' element={<Lables />} />
        <Route path='/superadmin' element={<SuperAdminUsers />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/activitylogs' element={<ActivityLogs />} />
        {/* <Route path='/logout' element={<LogOut/>} /> */}

      </Routes>
    </>
  );
}

export default App;
