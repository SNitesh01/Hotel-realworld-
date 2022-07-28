import React from 'react';
import { faEarth } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='w-screen h-12 flex justify-between px-8 items-center bg-white'>
      <span>
        © 2022 localhost. Designed with love.
      </span>
      <span>
        <FontAwesomeIcon icon={faEarth} />
        <span> English</span>
      </span>
    </div>
  )
}

export default Footer