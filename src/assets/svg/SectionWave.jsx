import React from 'react';

const TopSection = (props) => (
  <svg width='100%' viewBox='0 0 760 28' version='1.1' {...props}>
    <g id='Page-1' stroke='none' stroke-width='1' fill={props.color} fill-rule='evenodd'>
      <path
        d='M0,0 C168.223958,9.33333333 294.890625,14 380,14 C465.109375,14 591.776042,9.33333333 760,0 L760,28 L0,28 L0,0 Z'
        id='Rectangle'
        fill={props.color}
      />
    </g>
  </svg>
);

export default TopSection;
