import React, { useRef, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { status } from '../components/constents';
import styles from './styles.module.scss'
import Header from '../layout/header';
import classNames from 'classnames';
import CustomInput from '../components/customInput/CustomInput'
import CustomButton from '../components/customButton/CustomButton'
const CreateCreditCard = () => {
    const shodLog = useRef(true);
    const [cardName, setCardName] = useState()
    const [cardNumber, setCardNumber] = useState()

    const saveData = () => {
        const preFixUrl = process.env.NEXT_PUBLIC_HOST;
        axios.post(`${preFixUrl}/add`, {
            cardName: cardName,
            cardNumber: cardNumber
        }).then(res => {
            if (res?.data?.status == status.SUCCESS)
                toast.success(res?.data?.data)
            else
                toast.error(res?.data?.data)
        })
    }

    return (
        <div>
            <ToastContainer />
            <Header selectedTab={1} />
            <div className={classNames(styles.container)}>
                <CustomInput onChange={setCardName} type='text' label='Card Name' />
                <CustomInput onChange={setCardNumber} type='number' label='Card Number' />
                <CustomButton name='Save' onClick={saveData} disabled={!(cardName && cardNumber)} />
            </div>
        </div>
    )
}


export default CreateCreditCard