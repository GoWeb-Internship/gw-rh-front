import PropTypes from 'prop-types';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import WithVideo from '../Travel/WithVideo';
import WithImg from '../Travel/WithImg';

const Traveling = ({ data }) => {
  const { title, subTitle, slider, video } = data;
  return (
    <Section className="pt-[154px] pb-9 md:pt-[184px] md:pb-10 lg:pt-[244px] lg:pb-32">
      <Container>
        <div>
          <div className="w-[280px] md:w-[656px] text-left text-brand1 font-semibold pb-8 lg:pb-16 md:pb-14">
            <h1 className="uppercase text-4xl mb-4 md:mb-6">{title}</h1>
            <p>{subTitle}</p>
          </div>
          <WithVideo
            videoData={video}
            mediaOptions={{ mobile: 1, tablet: 2, desktop: 2, fullHd: 3 }}
          />
          <WithImg
            sliderDate={slider}
            mediaOptions={{ mobile: 2, tablet: 2, desktop: 3, fullHd: 2 }}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Traveling;

Traveling.propTepes = {
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    video: PropTypes.arrayOf(PropTypes.object).isRequired,
    slider: PropTypes.arrayOf(PropTypes.object).isRequired,
  }),
};
