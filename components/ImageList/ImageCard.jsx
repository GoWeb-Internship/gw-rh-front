import { useRouter } from 'next/router';
import { format } from 'date-fns';
import { enGB, ru, uk, cs } from 'date-fns/locale';

import NextImage from '../reusable/Image';
import Heading from '../reusable/Heading';

const localeConfig = {
  uk: uk,
  en: enGB,
  cs: cs,
  ru: ru,
};

const ImageCard = ({ data }) => {
  const { locale } = useRouter();

  const dataPublished = format(new Date(`${data.data}`), 'd MMMM', {
    locale: localeConfig[locale],
  });

  return (
    <>
      <NextImage image={data.image} className="rounded" alt={data.alt} />
      <Heading
        tag="h3"
        text={data.titleImg}
        className="uppercase mt-2 text-lg tracking-[0.005em] font-semibold md:mt-4 lg:mt-2"
      />
      <div className="flex mt-2 text-t1416 font-normal">
        <p className="mr-4">
          {data.location}, {dataPublished}
        </p>
        <p>{data.locationPlace}</p>
      </div>
    </>
  );
};

export default ImageCard;