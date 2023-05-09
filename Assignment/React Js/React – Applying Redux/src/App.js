 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Userlist from './Components/Userlist';
import Adduser from './Components/Adduser';
import Updateuser from './Components/Updateuser';
import Header from './Components/Header';
import { Provider } from 'react-redux';
import Store from './Redux/Store';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <Provider store={Store}>
    <div >
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/user' element={<Userlist></Userlist>}></Route>
        <Route path='/user/Adduser' element={<Adduser></Adduser>}></Route>
        <Route path='/user/edit/:code' element={<Updateuser></Updateuser>}></Route>
      </Routes>
      </BrowserRouter>
      <ToastContainer className='toast-position' position='bottom-right'></ToastContainer>
    </div>
    </Provider>
  );
}

export default App;
