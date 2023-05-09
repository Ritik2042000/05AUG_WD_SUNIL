import { DELETE_USER_, FAIL_REQUEST, GET_USER_LIST, MAKE_REQUEST } from "./Actiontype"

const intialstate={
    loading:true,
    userlist:[],
    userobj:{},
    errmessage:''

}
export const Reducer=(state=intialstate,action)=>{
    switch(action.type){
        case MAKE_REQUEST:
            return{
                ...state,
                loading:true,
            }
        case FAIL_REQUEST:
            return{
                ...state,
                loading:false,
                errmessage:action.payload,
            }
        case GET_USER_LIST:
            return{
                ...state,
                loading:false,
                errmessage:'',
                userlist:action.payload,
                userobj:{}
            }
        case DELETE_USER_:
            return{
                ...state,
                loading:false
            }
        default : return state
    }
}  