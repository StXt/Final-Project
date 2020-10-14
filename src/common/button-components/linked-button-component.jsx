import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import Button from './button-component';

export default function LinkedButton(props) {
  console.log(useRouteMatch());
  let match = `${props.to}`;
  console.log('match', match)
  return (
    <Link to={match}>
      <Button name={props.name}/>
    </Link>
  );
}