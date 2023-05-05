import React, { useState } from 'react';
import './style.css'
import Menu from './menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList =[ ...new Set(Menu.map((curElem) => {
    return curElem.category;
})),"All",]
console.log(uniqueList);

const Resturent = () => {
    const [data, setData] = useState(Menu);
    const [navdata,setNavdata] = useState(uniqueList)
    const filteritem = (category) => {
        if (category === 'All'){
            setData(Menu)
            return;
        }
        const updatedList = Menu.filter((curElem) => {
            return curElem.category === category;
        });
        setData(updatedList)
    }
    return (
        <>
           <Navbar filteritem = {filteritem} navdata={navdata}/>
            <MenuCard data={data} />
        </>
    );
};

export default Resturent;