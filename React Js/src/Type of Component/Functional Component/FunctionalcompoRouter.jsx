import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalcompoMenu from './FunctionalcompoMenu';
import FunctionalcompoIntro from './FunctionalcompoIntro.jsx';
import FunctionalcompoUseState from './FunctionalcompoUseState.jsx';
import FunctionalcompoProps from './FunctionalcompoProps.jsx';

class FunctionalcompoRouter extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalcompoMenu />}>
                        <Route path="functionalcompointro" element={<FunctionalcompoIntro />} />
                        <Route path="functionalcompousestate" element={<FunctionalcompoUseState />} />
                        <Route path="functionalcompprops" element={<FunctionalcompoProps />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default FunctionalcompoRouter;