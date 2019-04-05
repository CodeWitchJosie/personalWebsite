import * as React from 'react';

const Divider = () => {
  return (
    <svg className='divider' viewBox='-200 -15 400 30' xmlns='http://www.w3.org/2000/svg'>
      <polyline points='0,12 5,0 0,-12 -5,0 0,12' stroke-linejoin='round' />
      <polyline points='10,0 13.5,7.5 17, 0 13.5,-7.5 10,0' stroke-linejoin='round' />
      <polyline points='-10,0 -13.5,7.5 -17, 0 -13.5,-7.5 -10,0' stroke-linejoin='round' />
      <line x1='25' y1='0' x2='1750' y2='0' stroke-linecap='round' />
      <line x1='-25' y1='0' x2='-175' y2='0' stroke-linecap='round' />
    </svg>
  );
};
export default Divider;
