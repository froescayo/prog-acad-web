import { reducerSelector } from '../utils';
import axios from 'axios';


export const auth = {
    user: null,
    loading: false
}

export const ActionsTypes = {
    LOADING:'loading/auth',
    SIGNIN:'signin/auth',
    LOGOUT:'logout/auth',
    CLEAR_ALL:'remove/notes'
}

export const authReducer = reducerSelector(auth, {
    [ActionsTypes.LOADING](state, action) {
        const dto = {
            ...state,
            loading: action.payload
        }
        return dto;
    },
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
            user: null
        }
        return dto
    }
})

// ActionCreators
export const setLoading = (isLoading, dispatch) => dispatch({type: ActionsTypes.LOADING, payload: isLoading});
export const login = (user, dispatch) => dispatch({type: ActionsTypes.SIGNIN, payload: user})
export const logout = (dispatch) => dispatch({type: ActionsTypes.LOGOUT, payload: null}) 

export function fakeSignIn(credentials, dispatch) {
    setLoading(true, dispatch);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(credentials.email === "teste@developer.com" && credentials.password === "1234"){
                login("123456789", dispatch);
                resolve("123456789");
            }else {
                reject({ message: "Credentials is not valid" });
            }
            setLoading(false, dispatch);
        }, 1500);
    })
}

export function signIn(credentials, dispatch) {
    return axios.post('/login', credentials)
        .then(user => {
            login(user, dispatch)
            console.log(user);
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
