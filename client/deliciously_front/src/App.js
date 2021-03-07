import React, { useState, useEffect }  from 'react'
import axios from 'axios'
import { ModalProvider } from 'react-simple-hook-modal';

import Popup from './Components/Popup';
import Navbar from './Components/Navbar';
import Modal from './Components/Modal';

import './App.css';

function App() {

  const [data, setData] = useState([]);

  const [id, setId] = useState(0);

  const [cible, setCible] = useState(false)

  const[luncher, setLuncher] = useState(0)

  const [buttonStyle, setButtonStyle] = useState({ display: "flex" })

  const [popupStyle, setPopupStyle] = useState({display: "none"});


  useEffect(() => {
    const fetchData = async () => {
  
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

  const displayPopup = (id) => {
    setId(id)
    setButtonStyle({ display: "none" })
    setPopupStyle({ display: "block" }) 
  }

  const handleClose = () => {
    setButtonStyle({ display: "flex" })
    setPopupStyle({ display: "none" })
  }

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
      <Navbar setup={  showModal }/>
      <section id="wrapper-container">
        <div id="buttons-wrapper" style={ buttonStyle} >
         { Button }
        </div>
      </section>
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
