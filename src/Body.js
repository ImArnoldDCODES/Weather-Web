import React, { useState } from 'react'
import Glass from './Glass'
import './App.css'
import { BsCloudsFill } from 'react-icons/bs'
import axios from 'axios';

export default function Body() {
    const [data, setData] = useState({});

    const params = {
        lat: '35.5',
        ion: '-78.5'
    }
    const url =
        'https://weatherbit-v1-mashape.p.rapidapi.com/forecast/3hourly'

    const handle = () => {
        axios.get(url, {
            params,
            headers: {
                'X-RapidAPI-Key': 'b17ea89733msh92a5bbff3f3f518p138afbjsn2b1007c93b44',
                'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
            },
        })
            .then(res => {console.log(res)})
            .catch(err => console.log(err))
    }

    return (
        <div className='h-[100vh] bg-[#fff] flex background'>
            <div className='text-[#fff]'>
                <div className='p-10 w-[50%]'>
                    <logo className='text-2xl'>The weather</logo>
                </div>
                <div className='mt-[22rem] m-10 flex items-center px-5'>
                    <h1 className='text-[6rem]'>16•</h1>
                    <div className='ml-3 flex flex-col'>
                        <h3 className='text-[3rem]'>London</h3>
                        <div className='flex'>
                            <h4>06:09•</h4>
                            <h4>Monday, 9 sep'19</h4>
                        </div>
                    </div>

                    <div className='mt-5 ml-5 flex flex-col items-center'>
                        <BsCloudsFill size={30} />
                        Cloudy
                    </div>
                </div>
        {/* <button onClick={handle}>
            Click
        </button> */}
            </div>
            <Glass />
        </div>
    )
}
