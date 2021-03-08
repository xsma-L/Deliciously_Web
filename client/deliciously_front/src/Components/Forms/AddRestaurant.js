import React, { useState, useEffect } from "react";

import axios from 'axios'
import MultiSelect from "react-multi-select-component";





function AddRestaurant (props) {

  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [picture, setPicture] = useState([]);
  const [info, setInfo] = useState([]);

  useEffect(() => {
        console.log(info)
    }, [info]);


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

  const handlePictureChange = (e) => {
    // setPicture(e.target.files);
    console.log(e.target.files[0])
  }


    const handleSubmit = async (e) => {
        e.preventDefault();

        // const formData = {
        //   username: username,
        //   email: email,
        //   password: password
        // }

        // await axios({
        //   method: 'POST',
        //   url: 'http://localhost:3001/api/user',
        //   data: formData
        // })
        // .then(res => {
        //   if (res.data.success) {
        //     console.log('connect')
        //   }
        // })
        // .catch(err => {
        //   console.log(err)
        // })
    }

    const options = [
        { label: "Sur le pouce", value: "sur-le-pouce" }, 
        { label: "Comfort food", value: "Comfort food" },
        { label: "Carnivore", value: "Carnivore" },
        { label: "Moins de 15€", value: "Moins de 15€" },
        { label: "France", value: "France" },
        { label: "Tradi", value :"Tradi" },
        { label: "Cuisine locale", value: "Cuisine locale" },
        { label: "Entre 30€ et 150€", value: "Entre 30€ et 150€" }
    ] 


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
              placeholder="Ex: oui-oui" 
            />
          </div>

          <div className="type">
            <label>Le type du restaurant</label>
            <input
              name="type"
              type="text"
              value={ type }
              onChange= { handleTypeChange }
              placeholder="Ex: oui-oui@non.com" 
            />
          </div> 

          <div className="adress">
            <label>Son adresse ?</label>
            <input
              name="adress"
              type="text"
              value= { adress }
              onChange= { handleAdressChange }
              placeholder="Ex: OuimaisNon" />
          </div>

          <div className="city">
            <label>Sa ville ?</label>
            <input
              name="city"
              type="text"
              value= { city }
              onChange= { handleCityChange }
              placeholder="Ex: OuimaisNon" />
          </div>

          <div className="city">
            <label>Une petite photo ?</label>
            <input
              name="picture"
              type="file"
              value= { picture }
              onChange= { handlePictureChange } />
          </div>
        <input className="submit" type="submit" value="S'inscrire" />
        </form>      
      </div>
    )
}

export default AddRestaurant