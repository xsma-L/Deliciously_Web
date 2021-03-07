import React, { useState, useEffect }  from 'react'
import axios from 'axios'

import Popup from './Components/Popup';

import './App.css';

function App() {

  const [data, setData] = useState([]);

  const [id, setId] = useState(0);

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


  const Button = data.map((button) =>
        <div key={button._id}>
            <button className="buttons" onClick={ () => displayPopup(button._id) }>{button.name}</button>
        </div>
      );


  return (
    <div className="App">
      <section id="wrapper-container" style={ buttonStyle }>
        <div id="buttons-wrapper">
         { Button }
        </div>
      </section>
      <Popup id={ id } active={ popupStyle } close={ handleClose } />
    </div>
  );
}

export default App;
