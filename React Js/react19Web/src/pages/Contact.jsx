import React from 'react';

const Contact = () => {
    return (
        <section className='section-contact'>
            <h2 className='container-title'>
                Contact Us
            </h2>
            <div className="contact-wrapper container">

                <form action="">
                    <input type="text" required autoComplete='false' placeholder='Enter your Name' name='username' className='form-control' />
                    <input type="email" required autoComplete='false' placeholder='Enter your Email' name='email' className='form-control' />
                    <textarea required autoComplete='false' rows={10} placeholder='Enter your Message' name='message' className='form-control' />
                    <button type='submit' value={'send'}>Send</button>
                </form>
            </div>
        </section >
    );
};

export default Contact;