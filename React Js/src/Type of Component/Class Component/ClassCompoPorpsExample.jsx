import React, { Component } from 'react';
// import React from 'react';
import CustomCard from './CustomCard';

class ClassCompoPorpsExample extends Component {
    render() {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                        <CustomCard title='card 1'/>       
                        </div>
                        <div className="col-4">
                        <CustomCard title='card 2'/>       
                        </div>
                        <div className="col-4">
                        <CustomCard title='card 3'/>       
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default ClassCompoPorpsExample;