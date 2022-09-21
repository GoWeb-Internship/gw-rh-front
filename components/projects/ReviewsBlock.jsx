import Container from '../reusable/Container';
import ReviewList from '../ReviewList/ReviewList';
import VideoList from '../VideoList/VideoList';

const ReviewsBlock = ({ data }) => {
  const { title, textReviewTitle, videoList, textReviewsList } = data;

  return (
    <section>
      <Container>
        <h2>{title}</h2>
        {!!videoList.length && <VideoList listData={videoList} />}
        <h3>{textReviewTitle}</h3>
        {!!textReviewsList.length && <ReviewList listData={textReviewsList} />}
      </Container>
    </section>
  );
};

export default ReviewsBlock;
