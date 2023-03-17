import React, { useState } from 'react';
import './adminpanel.css'

const Adminpanel = () => {
    const [height,setHegit] = useState('drop-down');
    const dropdown = () => {
        if (height == 'drop-down' ) {
            setHegit((height) => (height='abc'))
        } else {
            setHegit((height) => (height='drop-down'))
        }
    };
    return (
        <>
            <div className="width">
                <div className="row flex-column">
                    <div className="col ">
                        <div className="navigation">
                            <p>Navigation</p>
                            <ul>
                                <li> <a href="#/">Dashboard</a></li>
                                <li> <a href="#/">Layout</a> </li>
                                <li> <a href="#/">Widget</a> </li>
                            </ul>
                        </div>
                        <div className="componet">
                            <p>Componet</p>
                            <ul>
                                <li><a href="#/" onClick={dropdown} >Ui Elements</a></li>
                                <div className={height}>
                                    <ul> 
                                        <li><a href="#/">Buttons</a></li>
                                        <li><a href="#/">Cards</a></li>
                                        <li><a href="#/">Dropdowns</a></li>
                                        <li><a href="#/">Typography</a></li>
                                        <li><a href="#/">List Group</a></li>
                                        <li><a href="#/">Progress</a></li>
                                        <li><a href="#/">Placeholders</a></li>
                                        <li><a href="#/">New</a></li>
                                        <li><a href="#/">Tabs & Accordions</a></li>
                                        <li><a href="#/">Components</a></li>
                                        <li><a href="#/">Tooltips & Popover</a></li>
                                    </ul>
                                </div>
                                <li> <a href="#/" onClick={dropdown}>Forms</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">General</a></li>
                                        <li><a href="#/">Tags</a></li>
                                        <li><a href="#/">Date Time Picker</a></li>
                                        <li><a href="#/">Validation</a></li>
                                        <li><a href="#/">Wizard</a></li>
                                        <li><a href="#/">File Uploads</a></li>
                                        <li><a href="#/">Text Editor</a></li>
                                    </ul>
                                </div>
                                <li> <a href="#/" onClick={dropdown}>Tables</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Static Tables</a></li>
                                        <li><a href="#/">Gridjs</a></li>
                                        <li><a href="#/">Tabulator</a></li>
                                    </ul>
                                </div>
                                <li> <a href="#/" onClick={dropdown}>Charts</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">ChartJS</a></li>
                                        <li><a href="#/">ChartsCSS</a></li>
                                        <li><a href="#/">Sparklines</a></li>
                                    </ul>
                                </div>
                                <li> <a href="#/" onClick={dropdown}>Miscellaneous</a> </li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Timeline</a></li>
                                        <li><a href="#/">Loader.CSS</a></li>
                                        <li><a href="#/">Spinkit</a></li>
                                        <li><a href="#/">Clipboard</a></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div className="More" >
                            <p>More</p>
                            <ul>
                                <li><a href="#/" onClick={dropdown}>App views</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">File Manager</a></li>
                                        <li><a href="#/">Users</a></li>
                                        <li><a href="#/">Users 2</a></li>
                                        <li><a href="#/">Profile</a></li>
                                        <li><a href="#/">Calendar</a></li>
                                        <li><a href="#/">Taskboard</a></li>
                                        <li><a href="#/">Chat</a></li>
                                        <li><a href="#/">Contact Us</a></li>
                                    </ul>
                                </div>
                                <li><a href="#/" onClick={dropdown}>Blog Apps</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Blog</a></li>
                                        <li><a href="#/">Blog List</a></li>
                                        <li><a href="#/">Blog List 2</a></li>
                                        <li><a href="#/">Blog Article</a></li>
                                        <li><a href="#/">Manage Posts</a></li>
                                        <li><a href="#/">Add Edit Posts</a></li>
                                    </ul>
                                </div>
                                <li><a href="#/" onClick={dropdown}>Email</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Inbox</a></li>
                                        <li><a href="#/">View Message</a></li>
                                        <li><a href="#/">Compose Message</a></li>
                                    </ul>
                                </div>
                                <li><a href="#/" onClick={dropdown}>Other Pages</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Blank Page</a></li>
                                        <li><a href="#/">Invoice</a></li>
                                        <li><a href="#/">Search Results</a></li>
                                        <li><a href="#/">FAQ</a></li>
                                        <li><a href="#/">Pricing Tables</a></li>
                                        <li><a href="#/">Error 404</a></li>
                                        <li><a href="#/">Error 500</a></li>
                                    </ul>
                                </div>
                                <li><a href="#/" onClick={dropdown}>Front Pages</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Error 404</a></li>
                                        <li><a href="#/">Error 500</a></li>
                                        <li><a href="#/">Maintenance</a></li>
                                        <li><a href="#/">Login</a></li>
                                        <li><a href="#/">Register</a></li>
                                        <li><a href="#/">Password Reminder</a></li>
                                        <li><a href="#/">Lock Screen</a></li>
                                    </ul>
                                </div>
                                <li><a href="#/" onClick={dropdown}>Menu Levels</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Menu Link</a></li>
                                        <li><a href="#/">Menu Link</a></li>
                                        <li><a href="#/">Menu Link</a></li>
                                        <li><a href="#/">Submenu</a></li>
                                        <li><a href="#/">Submenu</a></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div className="extra">
                            <p>Extra</p>
                            <ul>
                                <li><a href="#/" onClick={dropdown}>Icons Packs</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Ionicons</a></li>
                                        <li><a href="#/">Flag Icon CSS</a></li>
                                        <li><a href="#/">Themify Icons</a></li>
                                        <li><a href="#/">Weather Icons</a></li>
                                    </ul>
                                </div>
                                <li><a href="#/" onClick={dropdown}>Premium Packs</a></li>
                                <div className={height}>
                                    <ul>
                                        <li><a href="#/">Line Icons Pack</a></li>
                                        <li><a href="#/">Solid Icons Pack</a></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <script>
            </script>

        </>
    );
};

export default Adminpanel;
