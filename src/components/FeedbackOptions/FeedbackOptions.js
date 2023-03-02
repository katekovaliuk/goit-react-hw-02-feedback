import React from "react";
import PropTypes from "prop-types";
import {ButtonBox, Button } from "./FedbackOptions.styled.js";


const FeedBackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ButtonBox>
            {Object.keys(options).map(option => (
                <Button type="button" key={option} name={option} onClick={onLeaveFeedback}>
                    {option}
                </Button>
            ))}
        </ButtonBox>
    );
};

  
FeedBackOptions.propTypes = {
    options: PropTypes.object.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};


export default FeedBackOptions;