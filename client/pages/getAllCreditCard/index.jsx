import React, { PropTypes, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import Header from '../layout/header';
import CustomGrid from '../components/customGrid/CustomGrid';

const GetAllCreditCard = props => {
    const [allCridetCards, setAllCridetCards] = useState([])
    const shodLog = useRef(true)
    const notify = () => toast("Wow so easy!");
    useEffect(() => {
        if (shodLog.current) {
            shodLog.current = false;
            const preFixUrl = process.env.NEXT_PUBLIC_HOST;
            axios.get(`${preFixUrl}/getAll`).then(res => {                
                setAllCridetCards(res?.data?.data)             
                            })
        }

    }, [])

    return (
        <div>
            <Header selectedTab={0}/>
           <CustomGrid data={allCridetCards}/>
        </div>
    )
}

GetAllCreditCard.propTypes = {

}

export default GetAllCreditCard