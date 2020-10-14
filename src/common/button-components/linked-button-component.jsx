import React from 'react';
import { Link } from 'react-router-dom';
import Button from './button-component';

export default function LinkedButton(props) {
  return (
    <Link to={props.to}>
      <Button name={props.name}/>
    </Link>
  );
}