import starIcon from '../../public/icons/star.svg';

import styles from './SectionHeading.module.css';

const SectionHeading = ({ sectionName }: { sectionName: string }) => {
  return (
    <div className={styles.heading}>
      {/* <img src={starIcon.src} alt='section icon' className={styles.rotating} /> */}
      <svg
        className={styles.rotating}
        width='48'
        height='48'
        viewBox='0 0 48 48'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <path d='M14.4802 47.64L24.0096 35.48L33.6645 47.64L32.2852 32.152L47.3317 33.944L35.9215 23.832L47.3317 13.592L32.2852 15.512L33.6645 0.0239868L24.0096 12.056L14.4802 0.0239868L15.734 15.512L0.6875 13.592L12.0978 23.832L0.6875 33.944L15.734 32.152L14.4802 47.64Z' />
      </svg>
      <h2>{sectionName}</h2>
    </div>
  );
};

export default SectionHeading;
