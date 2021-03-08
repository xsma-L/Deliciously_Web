import React from 'react'

const Navbar = (props) => {
    return (
        <div  id="navbar">
            <div id="logo-wrapper">
                <span>Delicisously</span>
            </div>
            <div id="login-wrapper">
                <button onClick={ () => { props.setup('login') }}>Se connecter</button>
                <button className="register-button" onClick={ () => { props.setup('register') }}>S'inscrire</button>
                <button className="register-button" onClick={ () => { props.setup('newResto') }}>Ajouter un restaurant</button>
            </div>
        </div>
    )
}

export default Navbar
