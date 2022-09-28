import React, { useState } from 'react';
import ImageCard from './ImageCard';
import ButtonShow from '../reusable/ButtonShow';
import useMedia from '../../hooks/useMedia';
import useTranslations from '../../hooks/useTranslations';

const ImageList = ({ dataList }) => {
  const [itemsToShow, setItemsToShow] = useState(2);

  const btnShow = useTranslations(['readLess', 'readMore']);

  const pageFormat = useMedia();
  const isMobile = pageFormat === 'mobile';

  const showmore = () => {
    setItemsToShow(dataList.length);
  };

  const showless = () => {
    setItemsToShow(2);
  };
  return (
    <>
      <ul className="hidden md:grid md:mb-20 md:gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4">
        {dataList.map(item => (
          <li
            key={item.id}
            className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full"
          >
            <ImageCard data={item} />
          </li>
        ))}
      </ul>
      {/* Начало Кнопка показать больше/ меньше для моб версии */}
      {pageFormat && isMobile && (
        <ul className="grid gap-y-6 mb-8 md:hidden lg:hidden">
          {dataList.slice(0, itemsToShow).map((item, index) => (
            <li
              key={index}
              className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full"
            >
              <ImageCard data={item} />
            </li>
          ))}
          {itemsToShow === 2 ? (
            <ButtonShow onClick={showmore}>{btnShow.readMore}</ButtonShow>
          ) : (
            <ButtonShow onClick={showless}>{btnShow.readLess}</ButtonShow>
          )}
        </ul>
      )}

      {/* Конец */}
    </>
  );
};

export default ImageList;
