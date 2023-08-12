import React from 'react';
import Modal from './Modal';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { addDoc, collection, doc, updateDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import * as Yup from 'yup';


const contactValidation = () => Yup.object().shape({
    name: Yup.string().required("Name is Requried"),
    email: Yup.string().email('Invalid Email').required("Email is Requried"),
})

const AddAndUpdate = ({ isOpen, onClose, isUpdate, contact }) => {

    const addContact = async (contact, id) => {
        try {
            const contactRef = collection(db, 'contacts');
            await addDoc(contactRef, contact);
            onClose();
            toast.success('Contact Added SuccessFully')
        } catch (error) {
            console.log(error);
        }
    }
    const updateContact = async (contact, id) => {
        try {
            const contactRef = doc(db, 'contacts', id);
            await updateDoc(contactRef, contact);
            onClose();
            toast.success('Contact Updated SuccessFully');
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className='flex align-middle justify-center'>
            <Modal isOpen={isOpen} onClose={onClose}  >
                <Formik validationSchema={contactValidation} initialValues={isUpdate ? {
                    name: contact.name,
                    email: contact.email,
                } : {
                    name: "",
                    email: "",
                }} onSubmit={(values) => {
                    isUpdate ?
                        updateContact(values, contact.id) :
                        addContact(values)
                }}>
                    <Form className='flex flex-col'>
                        <div className='flex flex-col'>
                            <label htmlFor='name'>Name</label>
                            <Field name='name' className='h-10 border' />
                            <div className='text-red-500 text-xs'>
                                <ErrorMessage name='name'/>
                            </div>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor='email'>Email</label>
                            <Field type='email' name='email' className='h-10 border' />
                            <div className='text-red-500 text-xs'>
                                <ErrorMessage name='email'/>
                            </div>
                        </div>
                        <button type='submit' className=' bg-orange px-3 py-1.5 border rounded-sm my-3 self-end'>
                            {isUpdate ? "Update" : "Add "}Contact
                        </button>
                    </Form>
                </Formik>
            </Modal>
        </div>
    );
};

export default AddAndUpdate;