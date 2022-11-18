import React, { useState, useEffect } from 'react'
// import Glass from './Glass'
import './App.css'
import { BsCloudsFill } from 'react-icons/bs'
import axios from 'axios'
import api from './api'
import { FiSearch } from 'react-icons/fi'
import Glass from './Glass'



export default function Body() {
    const [data, setData] = useState({});
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)

    let StoreData = data

    let dataContext
    dataContext = React.createContext(data)

    console.log(dataContext)

    let date = new Date().toString()
    const APIKEY = process.env.REACT_APP_API_KEY
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

    useEffect(() => {
        axios.get(`${api.nearest.base}lat=${lat}lon=${long}&units=metric&q=lagos&APPID=${APIKEY}`)
            // .then((res) => console.log(res.data))
            .then((res) => setData(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='h-[100vh] bg-[#fff] flex background'>
            <div className='text-[#fff]'>
                <div className='m-10 w-[30%]'>
                    <main className='text-2xl'>The weather</main>
                </div>
                <div className='mt-[22rem] m-10 flex items-center px-5'>
                    <h1 className='text-[6rem]'>{data.main?.temp}°</h1>
                    <div className='ml-3 flex flex-col'>
                        <h3 className='text-[3rem]'>{data?.name}, {data.sys?.country}</h3>
                        <div className='flex'>
                            <h4>{date.substr(0, 21)}</h4>
                        </div>
                    </div>

                    <div className='mt-5 ml-5 flex flex-col items-center'>
                        <BsCloudsFill size={30} />
                        Cloudy
                    </div>
                </div>
            </div>

            <dataContext.Provider value={data}>
                <Glass />
            </dataContext.Provider>
        </div>
    )
    // export dataContext
}


// export default dataContext