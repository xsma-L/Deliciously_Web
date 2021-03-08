import React, { useState, useEffect } from "react";

import axios from 'axios'

function AddRestaurant (props) {

  // States des data à envoyer
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");


  //array qui contient les nom des photos
  const pictures = ['bouillon.jpeg', 'broz-1.jpeg', 'broz-2.jpeg', 'broz-3.jpeg','kebab.jpeg', 'sushi.jpeg'];

  // Modification des states à chaque modification des inputs
  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleTypeChange = (e) => {
    setType(e.target.value);
  }

  const handleAdressChange = (e) => {
    setAdress(e.target.value);
  }

  const handleCityChange = (e) => {
    setCity(e.target.value);
  }

    const handleSubmit = async (e) => {
        e.preventDefault();

        //  choix random des photos et envoi des data
        var imageName = pictures[Math.floor(Math.random() * pictures.length)];

        const formData = {
            name: name,
            type: type,
            adress: adress,
            city: city,
            picture: imageName,
        }

        await axios({
          method: 'POST',
          url: 'http://localhost:3001/api/restaurant',
          data: formData
        })
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
        })
    }

    return (
      <div id="inscription">
        <form onSubmit={ handleSubmit }>

          <div className="name">
            <label>Nom du restaurant</label>
            <input 
              name="name"
              type="text"
              value={ name }
              onChange={ handleNameChange }
            />
          </div>

          <div className="type">
            <label>Le type du restaurant</label>
            <input
              name="type"
              type="text"
              value={ type }
              onChange= { handleTypeChange }
            />
          </div> 

          <div className="adress">
            <label>Son adresse ?</label>
            <input
              name="adress"
              type="text"
              value= { adress }
              onChange= { handleAdressChange } />
          </div>

          <div className="city">
            <label>Sa ville ?</label>
            <input
              name="city"
              type="text"
              value= { city }
              onChange= { handleCityChange } />
          </div>

        <input className="submit" type="submit" value="S'inscrire" />
        </form>      
      </div>
    )
}

export default AddRestaurant