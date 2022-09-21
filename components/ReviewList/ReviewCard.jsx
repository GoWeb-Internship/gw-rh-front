import Image from 'next/image';

const ReviewCard = ({ itemData }) => {
  const { reviewText, photo, name, position } = itemData;
  return (
    <>
      <p>{reviewText}</p>
      <div>
        <Image
          src={photo.data.attributes.url}
          alt={name}
          width={48}
          height={48}
        />
        <div>
          <p>{name}</p>
          <p>{position}</p>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
