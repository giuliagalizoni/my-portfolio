import starIcon from '../../public/icons/star.svg';

import styles from './SectionHeading.module.css';

const SectionHeading = ({ sectionName }: { sectionName: string }) => {
  return (
    <div className={styles.heading}>
      <img src={starIcon.src} alt='section icon' />
      <h2>{sectionName}</h2>
    </div>
  );
};

export default SectionHeading;
