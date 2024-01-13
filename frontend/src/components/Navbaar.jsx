import React from 'react'
import { Link } from 'react-router-dom'

const Navbaar = () => {
  return (
    <div>
        <div className='bg-blue-900 p-8'>
            <div className='flex justify-between'>
                <div className='text-slate-100 text-3xl'>
                    ABCDE ABCDE ACADEMY
                </div>
                <div className='text-slate-100 text-xl'>
                    <Link className='px-3 hover:text-rose-600' to="/">Home</Link>
                    <Link className='px-3 hover:text-rose-600' to="/About">About</Link>
                    <Link className='px-3 hover:text-rose-600' to="/Campus">Campus</Link>
                    <Link className='px-3 hover:text-rose-600' to="/Notice">Notice</Link>
                    <Link className='px-3 hover:text-rose-600' to="/Contact">Contact</Link>
                    <Link className='m-3 py-2 px-3 bg-orange-600 hover:text-rose-600' to="/Admission">Addmission</Link>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Navbaar