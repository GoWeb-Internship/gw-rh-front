import Container from '../reusable/Container';
import VideoList from '../VideoList/VideoList';

const SeminarsBlock = ({ data }) => {
  const { title, videoList } = data;
  return (
    <section>
      <Container>
        <h2>{title}</h2>
        {!!videoList.length && <VideoList listData={videoList} />}
      </Container>
    </section>
  );
};

export default SeminarsBlock;
