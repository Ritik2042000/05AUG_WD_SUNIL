import userServices from './../services/UserServices.jsx'

export const retierverUsers = () => async (dispatch) => {
    console.log("Called dispatch");
    try {
        const ResData = await userServices.getAll()
    } catch (error) {
        console.log('error');
    }

}