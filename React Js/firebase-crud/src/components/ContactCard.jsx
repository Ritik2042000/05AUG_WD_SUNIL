import React from 'react';
import { HiOutlineUserCircle } from 'react-icons/hi';
import { IoMdTrash } from 'react-icons/io';
import { RiEditCircleLine } from 'react-icons/ri';

const ContactCard = ({cueElem}) => {
    return (
        <div key={cueElem.id} className='flex items-center justify-between rounded-lg bg-yellow p-2'>

        <div className='flex gap-2 '>
          <HiOutlineUserCircle className='text-orange text-4xl' />
          <div className=''>
            <h2 className='text-medium'>{cueElem.name}</h2>
            <p className='text-sm'>{cueElem.email}</p>
          </div>
        </div>
        <div className='flex text-3xl '>
          <RiEditCircleLine className='cursor-pointer' />
          <IoMdTrash className='cursor-pointer text-orange' />
        </div>
      </div>
    );
};

export default ContactCard;