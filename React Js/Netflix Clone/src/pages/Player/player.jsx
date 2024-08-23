import React, { useDebugValue, useState } from 'react';
import './player.css';
import backArrowIcon from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom';

const player = () => {

    const {id} = useParams()
    const navigate = useNavigate()


    const [apiData,setApiData] = useState({
        name:'',
        key:'',
        published_at:'',
        typeof:''
    })
    return (
        <div className='player'>
            <img src={backArrowIcon} alt="back" onClick={() => navigate(-1)} />
            <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameborder="0" width={'90%'}
                height={'90%'} title='trailer'
                allowFullScreen
            ></iframe>
            <div className="player-info">
                <p>{apiData.published_at.slice(0,10)}</p>
                <p>{apiData.name}</p>
                <p>{apiData.typeof}</p>
            </div>
        </div>
    );
};

export default player;