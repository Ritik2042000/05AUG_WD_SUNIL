import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/postApi';
import Loader from '../components/Ui/Loader';
import CountryCard from '../components/Ui/CountryCard';
import SearchFilter from '../components/Ui/SearchFilter';
import { data } from 'react-router-dom';


const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);
    const [search, setSearch] = useState();
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            console.log(res.data, 'contryData');
            setCountries(res?.data)
        })
    }, [])

    if (isPending) {
        return <Loader />
    }

    const searchCountry = (data) => {
        if (search) {
            return data.name.common.toLowerCase().includes(search.toLowerCase())
        } else {
            return data;
        }
    }

    const filterCountryRegion = (data) => {
        if (filter === 'all') return data;
        return data.region == filter
    }

    const searchFilterCoun = countries.filter((data) => searchCountry(data) && filterCountryRegion(data))


    return (
        <section className='country-section'>
            <SearchFilter search={search} setSearch={setSearch} filter={filter} setFilter={setFilter} countries={countries} setCountries={setCountries} />
            <ul className="grid grid-four-cols">
                {
                    searchFilterCoun.map((data) => {
                        return <CountryCard country={data} key={data?.name?.commom} />


                    })
                }
            </ul>
        </section >
    );
};

export default Country;