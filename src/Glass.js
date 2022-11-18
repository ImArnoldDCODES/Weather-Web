// import React, {useContext} from 'react'
// import DataContext from './Body'
import './App.css'
import { FiSearch } from 'react-icons/fi'


export default function Glass() {
    // const { value } = useContext(DataContext)
    // console.log(value);
    return (
            <div className='Glass absolute h-[100vh] w-[40%] right-0 text-[#e1f1f2] px-10 pt-10'>
                <div>
                    <FiSearch size={40} color={'#000'} className='ml-auto -mt-7 p-2 bg-[#A52A2A] w-[11%] h-[10%]' />
                    <div>
                        <form className='border-b border-[#fff] pb-3'>
                            <input type="text" name="name" placeholder='Another Place' className='bg-[#66000000] focus:outline-0' />
                        </form>
                    </div>
                    <div className='mt-10 border-b pb-5 border-[#fff]'>
                        <ul>
                            <li>Brimingham</li>
                            <li>Manchester</li>
                            <li>New York</li>
                            <li>California</li>
                        </ul>
                    </div>

                    <div className='mt-5'>
                        <h3 className='text-base font-semibold'>Weather Details</h3>

                        <ul className='mt-7 space-y-3'>
                            <li className='flex justify-between'>
                                <h4>Cloudy</h4>
                                <h2>70%</h2>
                            </li>
                            <li className='flex justify-between'>
                                <h4> Humidity</h4>
                                <h2>62%</h2>
                            </li>
                            <li className='flex justify-between'>
                                <h2>Wind</h2>
                                <h4>85km/h</h4>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
    )
}