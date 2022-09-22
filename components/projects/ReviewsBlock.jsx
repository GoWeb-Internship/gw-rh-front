import Container from '../reusable/Container';
import Head from '../reusable/Head';
import ReviewList from '../ReviewList/ReviewList';
import VideoList from '../VideoList/VideoList';

const ReviewsBlock = ({ data }) => {
  const { title, textReviewTitle, videoList, textReviewsList } = data;

  return (
    <section>
      <Container className="project-container">
        <Head title={title} className={'mb-6 lg:mb-14'} />
        {!!videoList.length && (
          <VideoList
            listData={videoList}
            className={'mb-16 md:mb-14 lg:mb-[124px]'}
          />
        )}
        <Head title={textReviewTitle} className={'mb-6 lg:mb-14'} Tag={'h3'} />
        {!!textReviewsList.length && <ReviewList listData={textReviewsList} />}
      </Container>
    </section>
  );
};

export default ReviewsBlock;
