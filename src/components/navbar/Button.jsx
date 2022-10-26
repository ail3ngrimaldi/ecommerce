import './Button.scss';
import React from 'react';

function Button(props) {
    return (
      <button className="standard__button" type={props.type} onSubmit={props.onSubmit}>
        {props.label}
        {props.icon}
      </button>
    );
  }
  
  export default Button;