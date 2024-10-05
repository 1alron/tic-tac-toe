import React from 'react';
import './Square.css';

const Square = ({text, onClick}) => {
  return (   
    <button className='square' onClick={onClick}>
      {text}
    </button>
  );
}

export default Square;
