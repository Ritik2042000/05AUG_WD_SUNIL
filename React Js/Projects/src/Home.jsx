import React from 'react';
import { Link } from 'react-router-dom';
import './home.css'

const Home = () => {
    return (
        <>
            <header className='header'>
                <div className="logo">
                    <h4>Projects</h4>
                </div>
                <ul>
                    <li>
                        <Link  to='/Resturent' className='link'>Resturent card</Link>
                        <Link to='/Todolist' className='link'>Todo List</Link>
                        <Link to='/Weather' className='link'>Weather App</Link>
                    </li>
                </ul>
            </header>
            <section className='bg-clr'>

            </section>
        </>
    );
}; export default Home;