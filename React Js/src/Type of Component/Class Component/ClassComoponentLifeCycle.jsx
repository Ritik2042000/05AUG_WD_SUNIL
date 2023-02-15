import React, { Component } from 'react';

class ClassComoponentLifeCycle extends Component {
    constructor(props) {
        console.log('welocome constructor called');
        super(props);
        this.state={
            name:'Mohan',
            surname:'patel'
        }
    }

    // componentWillMount() {

    // }

    componentDidMount() {
        console.log('componentDidMount');
    }

    // componentWillReceiveProps(nextProps) {

    // }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps,nextState);
        return true;
    }

    // componentWillUpdate(nextProps, nextState) {

    // }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevProps,prevState);
    }

    componentWillUnmount() {
        console.log('please come back');
    }

    click = () =>{
        this.setState({
            name:'soham',
            surname:'shah'
        })
    }
    render()
    {
        console.log('render called')
        return (
            <div>
                {this.state.name}
                {this.state.surname}
                <br />
                <button className="btn" onClick={this.click}>Click To Life Cycle of Component</button>
            </div>
        );
    }
}



export default ClassComoponentLifeCycle;