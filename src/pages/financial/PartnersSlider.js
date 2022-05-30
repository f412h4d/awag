import React from 'react';
import euronet from '../../images/partners/euronet.png';
import iccash from '../../images/partners/iccash.jpeg';
import kurant from '../../images/partners/kurant.png';
import moneysend from '../../images/partners/moneysend.png';
import moneyGram from '../../images/partners/money_gram.png';
import remit from '../../images/partners/remit.png';
import ria from '../../images/partners/ria.png';
import wu from '../../images/partners/wu.png';
import styles from './Partner.module.scss';

// TODO create better alt tags
export const PartnersSlider = () => {
  const partners = [
    { src: euronet, alt: 'euronet' },
    { src: iccash, alt: 'iccash' },
    { src: kurant, alt: 'kurant' },
    { src: moneyGram, alt: 'Money Gram' },
    { src: moneysend, alt: 'Money Send' },
    { src: remit, alt: 'remit' },
    { src: ria, alt: 'ria' },
    { src: wu, alt: 'wu' },
  ];

  return (
    <div className={styles['partners-container']}>
      <div className={styles.slider}>
        <div className={styles['slide-track']}>
          {partners.map(({ src, alt }, index) => (
            <div className={styles['slide']} key={index}>
              <img src={src} height='100' width='250' alt={alt} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
