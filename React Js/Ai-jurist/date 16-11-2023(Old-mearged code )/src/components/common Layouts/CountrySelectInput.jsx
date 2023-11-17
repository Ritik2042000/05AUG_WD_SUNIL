import React, { useState } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput, { isPossiblePhoneNumber } from 'react-phone-number-input'
import PhoneInputWithCountrySelect from 'react-phone-number-input';

const CountrySelectInput = () => {
    const [value, setValue] = useState()

    const customStyle = {
        input: {
            backgroundColor: '#f5f8fa',
            borderColor: '#f5f8fa',
            color: '#5e6278',
            width : '50px'
        }
    }
    return (
        <div>
            <PhoneInputWithCountrySelect
                placeholder="Enter phone number"
                value={value}
                // className='form-control '
                onChange={setValue}
                international
                defaultCountry="IN"
                error={value ? (isPossiblePhoneNumber(value) ? undefined : 'Invalid phone number') : 'Phone number required'}
                style={customStyle}
            />
            <p className='text-danger' style={{ fontSize: '10px' }}>

                {/* {value && isPossiblePhoneNumber(value) ? 'Phone number required' : 'Invalid phone number'} */}
            </p>
        </div>
    );
};

export default CountrySelectInput;