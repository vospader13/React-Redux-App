import React from "react";
import {connect} from "react-redux";
import { getAdvice } from "../store/actions/index";
import styled from "styled-components";


const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const H2Font = styled.h2`
    color: palevioletred;
`


const Advice = ({ getAdvice, advice, isFetching, error}) => {
    if(isFetching) {
        return <H2Font>Fetching something awesome</H2Font>;
    }

    if (error) {
        return <h2>{error}</h2>
    }

    return (
        <div>
            <H2Font>Fortune: {advice}</H2Font>
            <Button onClick={getAdvice}>Get a new fortune</Button>
        </div>
    );

};

const mapStateToProps = state => {
    return {
        advice: state.advice,
        isFetching: state.isFetching,
        error: state.error
        
    };
};

export default connect(mapStateToProps,{getAdvice})(Advice);