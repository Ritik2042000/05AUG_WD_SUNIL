
import './App.css';
import NavBar from './components/NavBar';
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { HiOutlineUserCircle } from 'react-icons/hi'
import { RiEditCircleLine } from 'react-icons/ri'
import { IoMdTrash } from 'react-icons/io'
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from './config/firebase';
import ContactCard from './components/ContactCard';


const App = () => {

  const [contact, setContacts] = useState([]);

  useEffect(() => {
    const getContcts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactsRef);
        const contactLists = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          }
        });
        setContacts(contactLists);
        // console.log(contactLists);
      } catch (error) {
        console.log(error);
      }
    }
    getContcts()
  }, [])
  // console.log(contact);



  return (
    <div className='max-w-[370px] mx-auto px-4'>
      <NavBar />
      <div className='flex gap-2'>
        <div className='relative flex items-center flex-grow'>
          <FiSearch className='absolute ml-1 text-3xl text-white ' />
          <input type='text' className='h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white' placeholder='Search Contact' />
        </div>

        <AiFillPlusCircle className='cursor-pointer text-5xl text-white' />

      </div>
      <div className='mt-4 flex flex-col gap-3'>
        {
          contact.map((cueElem) => (
            <ContactCard key={cueElem.id} cueElem={cueElem}/>

          ))
        }
      </div>

    </div >
  );
}

export default App;
