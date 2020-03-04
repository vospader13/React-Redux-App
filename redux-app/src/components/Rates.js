import React from "react";
import { connect } from "react-redux";
import { getRate } from "../actions";

const Rates = ({ getRate, rate, isFetching, error }) => {
    
    if (isFetching) {
      return <h2>Fetching a rate now :)</h2>;
    }
  
    if (error) {
      return <h2>{error}</h2>;
    }
  
    return (
      <div>
        <h2>Rates: {rate}</h2>
        <button onClick={getRate}>Get rates</button>
      </div>
    );
  };
  

  const mapStateToProps = state => {
    return {
        // base: state.base,
        rate: state.rate,
        isFetching: state.isFetching,
        error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { getRate }
  )(Rates);
