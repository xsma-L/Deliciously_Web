import React, { useState } from "react";
import axios from 'axios'




function Login (props) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    }

    const handleConnect = async (e) => {
        e.preventDefault();

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
          console.log(res.data)
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