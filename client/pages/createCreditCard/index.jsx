import React, { PropTypes, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {status} from '../components/constents';

const CreateCreditCard = () => {
    const shodLog = useRef(true);
 
    useEffect(() => {
        if (shodLog.current) {
            shodLog.current = false;
            const preFixUrl = process.env.NEXT_PUBLIC_HOST;
            axios.post(`${preFixUrl}/add`,{
            cardName:'ddddddd',
            cardNumber:'337951356110879534'
            }).then(res => {
              if(res?.data?.status==status.SUCCESS)           
              toast.success(res?.data?.data)
              else
              toast.error(res?.data?.data)

            })
        }



    }, [])


    return (
        <div>
            <ToastContainer/>
            CreatCreaditCard
        </div>
    )
}

CreateCreditCard.propTypes = {
    
}

export default CreateCreditCard