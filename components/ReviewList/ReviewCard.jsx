import { useState, useEffect } from 'react';
import Image from 'next/image';

const ReviewCard = ({ itemData }) => {
  const { reviewText, photo, name, position } = itemData;
  const [overflow, setOverflow] = useState('overflow-hidden');

  useEffect(() => {
    const showScroll = () => {
      const contentText = reviewText.length;

      if (contentText > 280) {
        setOverflow('overflow-y-auto');
      } else {
        setOverflow('overflow-hidden');
      }
    };
    showScroll();
  }, [overflow, reviewText]);

  return (
    <div className="flex flex-col justify-between h-full max-w-[280px] my-0 mx-auto sm:max-w-none sm:w-[340px] md:w-[230px] lg:w-[366px]">
      <p className={`${overflow} review mb-4 md:pr-2 md:mb-8 md:max-h-[234px]`}>{reviewText}</p>
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
    </div>
  );
};

export default ReviewCard;

