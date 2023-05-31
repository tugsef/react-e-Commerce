import { LOGIN_EXİT_USER, LOGIN_TO_USER } from "../action/userActions";
import { userItem } from "../initialValues/userItems";
const initialState = {
    userItem:userItem,
}

export default function userReducer(state=initialState,{type , payload}){
switch (type) {
    case LOGIN_TO_USER:
        return{
            userItem:{success:payload}
        }
    case LOGIN_EXİT_USER:
        return{
            userItem:userItem
        }

    default:
        return state;
}}