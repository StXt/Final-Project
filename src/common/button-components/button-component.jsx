import React from 'react';
import './button-component.css';

export default function Button(props) {
  return (
    <button className="btn">{props.name}</button>
  );
}