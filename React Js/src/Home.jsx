import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


class Home extends Component {
    render() {
        return (
            <div>
                Welcome To Our Page
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. A assumenda temporibus sed maiores dolorum incidunt omnis eum expedita neque dicta mollitia quos dolore officiis, odio veniam tenetur aperiam inventore velit?</p>
                <form action="">
                    <input type="text" />
                    <br />
                    <br />
                    <input type="password" />
                    <br />
                    <br />
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <br />
                    <Link to="hello">Click to get Hello </Link>
                </form>
                <Outlet></Outlet>
            </div>


        );
    }
}
export default Home;