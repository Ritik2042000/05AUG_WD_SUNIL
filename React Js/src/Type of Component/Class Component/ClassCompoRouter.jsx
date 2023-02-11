import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx'
class ClassCompoRouter extends Component {
    render() {
        return (
            <>
              <Routes>
                <Route path="/" element={<ClassCompoMenu/> }/>
              </Routes>  
            </>
        );
    }
}

export default ClassCompoRouter;