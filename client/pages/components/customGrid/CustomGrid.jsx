import React from 'react'
import PropTypes from "prop-types";
import classNames from 'classnames';
import styles from './CustomGrid.module.scss'

const CustomGrid = ({ data }) => {
    return (
        <div className={classNames(styles.container)}>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Card Name</th>
                        <th>Card Number</th>
                        <th>Card Balance</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data?.map((data, index) => {
                            return (<tr key={data.Id}>
                                <td>{data?.Id}</td>
                                <td>{data?.CardName}</td>
                                <td>{data?.CardNumber}</td>
                                <td>{data?.CardBalance}</td>
                            </tr>)
                        })
                    }


                </tbody>

            </table>
        </div>
    )
}

CustomGrid.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default CustomGrid