import React, { Component } from 'react';

class ClassComoponentUseStateExmple extends Component {
    constructor() {
        super()
        this.state = { data: "something" }
    }
    changsomthing = () => {
        console.log('hello');
        this.setState({
            data: "Do Something"
        })
    }
    render() {
        let a = 'Hello'
        return (
            <div>
                {a}
                <p>{this.state.data}</p>
                <button onClick={this.changsomthing} className='btn'>Click for Change</button>
            </div>
        );
    }
}

export default ClassComoponentUseStateExmple;