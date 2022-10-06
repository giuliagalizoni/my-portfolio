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

  console.log(scrollY);

  return (
    <>
      <div
        style={{ transform: `translateX(-${scrollY}px)` }}
        className={styles.wavetop}
      >
        <img src='/images/Hero-Top.svg' />
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
        <img src='/images/Hero-Bottom.svg' />
      </div>
    </>
  );
};

export default About;
