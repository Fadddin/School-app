import React from 'react'
import { Link } from 'react-router-dom'

const AdmissionOpen = () => {
  return (
    <div className='flex my-2'>
        <div className='w-2/5 h-80 flex justify-center items-center bg-blue-950'>
            <div className='text-slate-50 text-5xl'>
                 ADMISSIONS OPEN
                 <div className='flex justify-center'>
                    <Link className='m-3 py-2 px-3 text-xl bg-orange-600 hover:text-rose-600' to="/About">Apply Now</Link>
                </div>
            </div>
            
        </div>
        <div className='w-3/5 h-80'>
            <img className='w-full h-80' src="https://placekitten.com/400/300" alt="" />
        </div>
    </div>
  )
}

export default AdmissionOpen