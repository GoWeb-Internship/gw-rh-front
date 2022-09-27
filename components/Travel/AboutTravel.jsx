import classNames from 'classnames';

const AboutTraveling = ({ date, eventTitle, aboutEvent, video = false }) => {
  const isVideo = classNames({
    'md:flex md:justify-between lg:flex-col lg:justify-start mb-4 md:mb-10 px-3 md:px-4 lg:px-0':
      video,
  });

  const titleInVideo = classNames(
    {
      'md:w-[278px] md:text-2xl md:leading-[44px] md:tracking-normal': video,
    },
    {
      'lg:text-2xl lg:leading-[44px] lg:tracking-normal md:mb-2 lg:mb-0':
        !video,
    },
  );

  return (
    <div className={`${isVideo} lg:mb-0 `}>
      <div className="mb-2 md:mb-0">
        <p className="text-[#585D61] mb-1">{date}</p>
        <h2
          className={`text-brand2 uppercase font-semibold text-lg leading-[27px] tracking-[0.005em] lg:mb-4 ${titleInVideo} `}
        >
          {eventTitle}
        </h2>
      </div>
      <div className="md:w-[278px] lg:w-[370px]">
        <p>{aboutEvent}</p>
      </div>
    </div>
  );
};

export default AboutTraveling;
