import SectionHeading from '../section-heading/SectionHeading';
import plant from '../../public/images/plant.svg';
import Wrapper from '../Wrapper';

import styles from './About.module.css';

import { motion, useScroll, useSpring } from 'framer-motion';

const About = () => {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* <motion.div style={{ translateX: scrollYProgress }}>
        <div className={styles.wave} />
      </motion.div> */}

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
    </>
  );
};

export default About;
