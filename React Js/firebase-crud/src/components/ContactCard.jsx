import React, { useState } from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';
import { db } from '../config/firebase';
import { deleteDoc, doc } from 'firebase/firestore';
import useDisclose from '../customHooks/useDisclose';
import AddAndUpdate from './AddAndUpdate';
import { toast } from 'react-toastify';

const ContactCard = ({ cueElem }) => {

  const { isOpen, onClose, onOpen } = useDisclose()


  const deleteContact = async (id) => {
    try {
      await deleteDoc(doc(db, "contacts", id))
      toast.success('contact Deleted SuccessFully')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div key={cueElem.id} className='flex items-center justify-between rounded-lg bg-yellow p-2'>
        <div className='flex gap-2 '>
          <HiOutlineUserCircle className='text-orange text-4xl' />
          <div className=''>
            <h2 className='text-medium'>{cueElem.name}</h2>
            <p className='text-sm'>{cueElem.email}</p>
          </div>
        </div>
        <div className='flex text-3xl '>
          <RiEditCircleLine className='cursor-pointer' onClick={onOpen} />
          <IoMdTrash className='cursor-pointer text-orange' onClick={() => deleteContact(cueElem.id)} />
        </div>
      </div>
      <AddAndUpdate contact={cueElem}  isOpen={isOpen} onClose={onClose}  isUpdate />
    </>
  );
};

export default ContactCard;