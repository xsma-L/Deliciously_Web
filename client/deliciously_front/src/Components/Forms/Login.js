import React, { useState } from "react";
import axios from 'axios'




function Login (props) {
    // States des data à envoyer
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  // Modification des states à chaque modification des inputs

  const handleEmailChange = (e) => {
      setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
  setPassword(e.target.value);
  }

  const handleConnect = async (e) => {
    e.preventDefault();

    //  Envoi des data
    
    const formData = {
      email: email,
      password: password
    }

    await axios({
    method: 'POST',
    url: 'http://localhost:3001/api/user/connect',
    data: formData
    })
    .then(res => { 
      if (res.data.succes === true){
        // sauvegarde du token dans le local storage afin de garder la session ouverte
        localStorage.setItem('token', res.data.token)
        alert('veuillez recharger la page :/')
      }else{
        alert('Veuillez-verifiez votre mail ou mot de passe')
      }
    })
    .catch(err => {
    console.log(err)
    })
  }

  return (
    <div id="inscription">
      <form onSubmit={ handleConnect }>
        <div className="email">
          <label>Email</label>
          <input
            name="email"
            type="email"
            value={ email }
            onChange= { handleEmailChange }
            placeholder="Ex: oui-oui@non.com" 
          />
        </div> 
        <div className="password">
          <label>Mot de passe</label>
          <input
            suggested="current-password"
            name="password"
            type="password"
            value= { password }
            onChange= { handlePasswordChange }
            placeholder="Ex: OuimaisNon" />
        </div>

        <input className="submit" type="submit" value="Se connecter" />
      </form>      
    </div>
  )
}

export default Login