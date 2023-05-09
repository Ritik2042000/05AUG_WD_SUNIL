import axios from "axios"
import { DELETE_USER_, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./Actiontype"

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
export const deleteUser= () => {
    return{
        type:DELETE_USER_

    }
}

export const  FeatchUserList=()=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.get('http://localhost:3004/user/').then(res=>{
            const userlist=res.data;
            dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}
export const  RemoveUser=(code)=>{
    return (dispatch)=>{
        dispatch(makeRequest());
        axios.delete('http://localhost:3004/user/'+code).then(res=>{
            dispatch(deleteUser());
            // dispatch(getUserList(userlist))
        }).catch(err=>{
            dispatch(failRequest(err.message))
        })
    }
}