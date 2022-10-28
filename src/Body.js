import React, { useState, useEffect } from 'react'
import Glass from './Glass'
import './App.css'
import { BsCloudsFill } from 'react-icons/bs'
import axios from 'axios';


export default function Body() {
    const [data, setData] = useState({});

    const APIKEY = process.env.YOUR_API_KEY
    // const options = {
    //     method: 'GET',
    // };

    //     fetch(`http://api.airvisual.com/v2/nearest_city?key=42fbe635-4be9-48c4-bd4c-d87e55ba989a`, options)
    //     .then(res => console.log(res))
    //     .catch(err => console.error(err));
    //     // .then(response => response.json())

    // const config = () => {
    //     axios.get(`http://api.airvisual.com/v2/nearest_city?key=42fbe635-4be9-48c4-bd4c-d87e55ba989a`)
    //         .then(res => setData(res.data.data), console.log(data))
    //         .catch(err => console.log(err))
    //         // console.log(data)
    // }

    // useEffect(() => {
    //     const getUser = async () => {
    //           const response = await axios.get(`http://api.airvisual.com/v2/nearest_city?key=42fbe635-4be9-48c4-bd4c-d87e55ba989a`);
    //           console.log(response.data.data);
    //           setData(response.data.data)
    //       }
    // })

    const handle = async() => {
        const response = await axios.get(`http://api.airvisual.com/v2/nearest_city?key=42fbe635-4be9-48c4-bd4c-d87e55ba989a`);
                  console.log(response.data.data);
                  setData(response.data.data)
    }


    return (
        <div className='h-[100vh] bg-[#fff] flex background'>
            <div className='text-[#fff]'>
                <div className='p-10 w-[50%]'>
                    <logo className='text-2xl'>The weather</logo>
                </div>
                <div className='mt-[22rem] m-10 flex items-center px-5'>
                    <h1 className='text-[6rem]'>{data.current.weather.tp}•</h1>
                    <div className='ml-3 flex flex-col'>
                        <h3 className='text-[3rem]'>{data.city}, {data.state} {data.country}</h3>
                        <div className='flex'>
                            <h4>{data.current.weather.ts.substr(0, 10)}</h4>
                            {/* <h4>Monday, 9 sep'19</h4> */}
                        </div>
                        {/* <button onClick={handle}>Click</button> */}
                    </div>

                    <div className='mt-5 ml-5 flex flex-col items-center'>
                        <BsCloudsFill size={30} />
                        Cloudy
                    </div>
                </div>
            </div>
            <Glass />
        </div>
    )
}
