import starIcon from '../public/icons/star.svg';

const SectionHeading = ({ sectionName }: { sectionName: string }) => {
  return (
    <div>
      <img src={starIcon.src} alt='section icon' />
      <h2>{sectionName}</h2>
    </div>
  );
};

export default SectionHeading;
