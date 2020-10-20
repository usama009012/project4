import React from "react";
const ButtonSuccess=(props)=>{
    return(
    <button className={props.buttonColor} type={props.type} onClick={props.onClick}>{props.title}</button>
    );
}
export default ButtonSuccess;