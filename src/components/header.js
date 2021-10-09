import React from "react";

class Header extends React.Component{
    constructor(props) {
        super(props)
        this.state = {
            name : "Krati"
        }
    }
    render(){
        return (
        <div>Hello I am {this.state.name}{this.props.degree}</div>
        )
    }
}


export default Header;