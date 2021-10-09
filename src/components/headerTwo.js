import React from "react";

function HeaderTwo(props) {
    const[name, setName ] = React.useState("Nishu") 

    return(
        <div>I am {name}{props.size}</div>
        )
}

export default HeaderTwo;