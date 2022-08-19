import React from 'react'
import styles from './CustomInput.module.scss'
import PropTypes from "prop-types";
import classNames from 'classnames';
const CustomInput = ({ onChange, type, value, label }) => {
    return (
        <div className={classNames(styles.container)}>
            <label for={label}>{label}</label>
            <input id={label} type={type} onChange={(e) => onChange(e.target.value)} value={value} />
        </div>
    )
}

CustomInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    value: PropTypes.any,
    label: PropTypes.string.isRequired
}
CustomInput.defaultProps = {
    type: 'text',
    value: null
}

export default CustomInput