import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoMenu extends Component {
    render() {
        return (
            <>
                <ul>
                    <li><Link to="classcompointro">Class Component Intro</Link></li>
                    <li><Link to="jsxexmple">Class Component JSX Exmaple</Link></li>
                    <li><Link to="propsexmple">Class Component Props Example</Link></li>
                    <li><Link to="stateexmple">Class Component Use state Example</Link></li>
                    <li><Link to="classcompolifecycle">Class Component Life Cycle</Link></li>
                    <li><Link to="conditionalrender">Class Conditional Render</Link></li>
                    <li><Link to="listkey">Class List Key</Link></li>
                    <li><Link to="Hocclasscompoexmple">Hoc Class Component  Example</Link></li>
                </ul>
                <Outlet></Outlet>
            </>
        );
    }
}

export default ClassCompoMenu;
