import Container from '../reusable/Container';
import Head from '../reusable/Head';
import VideoList from '../VideoList/VideoList';

const SeminarsBlock = ({ data }) => {
  const { title, videoList } = data;
  return (
    <section>
      <Container className="project-container">
        <Head title={title} className={'mb-6 lg:mb-14'} />
        {!!videoList.length && <VideoList listData={videoList} />}
      </Container>
    </section>
  );
};

export default SeminarsBlock;
