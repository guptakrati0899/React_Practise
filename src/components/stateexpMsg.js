import React from "react";

class Message extends React.Component {

    constructor(){
        super()
        this.state ={
            message : 'Welcome Message'
        }

    }

    changeMessage() {
        this.setState({
            message : "Thankyou"
        })
    }

    render() {
        return (
            <div>
        <h1>{this.state.message}</h1>
        <button onClick ={ () => this.changeMessage()}>Subscribe</button>
        </div>
        )
    }
}


export default Message;