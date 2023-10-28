import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [isOpen1, setIsOpen1] = useState(true);
    const [isOpen2, setIsOpen2] = useState(true);
    const [isOpen3, setIsOpen3] = useState(true);
    const Sidemenu1 = () => {
        setIsOpen1(!isOpen1);
    };
    const Sidemenu2 = () => {
        setIsOpen2(!isOpen2);
    };
    const Sidemenu3 = () => {
        setIsOpen3(!isOpen3);
    };
    return (
        <div className="px-2 space-y-2">
            <div>
                <div >
                    <button onClick={Sidemenu1} className="flex items-center font-bold w-full pl-4 pr-20 py-2 bg-secondary border rounded-2xl" type="button">
                        <svg className={`${isOpen1 ? 'hidden' : 'block'} w-4 h-4 mr-2 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                        <svg className={`${isOpen1 ? 'block' : 'hidden'} w-4 h-4 mr-2 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                        Dropdown
                    </button>
                </div>
                <div className={`${isOpen1 ? 'block' : 'hidden'} pl-6 py-2`}>

                    <Link> <div className="p-1">Submanu</div></Link>
                    <Link> <div className="p-1">Submanu</div></Link>
                    <Link> <div className="p-1">Submanu</div></Link>
                    <Link> <div className="p-1">Submanu</div></Link>



                </div>
            </div>
            <div>
                <div >
                    <button onClick={Sidemenu2} className="flex items-center font-bold w-full pl-4 pr-20 py-2 bg-secondary border rounded-2xl" type="button">
                        <svg className={`${isOpen2 ? 'hidden' : 'block'} w-4 h-4 mr-2 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                        <svg className={`${isOpen2 ? 'block' : 'hidden'} w-4 h-4 mr-2 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                        Dropdown
                    </button>
                </div>
                <div className={`${isOpen2 ? 'block' : 'hidden'} pl-6 py-2`}>

                    <Link> <div className="p-1">Submanu</div></Link>
                    <Link> <div className="p-1">Submanu</div></Link>




                </div>
            </div>
            <div>
                <div >
                    <button onClick={Sidemenu3} className="flex items-center font-bold w-full pl-4 pr-20 py-2 bg-secondary border rounded-2xl" type="button">
                        <svg className={`${isOpen3 ? 'hidden' : 'block'} w-4 h-4 mr-2 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                        </svg>
                        <svg className={`${isOpen3 ? 'block' : 'hidden'} w-4 h-4 mr-2 text-gray-800 dark:text-white`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 8">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 5.326 5.7a.909.909 0 0 0 1.348 0L13 1" />
                        </svg>
                        Dropdown
                    </button>
                </div>
                <div className={`${isOpen3 ? 'block' : 'hidden'} pl-6 py-2`}>

                    <Link> <div className="p-1">Submanu</div></Link>
                    <Link> <div className="p-1">Submanu</div></Link>
                    <Link> <div className="p-1">Submanu</div></Link>




                </div>
            </div>

        </div>
    )
}

export default Sidebar