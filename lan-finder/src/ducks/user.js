import axios from 'axios'
import store from '../store'

const SET_USER = 'SET_USER'

const initialState = {
	user: [],
	userLoading: false
}

export default function user( state = initialState, action ) {
	switch ( action.type ) {
		default:
			return state
	}
}

export function getUser(){
    const userPromise = axios.get('/getDataFrom/user').then(user=>{
        this.state.user = user.data.results
    },err=>console.log(err))
}
