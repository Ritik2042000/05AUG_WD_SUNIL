import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class FunctionalcompoMenu extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="offset-md-6">
                        <ul>
                            <li><Link to="functionalcompointro">Functional Component Intro</Link></li>
                            <li><Link to="functionalcompousestate">Functional Component Use State</Link></li>
                            <li><Link to="functionalcompprops">Functional Component Props</Link></li>
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default FunctionalcompoMenu;