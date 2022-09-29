import Container from '../reusable/Container';
import Head from '../reusable/Head';
import ReviewList from '../ReviewList/ReviewList';
import VideoList from '../VideoList/VideoList2';

const ReviewsBlock = ({ data }) => {
  const { title, textReviewTitle, videoList, textReviewsList } = data;

  return (
    <section className="sections-py">
      <Container>
        {!!videoList.length && (
          <>
            <Head title={title} className={'max-w-full mb-6 lg:mb-14'} />
            <VideoList
              listData={videoList}
              className={'mb-16 md:mb-14 lg:mb-[124px]'}
            />
          </>
        )}

        {!!textReviewsList.length && (
          <>
            <Head
              title={textReviewTitle}
              className={'mt-[68px] md:mt-[60px] mb-6 lg:mb-14'}
              Tag={'h3'}
            />
            <ReviewList listData={textReviewsList} />
          </>
        )}
      </Container>
    </section>
  );
};

export default ReviewsBlock;
