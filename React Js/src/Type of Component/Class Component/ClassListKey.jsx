import React, { Component } from 'react';

class ClassListKey extends Component {
    render() {
        let obj = {'25':'twentyfive','35':'thirtyfive','12':'twelve','5':'five','8':'eight'}
        // let printData = arr.forEach(element => {
        //    console.log(element);
        //    return <li></li> 
        // });
        // let printData = arr.map(() =>{
        //     return <li></li>
        // })
       let printintem = Object.entries(obj).map(([data,key],index)=>{
        console.log(data);
        return <li key={index}>{data+':'+key}</li>
       })
        return (
            <div>
                {/* {arr.map()} */}
                {printintem}
            </div>
        );
    }
}

export default ClassListKey;