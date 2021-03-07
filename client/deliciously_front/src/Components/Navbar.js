import React from 'react'

const Navbar = (props) => {
    return (
        <div  id="navbar">
            <div id="logo-wrapper">
                <span>Delicisously</span>
            </div>
            <div id="login-wrapper">
                <button onClick={ () => { props.setup('connect') }}>Se connecter</button>
            </div>
        </div>
    )
}

export default Navbar
