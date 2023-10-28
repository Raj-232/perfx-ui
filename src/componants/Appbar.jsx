import React from 'react'
import { Link } from 'react-router-dom'

const Appbar = () => {
    return (
        <div className="flex justify-between items-center px-4  ">
            <div className='flex items-center'>

                <Link><img src="/images/logo.svg" alt='logo' className="sm:flex hidden" /></Link>
            </div>
            <div className="flex items-center bg-white px-4">

                <img src="/images/search 1.svg" alt='logo' className='w-6 h-6' />


                <input
                    className="p-2 sm:w-80 w-full bg-transparent border-none outline-none"
                    type="text"
                    placeholder="Search..."
                />


                <img src="/images/setting-5.svg" alt='logo' className='w-6 h-6' />

            </div>
            <div className="sm:flex hidden space-x-6 items-center">

                <img src="/images/notification.svg" alt='logo' className='w-6 h-6' />


                <img src="/images/setting-2.svg" alt='logo' className='w-6 h-6' />


                <img src="/images/message-question.svg" alt='logo' className='w-6 h-6' />

                <img src="/images/profile-circle.svg" alt='logo' className='w-6 h-6' />

            </div>
        </div>

    )
}

export default Appbar