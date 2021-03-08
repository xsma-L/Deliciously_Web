import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { ModalProvider } from 'react-simple-hook-modal';

import Popup from './Components/Popup';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';

import './App.css';

function App() {

  const [data, setData] = useState([]);

  // id = l'id de chaque resto enregistré
  const [id, setId] = useState(0);

  // cible = Login || Register || Ajout de resto
  const [cible, setCible] = useState(false)

  // luncher permet de lancer le modal
  const[luncher, setLuncher] = useState(0)

  // buttonStyl & popuStyle = affichage des boutton(resto) & popup
  const [buttonStyle, setButtonStyle] = useState({ display: "flex" })

  const [popupStyle, setPopupStyle] = useState({display: "none"})

  const [token, setToken] = useState(localStorage.getItem('token'))

  const [connect, setConnect] = useState(false)


  useEffect(() => {
    const fetchData = async () => {
      // recuperation des resto
      await axios({
        method: 'GET',
        url: 'http://localhost:3001/api/restaurants'
      })
      .then(res => {
          setData(res.data.data);
      })
      .catch(err => {
        console.log(err);
      });
   
    }
    fetchData();
  }, []);

  useEffect(() => {
    console.log('oui')
    let tok = localStorage.getItem('token')
    if(tok) {
      setConnect(true)
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    alert('Veuillez recharger la page :/');
    setConnect(false)
  }

  // gere affichage du popup
  const displayPopup = (id) => {
    setId(id)
    setButtonStyle({ display: "none" })
    setPopupStyle({ display: "block" }) 
  }

  // callback envoyé a popup (gère la fermeture)
  const handleClose = () => {
    setButtonStyle({ display: "flex" })
    setPopupStyle({ display: "none" })
  }

  //Calback du modal (on retrouve luncher & cible)
  const showModal = (modalCible) => {
    // set le luncher et le contenu du modal
    setLuncher(luncher +1)
    setCible(modalCible)
  }

  

  const Button = data.map((button) =>
        <div key={button._id}>
            <button className="buttons" onClick={ () => displayPopup(button._id) }>{button.name}</button>
        </div>
      );


  return (
    <div className="App">
      <Navbar setup={  showModal } connection={ connect } logout={ logOut }/>
      { token ?
        <section id="wrapper-container">
          <div id="buttons-wrapper" style={ buttonStyle} >
          { Button }
          </div>
        </section> : ""
      }
      <Popup id={ id } active={ popupStyle } close={ handleClose } />
      { cible ? 
        <ModalProvider backdropClassName='ici'>
          <Modal data={ cible } luncher={ luncher } />
        </ModalProvider>
        : ""  
      }
    </div>
  );
}

export default App;
