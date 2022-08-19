import React, { PropTypes, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const GetAllCreditCard = props => {
    const [allCridetCards, setAllCridetCards] = useState([])
    const shodLog = useRef(true)
    const notify = () => toast("Wow so easy!");
    useEffect(() => {
        if (shodLog.current) {
            shodLog.current = false;
            const preFixUrl = process.env.NEXT_PUBLIC_HOST;
            axios.get(`${preFixUrl}/getAll`).then(res => {
                setAllCridetCards(res?.data?.row)
                notify()
                
            })
        }

    }, [])

    return (
        <div>
            getall
        </div>
    )
}

GetAllCreditCard.propTypes = {

}

export default GetAllCreditCard