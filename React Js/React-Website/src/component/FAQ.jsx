import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';





const FAQ = ({question,answer}) => {

    const [answerToggle,setAnswerToggle] = useState(false);
    
    return (

        <article className='faq' onClick={()=> setAnswerToggle(prev => !prev)}>
            <div className='flx'>
                <h4>{question}</h4>
                <button className="faq__icon">
             {
                answerToggle ?<AiOutlineMinus/> : <AiOutlinePlus/>
             }           
                </button>
            </div>
            {answerToggle && <p>{answer}</p>}
        </article>

    );
};

export default FAQ;