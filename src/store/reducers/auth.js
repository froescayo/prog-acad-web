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
export const setLogout = (dispatch) => dispatch({type: ActionsTypes.LOGOUT, payload: null}) 

export function fakeSignIn(credentials, dispatch) {
    setLoading(true, dispatch);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(credentials.email === "teste@teste.com" && credentials.password === "1234"){
                login("123456789", dispatch);
                resolve("123456789");
            }else {
                reject({ message: "Credentials is not valid" });
            }
            setLoading(false, dispatch);
        }, 1500);
    })
}

export async function signIn(credentials, dispatch) {
    setLoading(true, dispatch);
    return await axios.post('/login', credentials)
        .then(({data}) => {
            login(data, dispatch);
            localStorage.setItem("token", data.token);
            localStorage.setItem("firstName", data.firstName);
            localStorage.setItem("lastName", data.lastName);
            localStorage.setItem("siape", data.siape);

        }).catch(err => {
            console.log(err);
            throw err;
        })
        .finally(res => {setLoading(false, dispatch);})
}

export async function logout(dispatch) {
    
    setLogout(dispatch);
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
    localStorage.removeItem("lastName");
    localStorage.removeItem("siape");
    return true;
}

export async function signUp(form, dispatch) {
    setLoading(true, dispatch);
    return await axios.post("/users", form)
        .then(({data}) => {
            return data
        })
        .catch(err => {
            console.log(err);
            throw err
        })
        .finally(r => {
            setLoading(false, dispatch);
        })
}
