import React from "react";
import PropTypes from "prop-types";
import {Note } from "./Notification.styled";

const Notification = ({ message }) => <Note>{message}</Note>;

Notification.defaultProps = {
    message: '',
};

Notification.priopTypes = {
    message: PropTypes.string,
};

export default Notification;