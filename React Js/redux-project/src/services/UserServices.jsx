import httprequest from './../http-common.jsx'

const getAll = () => {
    return httprequest.get ('http://localhost/api/allusers')
}





const UserServices ={
    getAll
}
export default UserServices;