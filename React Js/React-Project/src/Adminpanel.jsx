import React, { useState } from 'react';
import './adminpanel.css'

const Adminpanel = () => {
    const [height, setHegit] = useState('drop-down');
    const [height2, setHegit2] = useState('drop-down');
    const [height3, setHegit3] = useState('drop-down');
    const [height4, setHegit4] = useState('drop-down');
    const [height5, setHegit5] = useState('drop-down');
    const [height6, setHegit6] = useState('drop-down');
    const [height7, setHegit7] = useState('drop-down');
    const [height8, setHegit8] = useState('drop-down');
    const [height9, setHegit9] = useState('drop-down');
    const [height10, setHegit10] = useState('drop-down');
    const [height11, setHegit11] = useState('drop-down');
    const [height12, setHegit12] = useState('drop-down');
    const [height13, setHegit13] = useState('drop-down');
    const [down, setDown] = useState('fa-angle-right');
    const dropdown = () => {
        if (height === 'drop-down') {
            setHegit((height) => (height = 'abc'))
            setDown((down) => (down = 'fa-angle-down'))
        } else {
            setHegit((height) => (height = 'drop-down'))
            setDown((down) => (down = 'fa-angle-right'))
        }
    };
    const dropdown2 = () => {
        if (height2 === 'drop-down') {
            setHegit2((height2) => (height2 = 'abc'))
            setDown((down) => (down = 'fa-angle-down'))
        } else {
            setHegit2((height2) => (height2 = 'drop-down'))
            setDown((down) => (down = 'fa-angle-right'))
        }

    };
    const dropdown3 = () => {
        if (height3 === 'drop-down') {
            setHegit3((height3) => (height3 = 'abc'))
        } else {
            setHegit3((height3) => (height3 = 'drop-down'))
        }
    };
    const dropdown4 = () => {
        if (height4 === 'drop-down') {
            setHegit4((height4) => (height4 = 'abc'))
        } else {
            setHegit4((height4) => (height4 = 'drop-down'))
        }
    };
    const dropdown5 = () => {
        if (height5 === 'drop-down') {
            setHegit5((height5) => (height5 = 'abc'))
        } else {
            setHegit5((height5) => (height5 = 'drop-down'))
        }
    };
    const dropdown6 = () => {
        if (height6 === 'drop-down') {
            setHegit6((height6) => (height6 = 'abc'))
        } else {
            setHegit6((height6) => (height6 = 'drop-down'))
        }
    };
    const dropdown7 = () => {
        if (height7 === 'drop-down') {
            setHegit7((height7) => (height7 = 'abc'))
        } else {
            setHegit7((height7) => (height7 = 'drop-down'))
        }
    };
    const dropdown8 = () => {
        if (height8 === 'drop-down') {
            setHegit8((height8) => (height8 = 'abc'))
        } else {
            setHegit8((height8) => (height8 = 'drop-down'))
        }
    };
    const dropdown9 = () => {
        if (height9 === 'drop-down') {
            setHegit9((height9) => (height9 = 'abc'))
        } else {
            setHegit9((height9) => (height9 = 'drop-down'))
        }
    };
    const dropdown10 = () => {
        if (height10 === 'drop-down') {
            setHegit10((height10) => (height10 = 'abc'))
        } else {
            setHegit10((height10) => (height10 = 'drop-down'))
        }
    };
    const dropdown11 = () => {
        if (height11 === 'drop-down') {
            setHegit11((height11) => (height11 = 'abc'))
        } else {
            setHegit11((height11) => (height11 = 'drop-down'))
        }
    };
    const dropdown12 = () => {
        if (height12 === 'drop-down') {
            setHegit12((height12) => (height12 = 'abc'))
        } else {
            setHegit12((height12) => (height12 = 'drop-down'))
        }
    };
    const dropdown13 = () => {
        if (height13 === 'drop-down') {
            setHegit13((height13) => (height13 = 'abc'))
        } else {
            setHegit13((height13) => (height13 = 'drop-down'))
        }
    };
    return (
        <>
            <div className="width">
                <div className="row flex-column">
                    <div className="col poi-rel ">
                        <div className="navigation">
                            <p>Navigation</p>
                            <ul>
                                <li><i class="fa-solid fa-table-columns"></i><a href="#/">Dashboard</a></li>
                                <li><i class="fa-solid fa-layer-group"></i><a href="#/">Layout</a> </li>
                                <li> <i class="fa-solid fa-gear"></i><a href="#/">Widget</a> </li>
                            </ul>
                        </div>
                        <div className="component">
                            <p>Componet</p>
                            <ul>
                                <li onClick={dropdown}><i class="fa-brands fa-elementor"></i>
                                    <a href="#/"  >Ui Elements</a><i class={`fa-solid ${down}`}></i></li>
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
                                <li onClick={dropdown2}><i class="fa-sharp fa-solid fa-pencil"></i> <a href="#/" >Forms</a><i class={`fa-solid ${down}`}></i></li>
                                <div className={height2}>
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
                                <li onClick={dropdown3}> <i class="fa-solid fa-calculator"></i> <a href="#/" >Tables</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height3}>
                                    <ul>
                                        <li><a href="#/">Static Tables</a></li>
                                        <li><a href="#/">Gridjs</a></li>
                                        <li><a href="#/">Tabulator</a></li>
                                    </ul>
                                </div>
                                <li onClick={dropdown4}> <i class="fa-solid fa-chart-simple"></i><a href="#/" >Charts</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height4}>
                                    <ul>
                                        <li><a href="#/">ChartJS</a></li>
                                        <li><a href="#/">ChartsCSS</a></li>
                                        <li><a href="#/">Sparklines</a></li>
                                    </ul>
                                </div>
                                <li onClick={dropdown5}><i class="fa-solid fa-ellipsis"></i><a href="#/" >Miscellaneous</a><i class="fa-solid fa-angle-right"></i> </li>
                                <div className={height5}>
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
                                <li onClick={dropdown6}><i class="fa-solid fa-display"></i><a href="#/" >App views</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height6}>
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
                                <li onClick={dropdown7}><i class="fa-regular fa-message"></i><a href="#/">Blog Apps</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height7}>
                                    <ul>
                                        <li><a href="#/">Blog</a></li>
                                        <li><a href="#/">Blog List</a></li>
                                        <li><a href="#/">Blog List 2</a></li>
                                        <li><a href="#/">Blog Article</a></li>
                                        <li><a href="#/">Manage Posts</a></li>
                                        <li><a href="#/">Add Edit Posts</a></li>
                                    </ul>
                                </div>
                                <li onClick={dropdown8}><i class="fa-regular fa-envelope"></i><a href="#/" >Email</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height8}>
                                    <ul>
                                        <li><a href="#/">Inbox</a></li>
                                        <li><a href="#/">View Message</a></li>
                                        <li><a href="#/">Compose Message</a></li>
                                    </ul>
                                </div>
                                <li onClick={dropdown9}><i class="fa-regular fa-file"></i><a href="#/" >Other Pages</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height9}>
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
                                <li onClick={dropdown10}><i class="fa-regular fa-window-maximize"></i><a href="#/" >Front Pages</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height10}>
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
                                <li onClick={dropdown11}><i class="fa-solid fa-menorah"></i><a href="#/" >Menu Levels</a><i class="fa-solid fa-angle-right"></i> </li>
                                <div className={height11}>
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
                                <li onClick={dropdown12}><i class="fa-regular fa-face-grin-wide"></i><a href="#/" >Icons Packs</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height12}>
                                    <ul>
                                        <li><a href="#/">Ionicons</a></li>
                                        <li><a href="#/">Flag Icon CSS</a></li>
                                        <li><a href="#/">Themify Icons</a></li>
                                        <li><a href="#/">Weather Icons</a></li>
                                    </ul>
                                </div>
                                <li onClick={dropdown13}><i class="fa-solid fa-award"></i><a href="#/" >Premium Packs</a><i class="fa-solid fa-angle-right"></i></li>
                                <div className={height13}>
                                    <ul>
                                        <li><a href="#/">Line Icons Pack</a></li>
                                        <li><a href="#/">Solid Icons Pack</a></li>
                                    </ul>
                                </div>
                            </ul>
                        </div>
                        <div className="logout poi-fx ">
                            <p><i class="fa-solid fa-lock-open"></i>Logout</p>
                        </div>
                        <div className="server-status">
                            <p>CPU Usage <span className='pad'>35%</span></p>
                            <progress value='35' max='100' ></progress>
                            <p>Bandwidth <span className='spc'>73%</span></p>
                            <progress className='w3-blue' value='73' max='100'></progress>
                            <button className='view'>View Detalis</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Adminpanel;
