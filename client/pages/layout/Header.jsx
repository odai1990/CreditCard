import React from 'react'
import PropTypes from "prop-types";
import Link from 'next/link'
import styles from './styles.module.scss'
import classNames from 'classnames'
import Image from "next/image";


const Header = ({ selectedTab }) => {
    return (
        <div className={styles.container}>
            <p>
                <Image src={'/images/logo.png'} alt="GFG logo imported from public directory" width={50} height={50} />
            </p>
            <div>
                <ul className={styles.navicationContainer}>
                    <li className={classNames(selectedTab == 0 && styles.active)}>  <Link href="/getAllCreditCard"> Home</Link></li>
                    <li className={classNames(selectedTab == 1 && styles.active)}><Link href="/createCreditCard">Creat New Card</Link></li>
                </ul>
            </div>
            <p>
                <Image src={'/images/user.png'} alt="GFG logo imported from public directory" width={24} height={24} />
            </p>
        </div>
    )
}

Header.propTypes = {
    selectedTab: PropTypes.number.isRequired,
}


export default Header