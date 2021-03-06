import React, { useState }  from 'react'

import Popup from './Components/Popup';

import './App.css';

function App() {

  const [id, setId] = useState(0);

  const [buttonStyle, setButtonStyle] = useState({ display: "flex" })

  const [popupStyle, setPopupStyle] = useState({display: "none"});


  const displayPopup = (id) => {
    setId(id)
    setButtonStyle({ display: "none" })
    setPopupStyle({ display: "block" }) 
  }

  const handleClose = () => {
    setButtonStyle({ display: "flex" })
    setPopupStyle({ display: "none" })
  } 

  return (
    <div className="App">
      <section id="wrapper-container" style={ buttonStyle }>
        <div id="buttons-wrapper">
          <div id="button-1">
            <button className="buttons" onClick={ () => displayPopup(1) }>Dumbo</button>
          </div>
          <div id="button-2">
            <button className="buttons" onClick={ () => displayPopup(2) }>Bouillon 47</button>
          </div>
        </div>
      </section>
      <Popup id={ id } active={ popupStyle } close={ handleClose }/>
    </div>
  );
}

export default App;
