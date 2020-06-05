import React, { Component } from 'react';
import './Circles.css';


const Circles = props => {
    return(
        <div className="Circles">

            <div className={ props.selected === "one" ? "selected" : "" }> 
                1 
            </div>

            <div className={ props.selected === "two" ? "selected" : "" }>
                2
            </div>
            
            <div className={ props.selected === "three" ? "selected" : "" }>
                3
            </div>

            <div className={ props.selected === "four" ? "selected" : "" }>
                4
            </div>

        </div>
    );
}

export default Circles;