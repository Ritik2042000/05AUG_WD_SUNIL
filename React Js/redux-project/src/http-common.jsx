import axios from 'axios';
export default axios.create({
    baseURL:'http:/localhost/api/',
    headers:{
        'content-type':'application/json'
    }
})