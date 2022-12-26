import React, { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import { FiSearch } from 'react-icons/fi'

// const DataContext = React.createContext()
// export default DataContext

// const Consumer = DataContext.Provider
// export {Consumer}

// console.log(DataContext)

export default function Body() {
    const [data, setData] = useState({});
    const [lat, setLat] = useState(null)
    const [long, setLong] = useState(null)
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [country, setCountry] = useState('')

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
                alert('Something went wrong getting your location!')
            })
        }
    }

    getUserCoordinates();

    useEffect(() => {
        // axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=${APIKEY}`)
        axios.get(`http://api.airvisual.com/v2/nearest_city?lat=${lat}&lon=${long}&key=${APIKEY}`)
            .then((res) => setData(res.data.data))
            // .catch((err) => console.log(err))
    }, [APIKEY,lat,long])

    console.log(data)

    // city=Los Angeles&state=California&country=USA
    const handleSearch = () => {
        axios.get(`http://api.airvisual.com/v2/city?city=${city}&state=${state}&country=${country}&key=${APIKEY}`)
        .then((res) => setData(res.data))
        // .catch((err) => console.log(err))
        setCity('')
        setCountry('')
        setCountry('')
        if(res => res.status === 400){
            alert("Can't find place")
        }
    }

    return (
        <div className='flex h-[100vh] bg-[#326]'>
            <div className='text-[#fff]'>
                <div className='m-10 w-[30%]'>
                    <main className='text-2xl'>The weather</main>
                </div>
                <div className='mt-[22rem] m-10 flex items-center px-5'>
                    {/* <h1 className='text-[6rem]'>{data?.current?.weather?.tp}°</h1> */}
                    <div className='ml-3 flex flex-col'>
                        <h3 className='text-[3rem]'>{data.city}, {data.country}</h3>
                        <div className='flex'>
                            <h4>{date.substr(0, 21)}</h4>
                        </div>
                        <h1>{data.city}</h1>
                    </div>

                    <div className='mt-10 ml-5 flex flex-col items-center'> 
                    </div>
                </div>
            </div>


            <div className='Glass absolute h-[100vh] w-[40%] right-0 text-[#e1f1f2] px-10 pt-10'>
                <div>
                    <FiSearch size={40} color={'#000'} className='ml-auto -mt-7 p-2 bg-[#A52A2A] w-[11%] h-[10%]' onClick={handleSearch}/>

                    <form className='pb-3' onSubmit={handleSearch}>
                        <div className='border-b border-[#fff] pb-3'>
                            <input type="text" name="name" placeholder='City' className='bg-[#66000000] focus:outline-0' onChange={text => setCity(text.target.value)}/>
                        </div>

                        <div className='border-b border-[#fff] pb-3 mt-5'>
                            <input type="text" name="name" placeholder='State' className='bg-[#66000000] focus:outline-0' onChange={text => setState(text.target.value)}/>
                        </div>

                        <div className='border-b border-[#fff] pb-3 mt-5'>
                            <input type="text" name="name" placeholder='Country' className='bg-[#66000000] focus:outline-0' onChange={text => setCountry(text.target.value)}/>
                        </div>
                    </form>

                    <div className='mt-5'>
                        <h3 className='text-base font-semibold'>Weather Details</h3>

                        <ul className='mt-7 space-y-3'>
                            <li className='flex justify-between'>
                                <h4>Sea Level</h4>
                                {/* <h2>{data.data?.current?.weather?.pr}</h2> */}
                            </li>
                            <li className='flex justify-between'>
                                <h4>Humidity</h4>
                                {/* <h2>{data.data?.current?.weather?.hu}%</h2> */}
                            </li>
                            <li className='flex justify-between'>
                                <h2>Wind</h2>
                                {/* <h4>{data.data?.current?.weaher?.ws}km/h</h4> */}
                            </li>
                            <li className='flex justify-between'>
                                {/* <h2>Description</h2> */}
                                {/* <h4>{data.weather[0]?.description}</h4> */}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
