import React,{Component} from 'react';

export default class Event extends Component{
    constructor(){
        super();
        this.state={
            data:'hello krishna how are u'
        }
    }
    render(){
        return (
            <div>
            <h1>{this.state.data}</h1>
            <button onClick={()=>{this.setState({data:'is best'})}} >submit</button>
            </div>
        )
    }
}
