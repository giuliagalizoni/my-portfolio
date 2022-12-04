import { useState, useEffect } from 'react';

import SectionHeading from '../section-heading/SectionHeading';
import plant from '../../public/images/plant.svg';
import Wrapper from '../Wrapper';

import styles from './About.module.css';

const About = () => {
  const [scrollY, setscrollY] = useState(0);

  const handleScroll = () => {
    setscrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <>
      <div
        style={{ transform: `translateX(-${scrollY}px)` }}
        className={styles.wavetop}
      >
        <svg
          className={styles.svgWave}
          width='5000'
          height='191'
          viewBox='0 0 5000 191'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_60_1583)'>
            <path d='M0 94.7562C63.5539 32.8101 210.654 -61.3479 290.62 57.5885C390.579 206.259 684.902 69.5353 923.692 77.4998C1162.48 85.4643 1340.19 256.701 1497.53 157.145C1623.4 77.4998 1726.5 101.32 1790 129.269C1865.5 162.5 2000.8 208.1 2184 162.5C2413 105.5 2489 -50.5002 2713 95.4998C2937 241.5 3243.84 103.09 3399 132.5C3552 161.5 3641.97 149.78 3747 118.5C4113 9.49977 4143 68.4998 4433 141.5C4723 214.5 4932.02 158.973 5000.14 94.625C5083.02 16.3274 5115.67 200.166 5109 308.5L1765 281.5L0 190.5V94.7562Z' />
          </g>
          <defs>
            <clipPath id='clip0_60_1583'>
              <rect
                width='5000'
                height='190'
                fill='white'
                transform='translate(0 0.5)'
              />
            </clipPath>
          </defs>
        </svg>
        {/* <img src='/images/Hero-Top.svg' /> */}
      </div>
      <section className={styles.bg}>
        <Wrapper>
          <div className={styles.sectionContainer}>
            <SectionHeading sectionName='From teaching to coding' />
            <p className={styles.text}>
              After 5 years in the educational field and a bachelor’s degree in
              language and literature, I changed my career to use my creativity
              and build things that have a positive impact in people's lives
              with innovative businesses.
            </p>
            <img src={plant.src} alt='plant' className={styles.img} />
          </div>
        </Wrapper>
      </section>
      <div
        style={{ transform: `translateX(-${scrollY * 2}px)` }}
        className={styles.wavebottom}
      >
        <svg
          className={styles.svgWave}
          width='5000'
          height='140'
          viewBox='0 0 5000 140'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g clip-path='url(#clip0_60_1581)'>
            <path d='M673.12 80.2252C436.53 194.195 141.748 97.1932 0 49.7056V-6.10352e-05L1790 0H5268.84C5259.7 64.6956 5193.67 111.922 5000.2 49.7695C4631.69 -68.6193 4285 184 4013 120C3741 55.9999 3687 67.9999 3543 91.9999C3399 116 3301 49.7056 3061 109.85C2821 169.995 2801 132 2663 73.1241C2525 14.2483 2499 132 2413 73.1241C2327 14.2483 2323 109.85 2163 73.1241C2035 43.7433 1861 85.3661 1790 109.85C1718.82 131.622 1617.11 92.175 1536.67 73.1241C1380.11 36.0447 1349.18 20.4324 1194.55 49.7056C1039.91 78.9788 968.857 -62.2377 673.12 80.2252Z' />
          </g>
          <defs>
            <clipPath id='clip0_60_1581'>
              <rect width='5000' height='140' fill='white' />
            </clipPath>
          </defs>
        </svg>
        {/* <img src='/images/Hero-Bottom.svg' /> */}
      </div>
    </>
  );
};

export default About;
