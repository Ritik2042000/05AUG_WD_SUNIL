import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu.jsx'
import ClassCompoIntro from "./ClassCompoIntro.jsx";
import ClassCompoJsxExample from "./ClassCompoJsxExample.jsx";
import ClassCompoPorpsExample from "./ClassCompoPorpsExample.jsx";
import ClassComoponentUseStateExample from "./ClassComoponentUseStateExmple.jsx";
import ClassComoponentLifeCycle from "./ClassComoponentLifeCycle.jsx";
import ClassConditionalRender from "./ClassConditionalRender.jsx";
import ClassListKey from "./ClassListKey.jsx";
import HocClassComoponent from "./HocClassCompo/HocClassComoponent";
class ClassCompoRouter extends Component {
    render() {
        return (
            <>
              <Routes>
                <Route path="/" element={<ClassCompoMenu/> }>
                <Route path="classcompointro" element={<ClassCompoIntro/> }/>
                <Route path="jsxexmple" element={<ClassCompoJsxExample/> }/>
                <Route path="propsexmple" element={<ClassCompoPorpsExample/> }/>
                <Route path="stateexmple" element={<ClassComoponentUseStateExample/> }/>
                <Route path="classcompolifecycle" element={<ClassComoponentLifeCycle/> }/>
                <Route path="conditionalrender" element={<ClassConditionalRender/> }/>
                <Route path="listkey" element={<ClassListKey/> }/>
                <Route path="Hocclasscompoexmple" element={<HocClassComoponent/> }/>
                </Route>
              </Routes>  
            </>
        );
    }
}

export default ClassCompoRouter;