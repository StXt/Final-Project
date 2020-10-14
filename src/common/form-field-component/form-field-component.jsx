import React from 'react';

function FormField(props) {
  return (
    <label>
      <span>{props.showedName}</span>
      <input type={props.type} name={props.name} id={props.id} placeholder={props.placeholder} />
    </label>
  );
}

export default FormField;