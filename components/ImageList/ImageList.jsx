import ImageCard from './ImageCard';

const ImageList = ({ dataList, className }) => {
  return (
    <ul className={className}>
      {dataList.map(item => (
        <li
          key={item.id}
          className="w-[280px] my-0 mx-auto sm:w-[400px] md:w-full"
        >
          <ImageCard data={item} />
        </li>
      ))}
    </ul>
  );
};

export default ImageList;
