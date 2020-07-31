import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux'

import axiosInstance from '../utils/axiosInstance'
import { showToast } from '../redux/toast/actions';

const MainContainer = () => {

    const [message, setMessage] = useState('Loading...')
    const dispatch = useDispatch();

    useEffect(() => {
        axiosInstance.get('/')
            .then(res => {
                console.log(res);
                setMessage(res.data)
                dispatch(showToast('Success'))
            })
            .catch(err => {
                console.error(err);
                setMessage('Error requesting /api')
            })
    }, [dispatch])

    return (
        <div>
            <h1>{"418 Teapots"}</h1>
            <h3>{message}</h3>
        </div>
    );
}

export default MainContainer;