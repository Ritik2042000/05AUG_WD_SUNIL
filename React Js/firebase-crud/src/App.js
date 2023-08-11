
import './App.css';
import NavBar from './components/NavBar';
import { FiSearch } from 'react-icons/fi'
import { AiFillPlusCircle } from 'react-icons/ai'
import { useEffect, useState } from 'react';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from './config/firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ContactCard from './components/ContactCard';
import AddAndUpdate from './components/AddAndUpdate';
import useDisclose from './customHooks/useDisclose';
import NotFoundContact from './components/NotFoundContact';



const App = () => {

  const [contact, setContacts] = useState([]);
  const { isOpen, onClose, onOpen } = useDisclose();

  useEffect(() => {
    const getContcts = async () => {
      try {
        const contactsRef = collection(db, "contacts");
        // const contactSnapShot = await getDocs(contactsRef);
        
        onSnapshot(contactsRef, (snapshot) => {
          const contactLists = snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          setContacts(contactLists);
          return contactLists;
        })
        // console.log(contactLists);
      } catch (error) {
        console.log(error);
      }
    };
    getContcts()
  }, [])
  // console.log(contact);
  
  const filterContact = (e) => {
    const value = e.target.value;
    const contactsRef = collection(db, "contacts");
    
    onSnapshot(contactsRef, (snapshot) => {
      const contactLists = snapshot.docs.map((doc) => {
        return {
          id: doc.id,
          ...doc.data(),
        };

      });
      
      const filteredContacts = contactLists.filter((contact)=>
      contact.name.toLowerCase().includes(value.toLowerCase()))
      setContacts(filteredContacts);
      return filteredContacts;
    })


  }

  return (
    <>
      <div className='max-w-[370px] mx-auto px-4'>
        <NavBar />
        <div className='flex gap-2'>
          <div className='relative flex items-center flex-grow'>
            <FiSearch className='absolute ml-1 text-3xl text-white ' />
            <input type='text' className='h-10 flex-grow rounded-md border border-white bg-transparent pl-9 text-white' placeholder='Search Contact' onChange={filterContact}/>
          </div>
          <AiFillPlusCircle className='cursor-pointer text-5xl text-white' onClick={onOpen} />
        </div>
        <div className='mt-4 flex flex-col gap-3'>
          {
           contact.length <= 0 ? <NotFoundContact/> : contact.map((cueElem) => (
              <ContactCard key={cueElem.id} cueElem={cueElem} />

            ))
          }
        </div>
      </div >
      <AddAndUpdate isOpen={isOpen} onClose={onClose} />
      <ToastContainer position='bottom-right'/>
    </>
  );
}

export default App;
