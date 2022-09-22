import Image from 'next/image';

const ReviewCard = ({ itemData }) => {
  const { reviewText, photo, name, position } = itemData;
  return (
    <div className="max-w-[280px] my-0 mx-auto sm:max-w-[400px] md:max-w-full">
      <p className="mb-4 md:mb-8">{reviewText}</p>
      <div className="">
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
    </div>
  );
};

export default ReviewCard;
