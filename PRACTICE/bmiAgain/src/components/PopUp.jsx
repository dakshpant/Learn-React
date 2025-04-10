import React from 'react'
import { useRef } from 'react';
import { FaRegWindowClose } from "react-icons/fa";
const PopUp = ({ PopClose, popValue, popMessage }) => {
    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            PopClose();
        }
    }
    return (

        <div className='inset-0 absolute flex justify-center items-center'>
            <div
                ref={modalRef}
                onClick={closeModal}
                className='opacity-40 bg-black absolute backdrop-blur-sm w-full h-full top-0 left-0 right-0 text-white'> </div>


            <div className='flex flex-col justify-center items-center gap-5 absolute text-white'>
                <button
                    onClick={PopClose}
                    className='self-end mr-4'>
                    <FaRegWindowClose size={30} />
                </button>


                <div className='bg-indigo-600 opacity-100 rounded-xl px-40 py-40 flex flex-col gap-5 items-center mx-4 '>
                    <h2 className='text-2xl'>{popValue}</h2>
                    <h3 className='text-xl'>{popMessage}</h3>
                </div>
            </div>

        </div>
    )
}

export default PopUp


