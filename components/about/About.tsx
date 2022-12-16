import { useState, useEffect } from 'react';
import Image from 'next/image';
import SectionHeading from '../section-heading/SectionHeading';
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
        style={{ transform: `translateX(-${scrollY * 2}px)` }}
        className={styles.wavetop}
      ></div>
      <section className={styles.bg}>
        <Wrapper>
          <div className={styles.sectionContainer}>
            <SectionHeading sectionName='From teaching to coding' />
            <p className={styles.text}>
              After 5 years in the educational field and a bachelor&apos; degree
              in language and literature, I changed my career to use my
              creativity and build things that have a positive impact in
              people&apos;s lives with innovative businesses.
            </p>
            <Image
              src='/images/plant.png'
              alt='Hand draing of a branch of a plant'
              width={640}
              height={730}
              className={styles.aboutImg}
            />
          </div>
        </Wrapper>
      </section>
      <div
        style={{ transform: `translateX(-${scrollY}px)` }}
        className={styles.wavebottom}
      ></div>
    </>
  );
};

export default About;
