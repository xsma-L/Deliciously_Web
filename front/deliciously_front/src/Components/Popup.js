import React, { useState }  from 'react'



const Popup = (props)  => {

    return (
        <div className="popup-wrapper" style={ props.active } >
            <div id="image-1">
                <span onClick={ props.close }>x</span>
                <img src="plats/bouillon.jpeg" alt="Bouillon-1" />
            </div>
            <div className="popup">
                <div className="name-type">
                    <span className="resto-name">Dumbo</span>
                    <span className="resto-type">Burgers</span>
                </div>
                <div className="resto-adress">
                    <span className="adress">64 rue Jea-Bapstiste pigalle, 75009</span>
                    <span className="city">Paris</span>
                </div>
                <div className="infos">
                    <div className="bulle-data">
                        <span className="icon">
                            <span className="icon-svg">
                            <img src="/icons/alarm.svg" alt="sur le pouce" />
                            </span>                             
                            <span className="icons-desc">Sur le pouce</span>
                        </span>
                        <span className="icon">
                            <span className="icon-svg">
                                <img src="/icons/burger.svg" alt="comfort food" />
                            </span>
                            <span className="icons-desc">Comfort food</span>
                        </span>
                        <span className="icon">
                            <span className="icon-svg">
                                <img src="/icons/meat.svg" alt="Carnivore" />
                            </span>
                            <span className="icons-desc">Carnivore</span>
                        </span>
                        <span className="icon">
                            <span className="icon-svg">
                                <img src="/icons/Moins-de-15.svg" />
                            </span>
                            <span className="icons-desc">Moins de 15 €</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Popup
