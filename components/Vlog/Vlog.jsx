import Container from 'components/reusable/Container';
import Heading from '../reusable/Heading';
import VideoList from '../VideoList/VideoList2';

const Vlog = ({ data }) => {
  return (
    <section
      className={
        'pt-[152px] pb-8 md:pt-[184px] md:pb-[64px] lg:pt-[244px] lg:pb-[124px]'
      }
    >
      <Container>
        <>
          <Heading
            text={data.attributes.mainTitle}
            className="uppercase font-semibold text-28 text-brand1 mb-4 md:text-t3642 md:mb-14"
          />
          <Heading
            tag="h2"
            text={data.attributes.title}
            className="text-lg tracking-[0.005em] uppercase font-semibold mb-4 md:tracking-normal md:text-t2444 md:mb-6"
          />
          <VideoList
            listData={data.attributes.video}
            mediaOptions={{ mobile: 2, tablet: 6, desktop: 8, fullHd: 8 }}
          />
        </>
      </Container>
    </section>
  );
};
export default Vlog;
