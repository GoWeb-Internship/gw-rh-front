import Image from 'next/image';
import { useReadMore } from '../../hooks/useReadMore';
import ReadMoreButton from './ReadMoreButton';

const TEXT_LIMIT = 200;

const ReviewCard = ({ itemData }) => {
  const { reviewText, photo, name, position } = itemData;
  const { text, toggleText, showAllText, showReadMore } = useReadMore(
    reviewText,
    TEXT_LIMIT,
  );
  return (
    <div className="flex flex-col h-full max-w-[280px] my-0 mx-auto sm:max-w-none sm:w-[340px] md:w-[230px] lg:w-[366px] pb-12">
      {/* <p className="mb-4 md:mb-8">{text}</p> */}
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
      <p className="mb-2">{text}</p>
      {showReadMore && (
        <ReadMoreButton
          onClick={toggleText}
          showAllText={showAllText}
          className={'px-2'}
        />
      )}
    </div>
  );
};

export default ReviewCard;
