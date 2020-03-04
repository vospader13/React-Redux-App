import axios from "axios";

export const FETCHING_ER_START = "FETCHING_ER_START";
export const FETCHING_ER_SUCCESS = "FETCHING_ER_SUCCESS";
export const FETCHING_ER_FAILURE = "FETCHING_ER_FAILURE";

export const getRate = () => dispatch => {

    dispatch({  type: FETCHING_ER_START });

    axios
        .get("https://api.exchangerate-api.com/v4/latest/USD")
        .then(res => {
            console.log("the result of the axios call", res);
            dispatch({  type: FETCHING_ER_SUCCESS, payload: res.data.rates });
        });
        // .catch(err => {
        //     console.log("This is the error from the axios call", err);
        //     dispatch({  FETCHING_ER_FAILURE })
        // });
};