import { useAuth0 } from '@auth0/auth0-react';
import React from 'react';
import { styled } from 'styled-components'

const Contact = () => {
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;

    .container {
      margin-top: 6rem;

      .contact-form {
        max-width: 50rem;
        margin: auto;

        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;

          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;

            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
   
  const {user, isAuthenticated} = useAuth0();
    return (
        < Wrapper >
            <h2 className='common-heading'>Contact Page</h2>    
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29368.433429248078!2d72.48452005256573!3d23.05847521547914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9ca1402b2107%3A0xc6b7cfd374cb4bcb!2sThaltej%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1688388991330!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>  

            <div className="container">
                <div className="contact-form">
                    <form action="" method='POST' className='contact-inputs'>
                        <input type="text" placeholder='username' name='username' required autoComplete='off' value={isAuthenticated ? user.name : ''} />
                        <input type="email" placeholder='Email' name='Email' required autoComplete='off'
                        value={isAuthenticated ? user.email : ''} />
                        <textarea name="Messages" id="" cols="30" rows="10" placeholder='Enter your Message'></textarea>
                        <input type="submit"  name='Submit'  />
                    </form>
                </div>
            </div>

        </ Wrapper >
    );
};

export default Contact;