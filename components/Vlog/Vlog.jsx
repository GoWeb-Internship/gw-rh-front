import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Heading from '../reusable/Heading';
import Video from '../reusable/VideoCard';

const Vlog = ({ data }) => {
  // console.log('data', data);
  return (
    <Section>
      <Container>
        <>
          <Heading
            text={data.attributes.mainTitle}
            className="uppercase font-semibold text-[28px] leading-[33px] mb-6"
          />
          <Heading
            tag="h2"
            text={data.attributes.title}
            className="uppercase font-semibold text-[28px] leading-[33px] mb-6"
          />
          <ul className="grid md:grid-cols-2 md:gap-x-5 md:gap-y-6 lg:grid-cols-4 lg:gap-x-4">
            {data.attributes.video.map(item => (
              <li
                key={item.id}
                className="w-[280px] sm:w-[400px] my-0 mx-auto md:w-full"
              >
                <Video video={item} />
              </li>
            ))}
          </ul>
        </>
      </Container>
    </Section>
  );
};
export default Vlog;
