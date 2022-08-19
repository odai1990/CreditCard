import React from 'react'
import styles from './CustomButton.module.scss'
import PropTypes from "prop-types";
import classNames from 'classnames';
const CustomButton = ({ onClick, type, name, disabled }) => {
    return (
        <div className={classNames(styles.container)}>
            <button type={type} onClick={onClick} disabled={disabled} className={classNames(disabled && styles.disabeld)}>{name}</button>
        </div>
    )
}

CustomButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    type: PropTypes.string,
    name: PropTypes.any,
    disabled: PropTypes.bool
}
CustomButton.defaultProps = {
    type: 'button',
    name: 'text',
    disabled: true
}

export default CustomButton