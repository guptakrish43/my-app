import React,{Component} from 'react';
class Method extends Component{
    myFacebookLink(){
        return 'https://www.facebook.com/';
    }
    facebookUder(){
        return 'Krishna Gupta';
    }
    render(){
        return (
            <div>
                <p>My FACEBOOK ID IS:<a href={this.myFacebookLink()} >{this.facebookUder()}</a></p>
            </div>
        )
    }
}

export default Method;