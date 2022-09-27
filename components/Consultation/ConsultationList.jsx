import ConsultationCard from './ConsultationCard';

const ConsultationList = ({ dataList }) => {
  return (
    <ul>
      {dataList.map(item => (
        <li
          key={item.id}
          className="last:mb-0 mb-8 md:mb-16 lg:mb-[124px] lg:flex lg:gap-x-28 lg:even:flex-row-reverse xl:gap-x-8"
        >
          <ConsultationCard data={item} />
        </li>
      ))}
    </ul>
  );
};

export default ConsultationList;
