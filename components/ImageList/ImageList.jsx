import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './ImageCard';
import withShowMore, { useShowMore } from '../reusable/ShowMore';

const ImageList = ({ dataList }) => {
  const { normalizedListData } = useShowMore(dataList);
  return (
    <>
      <ul className="grid gap-y-6 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4 lg:gap-x-4">
        {normalizedListData.map(item => (
          <li
            key={item.id}
            className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full"
          >
            <ImageCard data={item} />
          </li>
        ))}
      </ul>
    </>
  );
};

ImageList.propTypes = {
  dataList: PropTypes.array.isRequired,
};

export default withShowMore(ImageList);
