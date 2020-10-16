import React from 'react';
import './form-field-component.css';

function FormField(props) {
  return (
    <label className="form-field">
      <span className="form-field__name">{props.showedName}</span>
      <input 
        className="form-field__input"
        id={props.id}
        name={props.name}
        onChange={(e) => props.handleChange(e)}
        placeholder={props.placeholder} 
        type={props.type}
        value={props.value}
        />
    </label>
  );
}

export default FormField;