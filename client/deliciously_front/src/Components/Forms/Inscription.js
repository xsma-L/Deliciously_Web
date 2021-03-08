import React, { useState } from "react";
import axios from 'axios'




function Inscription (props) {

  // States des data à envoyer

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Modification des states à chaque modification des inputs

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    //  Envoi des data

    const formData = {
      username: username,
      email: email,
      password: password
    }

    await axios({
      method: 'POST',
      url: 'http://localhost:3001/api/user',
      data: formData
    })
    .then(res => {
      if (res.data.success) {
        alert('Vous pouvez vous connecter !')
      }
    })
    .catch(err => {
      alert('Verifiez les données que vous avez enter')
    })
}


    return (
      <div id="inscription">
        <form onSubmit={ handleSubmit }>
          <div className="name">
            <label>username</label>
            <input 
              name="username"
              type="text"
              value={ username }
              onChange={ handleUsernameChange }
              placeholder="Ex: oui-oui" 
            />
          </div>
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
              name="password"
              type="password"
              value= { password }
              onChange= { handlePasswordChange }
              placeholder="Ex: OuimaisNon" />
          </div>

          <input className="submit" type="submit" value="S'inscrire" />
        </form>      
      </div>
    )
}

export default Inscription
