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
          <div className="w-[280px] md:w-full text-left text-brand1 font-semibold pb-8 lg:pb-16 md:pb-14">
            <h1 className="uppercase text-4xl mb-4 md:mb-6">{title}</h1>
            <p>{subTitle}</p>
          </div>
          <WithVideo videoData={video} />
          <WithImg sliderDate={slider} />
        </div>
      </Container>
    </Section>
  );
};

export default Traveling;
