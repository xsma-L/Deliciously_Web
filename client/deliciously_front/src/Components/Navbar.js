import React from 'react'

const Navbar = (props) => {
    // props.setup = callback de App.js
    return (
        <div  id="navbar">
            <div id="logo-wrapper">
                <span>Delicisously</span>
            </div>
                { localStorage.getItem('token') ?
                    <div id="login-wrapper">
                        <button className="register-button" onClick={ () => { props.setup('newResto') }}>Ajouter un restaurant</button>
                        <button onClick={ () => { props.logout() }}>Déconnexion</button>
                    </div> 
                    : 
                    <div id="login-wrapper">
                        <button onClick={ () => { props.setup('login') }}>Connexion</button>
                        <button className="register-button" onClick={ () => { props.setup('register') }}>S'inscrire</button>
                    </div>
                }
        </div>
    )
}

export default Navbar
