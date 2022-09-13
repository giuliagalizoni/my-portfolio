import SectionHeading from './SectionHeading';
import plant from '../public/images/plant.svg';
import Wrapper from './Wrapper';

const About = () => {
  return (
    <section>
      <Wrapper>
        <div>
          <SectionHeading sectionName='From teaching to coding' />
          <p>
            After 5 years in the educational field and a bachelor’s degree in
            language and literature, I changed my career to use my creativity
            and build things that have a positive impact in people's lives with
            innovative businesses.
          </p>
          <img src={plant.src} alt='plant' />
        </div>
      </Wrapper>
    </section>
  );
};

export default About;
