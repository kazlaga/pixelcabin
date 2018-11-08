import React from 'react';
import './block-footer.scss';

const BlockFooter = ({ data }) => {
  return (
    <div className="block-footer">
        <h2 className="block-footer__title">
          {data.title}
        </h2>
        <div className="block-footer__items">
          {data.items.map(item =>
            <div className="block-footer__item">
              {item.text}
            </div>  
          )}
        </div>
    </div>
  );
};

export default BlockFooter;