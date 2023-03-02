import React from "react";
import PropTypes from 'prop-types';
import Notification from "components/Notification";
import { StatBox, StatItem } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {

    if (total() === 0) {
        return (
            <Notification message="There is no feedback" />
        )
    } else {
        return (
            <StatBox>
                <StatItem>Good: {good} </StatItem>
                <StatItem>Neutral: {neutral}</StatItem>
                <StatItem>Bad: {bad}</StatItem>
                <StatItem>Total: {total()}</StatItem>
                <StatItem>Positive feedback: {positivePercentage()} &#37;</StatItem>
            </StatBox>
        )
    }
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.func.isRequired,
    positivePercentage: PropTypes.func.isRequired,
}

export default Statistics;