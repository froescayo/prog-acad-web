import { reducerSelector } from '../utils';
import axios from 'axios';


export const auth = {
    user: {}
}

export const ActionsTypes = {
    SIGNIN:'signin/auth',
    LOGOUT:'logout/auth',
    CLEAR_ALL:'remove/notes'
}

export const authReducer = reducerSelector(auth, {
    [ActionsTypes.SIGNIN](state, action) {
        const dto = {
            ...state,
            user: action.payload
        }
        return dto;
    },
    [ActionsTypes.LOGOUT](state, action){
        const dto = {
            ...state,
            user: {}
        }
        return dto
    }
})

// ActionCreators
export const pushNotes = (notes, dispatch) => dispatch({type: ActionsTypes.SIGNIN, payload: notes})
export const clearNotes = (dispatch) => dispatch({type: ActionsTypes.LOGOUT, payload: null}) 

export function signIn(credentials, dispatch) {
    console.log(process.env.REACT_APP_API_URL);
    return axios.post('/login', credentials)
        .then(r => {
            console.log(r);
        }).catch(err => {
            console.log(err);
        })
}

export function signUp(form, dispatch) {
    return axios.post("/user", form)
        .then(r => {
            console.log(r);
        })
}
