import React from 'react';
import './form-field-component.css';

function FormField(props) {
  return (
    <label className="form-field">
      <span className="form-field__name">{props.showedName}</span>
      <input 
        className="form-field__input"
        type={props.type}
        name={props.name}
        id={props.id}
        placeholder={props.placeholder} />
    </label>
  );
}

export default FormField;