import { reducerSelector } from '../utils';
import axios from 'axios';


export const report = {
	fields: [],
	activities: [],
	loading: false
}

export const ActionsTypes = {
	LOADING: 'loading/report',
	GET_FIELDS: 'fields/report',
	GET_ACTIVITIES: 'activities/report',
	CLEAR_ALL: 'clear/report'
}

export const reportReducer = reducerSelector(report, {
	[ActionsTypes.LOADING](state, action) {
		const dto = {
			...state,
			loading: action.payload
		}
		return dto;
	},
	[ActionsTypes.GET_FIELDS](state, action) {
		const dto = {
			...state,
			fields: action.payload
		}
		return dto;
	},
	[ActionsTypes.GET_ACTIVITIES](state, action) {
		const dto = {
			...state,
			activities: action.payload
		}
		return dto
	}
})

// ActionCreators
export const setLoading = (isLoading, dispatch) => dispatch({ type: ActionsTypes.LOADING, payload: isLoading });
export const setFields = (fields, dispatch) => dispatch({ type: ActionsTypes.GET_FIELDS, payload: fields })
export const setActivities = (activities, dispatch) => dispatch({ type: ActionsTypes.GET_ACTIVITIES, payload: activities })

export function getFields(dispatch) {
	setLoading(true, dispatch);
	return axios.get('/fields')
		.then(({data}) => {
			setFields(data, dispatch)
		})
		.catch(err => {
			console.log(err);
		})
		.finally(res => {
			setLoading(false, dispatch);
		})
}

export function getActivities(fieldId, dispatch) {
	setLoading(true, dispatch);
	return axios.get(`/field/${fieldId}/activities`)
		.then(({data}) => {
			setActivities(data, dispatch)
			console.log(data);
		}).catch(err => {
			console.log(err);
		})
		.finally(res => {
			setLoading(false, dispatch);
		})
}

