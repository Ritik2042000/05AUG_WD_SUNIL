import axios from "axios"
import { FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./Actiontype"

export const makeRequest= () => {
    return{
        type:MAKE_REQUEST
    }
}
export const failRequest= (err) => {
    return{
        type:FAIL_REQUEST,
        payload:err
    }
}
export const getUserList= (data) => {
    return{
        type:GET_USER_LIST,
        payload:data
    }
}

export const  FeatchUserList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:5000/user').then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}