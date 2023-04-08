import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Reducer/index.jsx";
import { composeWithDevTools } from "redux-devtools-extension";
import Reducer from "./Reducer/index.jsx";


const initialState = {}
const middleware = [thunk]
let store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))

) 
export default store;