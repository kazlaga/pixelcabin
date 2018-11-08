import React from 'react';
import './block-cta.scss';

const BlockCTA = ({ data }) => {
  return (
    <div className="block-cta">
      <h2 className="block-cta__title">
        {data.title}
      </h2>
      <div className="block-cta__container">
        <a href="https://github.com/kazlaga/pixelcabin" className="block-cta__button">
          {data.buttonText}
        </a>
      </div>
    </div>
  );
};

export default BlockCTA;