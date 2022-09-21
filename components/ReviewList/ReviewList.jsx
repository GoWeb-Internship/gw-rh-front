// import Image from 'next/image';
import ReviewCard from './ReviewCard';

const ReviewList = ({ listData }) => {
  return (
    <ul>
      {listData.map(({ id, ...itemData }) => (
        <li key={id}>
          <ReviewCard itemData={itemData} />
        </li>
      ))}
    </ul>
  );
};

export default ReviewList;
