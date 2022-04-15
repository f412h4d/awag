import { Power3, TimelineLite, TweenMax } from 'gsap';
import React, { useEffect, useRef } from 'react';
import './App.css';
import { MemoAnimatedIcon } from './components/animated-icon';
import arrow from './images/arrow-right.svg';

function Page({ title1, title2, title3, subtitle, animation }) {
  let app = useRef(null);
  let images = useRef(null);
  let content = useRef(null);
  let tl = new TimelineLite({ delay: 0.8 });

  useEffect(() => {
    // Images Vars
    const girlImage = images.firstElementChild; // or children[0]

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //Remove initial flash
    TweenMax.to(app, 0, { css: { visibility: 'visible' } });

    //Images Animation
    tl.from(girlImage, 1.2, { y: 1280, ease: Power3.easeOut }, 'Start').from(
      girlImage.firstElementChild,
      2,
      { scale: 1.6, ease: Power3.easeOut },
      0.2,
    );

    //Content Animation
    tl.staggerFrom(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      1,
      {
        y: 44,
        ease: Power3.easeOut,
        delay: 0.8,
      },
      0.15,
      'Start',
    )
      .from(contentP, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.4)
      .from(contentButton, 1, { y: 20, opacity: 0, ease: Power3.easeOut }, 1.6);
  }, [tl]);

  return (
    <>
      <div className='hero' ref={(el) => (app = el)}>
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

export default Page;
