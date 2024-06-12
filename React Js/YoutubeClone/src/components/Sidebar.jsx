import React from 'react';
import { CiHome } from "react-icons/ci";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { RxCountdownTimer } from "react-icons/rx";
import { CgPlayList } from "react-icons/cg";
import { RiVideoLine } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { SlFire } from "react-icons/sl";
import { BsBagCheck } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { MdOutlineMovieCreation } from "react-icons/md";
import { HiMiniSignal } from "react-icons/hi2";
import { SiYoutubegaming } from "react-icons/si";
import { IoNewspaperOutline } from "react-icons/io5";
import { CiTrophy } from "react-icons/ci";
import { useSelector } from 'react-redux';
const Sidebar = () => {
    const navigation = [
        {
            id: 1,
            icon: <CiHome size={'1.5rem'} />,
            title: 'Home'
        },
        {
            id: 2,
            icon: <SiYoutubeshorts size={'1.5rem'} />,
            title: 'Shorts'
        },
        {
            id: 3,
            icon: <MdOutlineSubscriptions size={'1.5rem'} />,
            title: 'Subscription'
        },

    ]
    const yourNavigation = [
        {
            id: 1,
            icon: <CiHome size={'1.5rem'} />,
            title: 'Your Channel'
        },
        {
            id: 2,
            icon: <RxCountdownTimer size={'1.5rem'} />,
            title: 'History'
        },
        {
            id: 3,
            icon: <CgPlayList size={'1.5rem'} />,
            title: 'Playlists'
        },
        {
            id: 4,
            icon: <RiVideoLine size={'1.5rem'} />,
            title: 'Yours Videos'
        },
        {
            id: 5,
            icon: <MdOutlineWatchLater size={'1.5rem'} />,
            title: 'Watch Later'
        },
        {
            id: 6,
            icon: <AiOutlineLike size={'1.5rem'} />,
            title: 'Liked Videos'
        },

    ]
    const Explore = [
        {
            id: 1,
            icon: <SlFire size={'1.5rem'} />,
            title: 'Trending'
        },
        {
            id: 2,
            icon: <BsBagCheck size={'1.5rem'} />,
            title: 'Shopping'
        },
        {
            id: 3,
            icon: <IoMusicalNoteOutline size={'1.5rem'} />,
            title: 'Music'
        },
        {
            id: 4,
            icon: <MdOutlineMovieCreation size={'1.5rem'} />,
            title: 'Movies'
        },
        {
            id: 5,
            icon: <HiMiniSignal size={'1.5rem'} />,
            title: 'Live'
        },
        {
            id: 6,
            icon: <SiYoutubegaming size={'1.5rem'} />,
            title: 'Gaming'
        },
        {
            id: 7,
            icon: <IoNewspaperOutline size={'1.5rem'} />,
            title: 'News'
        },
        {
            id: 8,
            icon: <CiTrophy size={'1.5rem'} />,
            title: 'Sports'
        },

    ]
    const toggleNav = useSelector((store) => store.app.open)
    return (
        <div className={`sidebar flex flex-col ${toggleNav ? 'lg:max-w-[250px] sm:w-[70px] ' : ' hover:scrollbar-auto overflow-y-scroll' }  mt-14  scrollbar-hide  h-[calc(100vh-3.6rem)]  shadow-md fixed z-20  `}>
            <div className='border-b-2 py-2'>
                {navigation.map((data) => {
                    return <>
                        <div className='flex items-center px-5 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-3xl' key={data.id}>
                            {data.icon}
                            <span className={`px-4 ${toggleNav ? 'hidden' : 'sm:hidden lg:block'}`}>{data.title}</span>
                        </div >
                    </>
                })}
            </div>

            <div className='border-b-2 py-2'>
                <h2 className='px-5 '>You</h2>
                {yourNavigation.map((data) => {
                    return <>
                        <div className='flex items-center px-5 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-3xl' key={data.id}>
                            {data.icon}
                            <span className={`px-4 ${toggleNav ? 'hidden' : 'sm:hidden lg:block'}`}>{data.title}</span>
                        </div >
                    </>
                })}
            </div>
            <div className=' py-2'>
                <h2 className='px-5'>Explore</h2>
                {
                    Explore.map((data) => {
                        return <>
                            <div className='flex items-center px-5 py-2 hover:bg-gray-200 hover:cursor-pointer rounded-3xl' key={data.id}>
                                {data.icon}
                                <span className={`px-4 ${toggleNav ? 'hidden' : 'sm:hidden lg:block'}`}>{data.title}</span>
                            </div >
                        </>
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;