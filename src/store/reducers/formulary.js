import { reducerSelector } from '../utils';
import axios from 'axios';


export const formulary = {
	data: {
		type: "", // tipo do formulario
	period: { // periodo do formulario
		from: '2021-10-4',
		to: '2022-10-4',
	},
	comission: [],
	answers: [],
	},
	list: [],
	loading: false
}

export const ActionsTypes = {
	LOADING: 'loading/formulary',
	GET_FORMULARIES: 'signin/formulary',
	GET_FORMULARY: 'logout/formulary',
	CLEAR_ALL: 'clear/formulary',
	SET_ACTIVITY: 'activity/formulary',
}

export const formularyReducer = reducerSelector(formulary, {
	[ActionsTypes.LOADING](state, action) {
		const dto = {
			...state,
			loading: action.payload
		}
		return dto;
	},
	[ActionsTypes.GET_FORMULARIES](state, action) {
		const dto = {
			...state,
			list: action.payload
		}
		return dto;
	},
	[ActionsTypes.GET_FORMULARY](state, action) {
		const dto = {
			...state,
			data: action.payload
		}
		return dto
	},
	[ActionsTypes.SET_ACTIVITY](state, action) {
		const dto = {
			...state,
			data: {...state.data, answers: [...state.data.answers, action.payload]}
		}
		return dto
	}
})

// ActionCreators
export const setLoading = (isLoading, dispatch) => dispatch({ type: ActionsTypes.LOADING, payload: isLoading });
export const setFormularies = (list, dispatch) => dispatch({ type: ActionsTypes.GET_FORMULARIES, payload: list })
export const setFormulary = (data, dispatch) => dispatch({ type: ActionsTypes.GET_FORMULARY, payload: data })
export const setActivity = (data, dispatch) => dispatch({ type: ActionsTypes.SET_ACTIVITY, payload: data })


export function getFormularies(dispatch) {
	setLoading(true, dispatch);
	return axios.get('/formulary')
		.then(res => {
			console.log("RESPOSTA: ", res);
			setFormularies(res, dispatch)
		})
		.catch(err => {
			console.log(err);
		})
		.finally(res => {
			setLoading(false, dispatch);
		})
}

export function createFormulary(form, dispatch) {
	setLoading(true, dispatch);
	return axios.post('/formulary', form)
		.then(({data}) => {
			// setFormulary(data, dispatch)
			console.log(data);
		})
		.catch(err => {
			console.log(err);
		})
		.finally(res => {
			setLoading(false, dispatch);
		})
}

