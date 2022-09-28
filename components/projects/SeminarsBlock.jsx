import Container from '../reusable/Container';
import Head from '../reusable/Head';
import VideoList from '../VideoList/VideoList2';

const SeminarsBlock = ({ data }) => {
  const { title, videoList } = data;
  return (
    <section className="sections-py">
      <Container>
        <Head title={title} className={'mb-6 lg:mb-14'} />
        {!!videoList.length && (
          <VideoList
            listData={videoList}
            btnShowMore={'show more'}
            btnShowLess={'show less'}
          />
        )}
      </Container>
    </section>
  );
};

export default SeminarsBlock;
