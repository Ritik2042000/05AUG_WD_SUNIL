import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS, API_KEY } from '../constans/youtube';
import VideoCard from './VideoCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import Loader from './Loader.jsx'
import { Link } from 'react-router-dom';
import { setHomeVideo } from '../redux/appSlice.js';

const VideoContent = () => {
    //State For The Set YouTube Feed
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch()

    //Api Call For YouTube Feed
    const fetchVideos = async () => {
        setLoading(true)
        try {
            const res = await axios.get(YOUTUBE_VIDEOS)
            const data = res?.data?.items
            dispatch(setHomeVideo(data))
            // setVideos(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }
    const fetchVideoByCategory = async () => {
        setLoading(true)
        try {
            const res = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${category}&type=video&key=${API_KEY}`)
            const data = res?.data?.items
            dispatch(setHomeVideo(data));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }

    const toggleNav = useSelector((store) => store.app.open)
    const { video, category } = useSelector((store) => store.app)
    // const video = useSelector((store) => store.app.video)
    // console.log(videos);

    useEffect(() => {
        if (category == 'All') {
            fetchVideos()
        } else {
            fetchVideoByCategory()
        }

    }, [category])


    return (
        <div className={`grid  ${toggleNav ? 'lg:grid-cols-4 ' : 'lg:grid-cols-3'} gap-8 mt-5 scrollbar-hide mx-3  md:grid-cols-2 sm:grid-cols-2`}  >
            {
                loading ?
                    (
                        [...Array(50)].map((_, index) => ( // Adjust the number of loaders to match your grid
                            <Loader key={index} />
                        ))
                    )
                    :
                    (
                        video.map((data) => {
                            return <>
                                <Link to={`/watchvideo?v=${typeof data.id == 'object' ? data.id.videoId : data.id } `} target='_block'>
                                    <VideoCard data={data} key={data.key} />
                                </Link>
                            </>
                        })
                    )
            }
        </div>
    );
};

export default VideoContent;