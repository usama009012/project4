import React from "react";
const Button = (props) => {
  let btnType = "";
  let animationType = "";

  if (props.color === "success") {
    btnType = "btn btn-success";
  }
  else if (props.color === "danger") {
    btnType = "btn btn-danger";
  } 
  else if (props.color === "info") {
    btnType = "btn btn-info";
  } 
  else if (props.color === "secondary") {
    btnType = "btn btn-secondary";
  } 
  else if (props.color === "primary") {
    btnType = "btn btn-primary";
  } 
  else if (props.color === "warning") {
    btnType = "btn btn-warning";
  }   
  else {
    btnType = "btn btn-primary";
  }
  //condition for animation
  if (props.loading == true) {
    animationType = "spinner-border spinner-border-sm mr-2";
  }

  return (
    <div>
      <button className={btnType} disabled={props.disabled}>
        <span className={animationType}></span>
        {props.title}
      </button>
    </div>
  );
};
export default Button;
