import React, { useState } from 'react';
import './style.css'

function Accordion({ title, content }) {
    const [isOpen, setIsOpen] = useState(false);
    
    const toggleAccordion = () => {
        setIsOpen(!isOpen);
    };
    
  return (
      <div className="accordion">
      <div className="accordion-header" onClick={toggleAccordion}>
        {title}
        <i className='fa-solid fa-'></i>
      </div>
      {isOpen && (
        <div className="accordion-body">{content}</div>
        )}
    </div>
  );
}
const DropDown = () => {
        const items = [
          {
            title: 'Accordion Item 1',
            content: 'This is the content for accordion item 1.'
          },
          {
            title: 'Accordion Item 2',
            content: 'This is the content for accordion item 2.'
          },
          {
            title: 'Accordion Item 3',
            content: 'This is the content for accordion item 3.'
          }
        ];
    return (
        
    <div className="App">
      {items.map(item => (
        <Accordion key={item.title} title={item.title} content={item.content} />
      ))}
    </div>            
        
    );
};

export default DropDown;
