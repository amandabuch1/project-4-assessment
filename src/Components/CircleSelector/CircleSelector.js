import React, { Component } from 'react';
import './CircleSelector.css';

const CircleSelector = props => {

    const handleChange = event => {
        props.handleSelect(event.target.value)
      }

    if (props.selected)
        return(
            <div className='CircleSelector' >

                <button 
                    className={props.selected === "one" ? "selected" : ""} 
                    value="one" 
                    onClick={handleChange}>{props.selected === "one" ? "Circle 1 Selected" : "Select Circle 1" }
                </button>

                <button 
                    className={props.selected === "two" ? "selected" : ""} 
                    value="two" 
                    onClick={handleChange}>{props.selected === "two" ? "Circle 2 Selected" : "Select Circle 2" }
                </button>

                <button 
                    className={props.selected === "three" ? "selected" : ""} 
                    value="three" 
                    onClick={handleChange}>{props.selected === "three" ? "Circle 3 Selected" : "Select Circle 3" }
                </button>

                <button 
                    className={props.selected === "four" ? "selected" : ""} 
                    value="four"
                    onClick={handleChange}>{props.selected === "four" ? "Circle 4 Selected" : "Select Circle 4" }
                </button>

            </div>
        );
}

export default CircleSelector