import React, { useState } from 'react';
import Select from 'react-select';



const SearchableDropdownForRoles = () => {

    const options = [
        { value: 'Select All', label: 'select all' },
        { value: 'User', label: 'User' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Bussiness Role', label: 'Bussiness Role' },
        { value: 'Finance Role', label: 'Finance Role' },


    ];

    // const [selectedOptions, setSelectedOptions] = useState([]);
    // const [searchText, setSearchText] = useState('');
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //     setIsOpen(!isOpen);
    // };

    // const handleOptionClick = (option) => {
    //     if (selectedOptions.includes(option)) {
    //         setSelectedOptions(selectedOptions.filter((item) => item !== option));
    //     } else {
    //         setSelectedOptions([...selectedOptions, option]);
    //     }
    // };

    // const filteredOptions = options.filter((option) =>
    //     option.toLowerCase().includes(searchText.toLowerCase())
    // );


    return (
        <>
            <div>

                <Select options={options} isMulti isSearchable placeholder='Select Roles' noOptionsMessage={() => 'No Roles Found'} 
                styles={{
                    control : (baseStyles,state) => ({
                        ...baseStyles,
                        background:'#f5f8fa',
                        color:'#5e6278',
                        border: state.isFocused ? 'none': 'none',
                        outline : 'none'

                    }),
                    multiValueLabel: (baseStyles) => ({
                        ...baseStyles,
                        background:'#0d222c',
                        color:'white',
                    }),
                    multiValueRemove: (baseStyles,state) => ({
                        ...baseStyles,
                        color: state.isFocused ? '#000' : '#fff',
                        background : state.isFocused ? '#ced2d4' : '#0d222c',
                    }),
                    option:(baseStyles,state) => ({
                        ...baseStyles,
                        background : state.isFocused ? '#f5f5f8' : "#fff",
                    }),
                }}
                
                />
            </div>
        </>
    );
};

export default SearchableDropdownForRoles;