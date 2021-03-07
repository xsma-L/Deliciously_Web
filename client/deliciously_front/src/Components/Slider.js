import React, { useState, useEffect } from 'react'

import { Carousel } from "react-responsive-carousel";


const Slider = (props) => {

    let data = props.picture
    let Images = null ;
    
    // useEffect(() => {
    //     if(data) {
    //          Images = 
    //         );
    //     }
    // }, [data]);

    return (
        <div className="oui">
           <img alt="broz" src='images/broz-1.jpeg' />
           {/* {data ? 
               data.map((item) =>
                <div key={item}>
                    <img alt={item} src={`images/${item}`} />
                    <p>okokok</p>
                </div>)
                : ""
            } */}
        </div>
    )
}


export default Slider