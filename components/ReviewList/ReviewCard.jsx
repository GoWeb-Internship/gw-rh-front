import Image from 'next/image';

const ReviewCard = ({ itemData }) => {
  const { reviewText, photo, name, position } = itemData;

  return (
    <div className="flex flex-col justify-between h-full max-w-[280px] my-0 mx-auto sm:max-w-none sm:w-[340px] md:w-[230px] lg:w-[366px] pb-12">
      <p className="mb-4 md:mb-8">{reviewText}</p>
      <div className="mb-4 flex items-center gap-x-3">
        <Image
          src={photo.data.attributes.url}
          alt={name}
          width={48}
          height={48}
          className="flex rounded-full"
        />
        <div>
          <p className="text-t1828 uppercase font-semibold shrink-0">{name}</p>
          <p className="text-qqBase text-brand1">{position}</p>
        </div>
      </div>
      {/* <p className="mb-2">{reviewText}</p> */}
    </div>
  );
};

export default ReviewCard;
