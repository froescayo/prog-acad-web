import { reducerSelector } from '../utils';
import axios from 'axios';


export const common = {
    academicDegrees: [],
    careers: [],
    levels: [],
    roles: []
}

export const ActionsTypes = {
    ACADEMIC_DEGREE:'academicDegree/common',
    CAREER:'career/common',
    LEVEL:'level/common',
    ROLE:'role/common',
    CLEAR_ALL: 'clear/common'
}

export const commonReducer = reducerSelector(common, {
    [ActionsTypes.ACADEMIC_DEGREE](state, action) {
        const dto = {
            ...state,
            academicDegrees: action.payload
        }
        return dto;
    },
    [ActionsTypes.CAREER](state, action) {
        const dto = {
            ...state,
            careers: action.payload
        }
        return dto;
    },
    [ActionsTypes.LEVEL](state, action) {
        const dto = {
            ...state,
            levels: action.payload
        }
        return dto;
    },
    [ActionsTypes.ROLE](state, action) {
        const dto = {
            ...state,
            roles: action.payload
        }
        return dto;
    },
    [ActionsTypes.CLEAR_ALL](state, action){
        const dto = {
            ...state,
            academicDegrees: [],
            careers: [],
            levels: [],
            roles: []
        }
        return dto
    }
})

// ActionCreators
export const setAcademicDegrees = (academicDegrees, dispatch) => dispatch({type: ActionsTypes.ACADEMIC_DEGREE, payload: academicDegrees})
export const setCareers = (careers, dispatch) => dispatch({type: ActionsTypes.CAREER, payload: careers})
export const setLevels = (levels, dispatch) => dispatch({type: ActionsTypes.LEVEL, payload: levels})
export const setRoles = (roles, dispatch) => dispatch({type: ActionsTypes.ROLE, payload: roles})
export const clearAll = (dispatch) => dispatch({type: ActionsTypes.CLEAR_ALL, payload: null}) 

export function getAcademicDegrees(dispatch) {
    return axios.get('/academicDegree')
        .then(r => {
            console.log(r);
            setAcademicDegrees(r, dispatch)
        }).catch(err => {
            console.log(err);
        })
}

export function getCareers(dispatch) {
    return axios.get('/career')
        .then(r => {
            console.log(r);
            setCareers(r, dispatch)
        }).catch(err => {
            console.log(err);
        })
}

export function getLevels(dispatch) {
    return axios.get('/level')
        .then(r => {
            console.log(r);
            setLevels(r, dispatch)
        }).catch(err => {
            console.log(err);
        })
}

export function getRoles(dispatch) {
    return axios.get('/roles')
        .then(r => {
            console.log(r);
            setRoles(r, dispatch)
        }).catch(err => {
            console.log(err);
        })
}

