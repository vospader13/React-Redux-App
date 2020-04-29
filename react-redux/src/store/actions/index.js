import axios from "axios";

export const FETCHING_ADVICE_START = "FETCHING_ADVICE_START";
export const FETCHING_ADVICE_SUCCESS = "FETCHING_ADVICE_SUCCESS";
export const FETCHING_ADVICE_FAILURE = "FETCHING_ADVICE_FAILURE";


export const getAdvice = () => dispatch => {
    dispatch({ type: FETCHING_ADVICE_START });

    axios
        .get("https://api.adviceslip.com/advice")
        .then(res => {
            console.log("res", res);
            dispatch({ type: FETCHING_ADVICE_SUCCESS, payload: res.data.slip.advice});
        })
        
        .catch(err => {
            console.log("err", err);
            dispatch({
                type: FETCHING_ADVICE_FAILURE,
                //payload: err
                payload: `${err.response.message} with response code ${err.response.code}`
            });
        });
};