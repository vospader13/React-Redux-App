import {  FETCHING_ER_START, FETCHING_ER_SUCCESS } from "../actions";



const initialState = {
    base: "USD",
    rates: "1",
    error: "",
    isFetching: false
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case FETCHING_ER_START:
            return{
                ...state,
                isFetching: true, 
                rates: "",
                error: '',
                date: ''
            };
        case FETCHING_ER_SUCCESS:
            return{
                ...state,
                isFetching: false, 
                rates: action.payload ,
                error: '',
                date: ''
            }; 
            default:
                return state;           
    }
};

