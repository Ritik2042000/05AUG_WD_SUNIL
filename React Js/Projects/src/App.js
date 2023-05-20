import React from 'react';
import Resturent from './Components/Basic/Resturent';
import Usestate from './Components/Hooks/usestate';
import Usereducer from './Components/Hooks/Usereducer';
import Todo from './Components/TodoList/Todo';
import Weather from './Components/Weather-app/Weather';
import ApiExample from './Components/ApiData/ApiExample';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Resturent' element={<Resturent/>}/>
        <Route path='/TodoList' element={<Todo/>}/>
        <Route path='/Weather' element={<Weather/>}/>

      {/* <Resturent/> */}
      {/* <Usestate/> */}
      {/* <Usereducer/> */}
      {/* <Todo/> */}
      {/* <ApiExample/> */}
      {/* <Weather/> */}
    </Routes>
      
      </BrowserRouter>
  );
};

export default App;
