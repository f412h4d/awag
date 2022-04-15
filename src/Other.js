import React, { useRef } from 'react';
import './App.css';
import { MemoAnimatedIcon } from './components/animated-icon';
import arrow from './images/arrow-right.svg';

function Other({ title1, title2, title3, subtitle, animation }) {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);

  return (
    <>
      <div className='hero visable other-margin' ref={(el) => (app = el)}>
        <div className='container'>
          <div className='hero-inner'>
            <div className='hero-content'>
              <div className='hero-content-inner' ref={(el) => (content = el)}>
                <h1>
                  <div className='hero-content-line'>
                    <div className='hero-content-line-inner'>{title1}</div>
                  </div>
                  <div className='hero-content-line'>
                    <div className='hero-content-line-inner'>{title2}</div>
                  </div>
                  <div className='hero-content-line'>
                    <div className='hero-content-line-inner'>{title3}</div>
                  </div>
                </h1>
                <p>{subtitle}</p>

                <div className='btn-row'>
                  <button className='explore-button'>
                    Explore
                    <div className='arrow-icon'>
                      <img src={arrow} alt='row' />
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div className='hero-images'>
              <div ref={(el) => (images = el)} className='hero-images-inner'>
                <div className='hero-image girl'>
                  <MemoAnimatedIcon
                    loop={true}
                    iconWidth={'500px'}
                    iconHeight={'500px'}
                    animationData={animation}
                  ></MemoAnimatedIcon>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Other;
