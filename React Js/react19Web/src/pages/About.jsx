import countryInfo from '../api/countryData.json'
import React from 'react';

const About = () => {
    return (
        <section className='section-about container'>
            <h2 className="container-title">
                Here are the Interesting Facts
                <br />
                we're proud of
            </h2>
            <div className="gradient-cards">
                {countryInfo.map((data) => {
                    return <div className="card" key={data.id}>
                        <div className="container-card bg-blue-box">
                            <p className="card-title">{data.countryName}</p>
                            <p><span className="card-description">Capital:</span> {data.capital}</p>
                            <p><span className="card-description">Population:</span>{data.population}</p>
                            <p><span className="card-description">Interesting Fact: </span>{data.interestingFact}</p>
                        </div>
                    </div>
                })}


            </div>
        </section>
    );
};

export default About;