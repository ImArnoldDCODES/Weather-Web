import React, { useState, useEffect } from 'react'
import Glass from './Glass'
import './App.css'
import { BsCloudsFill } from 'react-icons/bs'
import axios from 'axios';
import api from './api'


export default function Body() {

    // require('dotenv').config()

    // const [query, setQuery] = useState("")
    // const [errMsg, setErrMsg] = useState("")
    const [data, setData] = useState({});
    const [dataW, setDataW] = useState({});
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)

    let date = new Date().toString()

    const APIKEY = process.env.REACT_APP_API_KEY
    console.log(APIKEY)

    const geolocationAPI = navigator.geolocation;


    const getUserCoordinates = () => {
        if (!geolocationAPI) {
            alert('Geolocation API is not available in your browser!')
        } else {
            geolocationAPI.getCurrentPosition((position) => {
                const { coords } = position;
                setLat(coords.latitude);
                setLong(coords.longitude);
            }, (error) => {
                alert('Something went wrong getting your position!')
            })
        }
    }

    getUserCoordinates();

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

    // const handle = async() => {
    //     const response = await axios.get(`${api.nearest.base}lat=.${lat}&lon=${long}&key=${api.nearest.key}`);
    //               console.log(response.data.data);
    //               setData(response.data.data)
    // }

    // handle()

    useEffect(() => {
        axios.get(`${api.nearest.base}lat=.${lat}&lon=${long}&key=${api.nearest.key}`)
            //  .then((res) => console.log(res.data.data))
            .then((res) => { setData(res.data.data) })
            .then((res) => console.log(res.data.data))
            .catch((err) => console.log(err))
    })

    // console.log(dataW.weather)


    return (
        <div className='h-[100vh] bg-[#fff] flex background'>
            <div className='text-[#fff]'>
                <div className='m-10 border w-[20%]'>
                    <main className='text-2xl'>The weather</main>
                </div>
                <div className='mt-[22rem] m-10 flex items-center px-5'>
                    <h1 className='text-[6rem]'>{data.current.weather.tp}°</h1>
                    {/* <h1 className='text-[6rem]'>{dataW.weather.tp}°</h1> */}
                    <div className='ml-3 flex flex-col'>
                        <h3 className='text-[3rem]'>{data.city} {data.state} {data.country}</h3>
                        <div className='flex'>
                            <h4>{date.substr(0, 21)}</h4>
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
