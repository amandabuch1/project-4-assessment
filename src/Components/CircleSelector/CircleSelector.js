import React from "react";
import "./CircleSelector.css";

const Buttons = props => {

   
    return(

        <div>
            
                {/* {['A', 'B', 'C'].map(key => 
                    <button 
                    className={key === props.selectedButton ? '.CircleSelector button.selected ' : '.CircleSelector button'} 
                    type="button" style={{ width: '25%', border: "none" }} 
                    key={key} onClick={this.buttonSelected(key)}>{key}</button>
                )} */}
        </div>
        
        // <div className="CircleSelector">
        //     <input 
        //     type="Buttons"
        //     value={this.props.state.SelectedButon ? "Circle 1 Selected": "Select Circle 1"}

        //     >
           
        //     </input>
            
        // </div>
        
    )
}
export default Buttons;