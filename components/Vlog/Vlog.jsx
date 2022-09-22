import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Heading from '../reusable/Heading';
import VideoList from '../VideoList/VideoList';

const Vlog = ({ data }) => {
  // console.log('data', data);
  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[64px] lg:pt-[244px] lg:pb-[124px]">
      <Container>
        <>
          <Heading
            text={data.attributes.mainTitle}
            className="uppercase font-semibold text-t3642 text-brand1 mb-4 md:mb-14"
          />
          <Heading
            tag="h2"
            text={data.attributes.title}
            className="uppercase font-semibold text-t2444 mb-4 md:mb-6"
          />
          <VideoList
            listData={data.attributes.video}
            className="grid gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4"
          />
        </>
      </Container>
    </Section>
  );
};
export default Vlog;
