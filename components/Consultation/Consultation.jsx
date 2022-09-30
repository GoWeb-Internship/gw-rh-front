import PropTypes from 'prop-types';
import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Heading from '../reusable/Heading';
import ConsultationList from './ConsultationList';

const Consultation = ({ data }) => {
  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[64px] lg:pt-[244px] lg:pb-[124px]">
      <Container>
        <Heading
          text={data.attributes.title}
          className="uppercase font-semibold text-28 text-brand1 mb-8 md:text-t3642 md:mb-14"
        />
        <ConsultationList dataList={data.attributes.videoCard} />
      </Container>
    </Section>
  );
};

Consultation.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Consultation;
