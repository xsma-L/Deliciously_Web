import React, { useState, useEffect }  from 'react'

import axios from 'axios'

const Popup = (props)  => {
    
    let id = props.id;

    const [data, setData] = useState([]);

    // Récuperation des data du resto par l'id
    useEffect(() => {
        if(id !== 0) {
            const getData = async () => {
                await axios({
                    method: 'GET',
                    url: `http://localhost:3001/api/restaurant/${id}`
                })
                .then (res => {
                    setData(res.data.data);
                })
                .catch(err => {
                    console.log(err)
                });
            }   
            getData();
        }
    }, [id]);

    return (
        <div className="popup-wrapper" style={ props.active } >
        { data ?
            <>
            <div id="image-1">
                <div><span className="close-span" onClick={ props.close }>x</span></div>
                <div>
                    <img alt={ data.picture } src={ `images/${data.picture}` } />
                </div>
            </div>
            <div className="popup">
                <div className="name-type">
                    <span className="resto-name">{ data.name }</span>
                    <span className="resto-type">{ data.type }</span>
                </div>
                <div className="resto-adress">
                    <span className="adress">{data.adress}</span>
                    <span className="city">{data.city}</span>
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
            </> :
            <> 
            <div id="image-1">
                <div><span className="close-span" onClick={ props.close }>x</span></div>
                <div>
                    <img alt="image" src="images/kebab.png" />
                </div>
            </div>
            <div className="popup">
                <div className="name-type">
                    <span className="resto-name">CHI'CH</span>
                    <span className="resto-type">Kebab</span>
                </div>
                <div className="resto-adress">
                    <span className="adress"> 6 Rue du Père Guérin, 75013</span>
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
            </>
        }
        </div>
    );
};

export default Popup
