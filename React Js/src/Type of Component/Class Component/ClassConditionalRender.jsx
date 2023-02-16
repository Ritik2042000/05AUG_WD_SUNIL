import React, { Component } from 'react';

class ClassConditionalRender extends Component {
   constructor(){
        super();
        this.state={
            count:1,
            status:true,
        }
   }
   
    render() {
        let HTMLData = ""
        if (this.state.status) {
            HTMLData=<h3>Welcome</h3>
        } else {
            HTMLData=<h3>Good Bye</h3>
            
        }
        return (
            <>
            {JSON.stringify(this.state.status)}
            <button onClick={()=>{
                this.setState({status:!this.state.status})
            }}>Click</button>    
            {HTMLData}
            {(this.state.status)? <h3>Good to see u</h3>:<h3>See u Agian</h3>}
            </>
        );
    }
}

export default ClassConditionalRender;