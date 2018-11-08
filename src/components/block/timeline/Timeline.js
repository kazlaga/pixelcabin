import React from 'react';
import './timeline.scss';

const Timeline = ({ elements }) => {
  return (
    <div className="timeline">
      {elements.map(element => (
        <div className="timeline__element">
          <div className="timeline__period">
            {element.period}
          </div>
          <div className="timeline__right">
            <h3 className="timeline__title">
              {element.title}
            </h3>
            <h4 className="timeline__subtitle">
              {element.subtitle}
            </h4>
            <p className="timeline__description">
              {element.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;