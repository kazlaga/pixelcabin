import React    from 'react';
import Timeline from './timeline/Timeline';
import CTA      from './cta/BlockCTA';
import Footer   from './footer/BlockFooter';
import Reveal from 'react-reveal/Reveal';

import './block.scss';

const Block = (props) => {
  return(
    <div id={props.id} className={`block block--${props.theme}`}>

      <div className="block__left">
        <h1 className="block__title">
          {props.title}
        </h1>
        <Reveal>
          <div className="block__image"
            style={{backgroundImage: `url(${props.image})`}}>
          </div>
        </Reveal>
      </div>

      <div className={"block__right"}>
        <h1 className="block__title">
          {props.title}
        </h1>
        {props.description &&
          <p className="block__description">
            {props.description}
          </p>
        }
        {props.timeline &&
          <Timeline
            elements={props.timeline}
          />
        }
        {props.cta &&
          <CTA
            data={props.cta}
          />
        }
        {props.footer &&
          <Footer
            data={props.footer}
          />
        }
      </div>
    </div>
  )
};

export default Block;