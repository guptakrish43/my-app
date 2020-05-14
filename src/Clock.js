import React, { Component } from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentTIme: new Date().toLocaleString()
        }
    }

    render(){
        return (
            <h1>Time IS :{this.state.currentTime}</h1>
        );
    }
}

export default Clock;