import React from 'react';

const Contact = () => {

    const hadleFormSubmit = (formData) => {
      const data =  Object.fromEntries(formData.entries());
    //   console.log(data,'formData');
      
    }


    return (
        <section className='section-contact'>
            <h2 className='container-title'>
                Contact Us
            </h2>
            <div className="contact-wrapper container">

                <form action={hadleFormSubmit}>
                    <input type="text" required autoComplete='off' placeholder='Enter your Name' name='username' className='form-control' />
                    <input type="email" required autoComplete='off' placeholder='Enter your Email' name='email' className='form-control' />
                    <textarea required autoComplete='off' rows={10} placeholder='Enter your Message' name='message' className='form-control' />
                    <button type='submit' value={'send'}>Send</button>
                </form>
            </div>
        </section >
    );
};

export default Contact;