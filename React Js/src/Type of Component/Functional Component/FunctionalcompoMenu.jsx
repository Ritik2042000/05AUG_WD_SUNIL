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
                            <li><Link to="functionalcompuseeffect">Functional Component Use Effect</Link></li>
                            <li><Link to="functionalcompuselayouteffect">Functional Component Use Layout Effect </Link></li>
                            <li><Link to="functionalcompusecontex">Functional Component Use Context </Link></li>
                            <li><Link to="functionalcompusereducer">Functional Component Use Reducer </Link></li>
                            <li><Link to="functionalcompusememo">Functional Component Use Memo </Link></li>
                            <li><Link to="functionalcompusecallback">Functional Component Use Callback </Link></li>
                        </ul>
                    </div>
                </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default FunctionalcompoMenu;