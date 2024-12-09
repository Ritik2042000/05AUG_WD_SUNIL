import React, { useEffect, useState, useTransition } from 'react';
import { getCountryData } from '../api/postApi';
import Loader from '../components/Ui/Loader';
import CountryCard from '../components/Ui/CountryCard';


const Country = () => {

    const [isPending, startTransition] = useTransition();
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        startTransition(async () => {
            const res = await getCountryData()
            console.log(res.data, 'contryData');
            setCountries(res.data)
        })
    }, [])

    if (isPending) {
        return <Loader />
    }

    return (
        <section className='country-section'>
            <ul className="grid grid-four-cols">
                {
                    countries.map((data) => {
                        return <li key={data.name.commom}>{data.name.common}</li>

                    })
                }
            </ul>

        </section >
    );
};

export default Country;