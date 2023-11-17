import React, { useState } from 'react';
import Select  from 'react-select';

const SearchableDropdown = () => {

    const options = [
        { value: 'Select All', label: 'select all' },
        { value: 'User', label: 'User' },
        { value: 'Admin', label: 'Admin' },
        { value: 'Sehan', label: 'Sehan' },
        { value: 'Aslam', label: 'Aslam' },
    ];


    return (
        <>
            <div>

                <Select options={options} isMulti isSearchable placeholder='Select Users' noOptionsMessage={() => 'No Roles Found'}
                    styles={{
                        control: (baseStyles, state) => ({
                            ...baseStyles,
                            background: '#f5f8fa',
                            color: '#5e6278',
                            border: state.isFocused ? 'none' : 'none',
                        }),
                        multiValueLabel: (baseStyles) => ({
                            ...baseStyles,
                            background: '#0d222c',
                            color: 'white',
                        }),
                        multiValueRemove: (baseStyles, state) => ({
                            ...baseStyles,
                            color: state.isFocused ? '#000' : '#fff',
                            background: state.isFocused ? '#ced2d4' : '#0d222c',
                        }),
                        option: (baseStyles, state) => ({
                            ...baseStyles,
                            background: state.isFocused ? '#f5f5f8' : "#fff",
                        }),
                        dropdownIndicator : (baseStyles) => ({
                            ...baseStyles,
                            color : "#000"

                        })
                    }}

                />
            </div>
        </>
    );
};

export default SearchableDropdown;