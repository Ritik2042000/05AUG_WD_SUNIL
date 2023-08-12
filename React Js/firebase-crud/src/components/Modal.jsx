import React from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ isOpen, onClose, children }) => {
    return createPortal(
        <>
            {
                isOpen && (
                    <>
                        <div className=' relative  bottom-32  z-30 min-h-[200px] max-w-[90%] m-auto bg-white p-4 rounded-lg'>
                            <div className='flex justify-end'>
                                <AiOutlineClose className='text-2xl cursor-pointer' onClick={onClose} />
                            </div>
                            {children}
                        </div>
                        <div className='h-screen  w-[100%] absolute top-0 z-0 backdrop-blur' onClick={onClose}/>



                    </>
                )
            }
        </>
    
    ,document.getElementById('modal-root'));
};

export default Modal;