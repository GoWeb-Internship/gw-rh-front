import { useState } from 'react';
import Link from 'next/link';

const About = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-9 lg:py-20">
      <h2 className="mb-6 md:mb-[52px] lg:mb-14 text-28 font-semibold text-left md:text-right md:pr-[130px] lg:text-center lg:pr-0 uppercase">
        {/* {data.attributes.title} */}
        {data.title}
      </h2>
      <div className="lg:flex lg:justify-between">
        <p className="mb-4 w-[280px] lg:w-[272px] font-semibold text-lg text-[#065A92] md:ml-auto md:mb-6 lg:ml-0 before:content-[''] before:block before:h-1 before:w-full before:bg-[#065A92] before:mb-6">
          {/* {data.attributes.quote} */}
          {data.quote}
        </p>
        <div className="w-[280px] md:w-[640px] text-base space-y-6 lg:w-[653px]">
          <p>{data.paragraphOne}</p>
          <p>{data.paragraphTwo}</p>
          <p>{data.paragraphThree}</p>
          <p>{data.paragraphFour}</p>
          <p>{data.paragraphFive}</p>
          <button
            type="button"
            className={
              showMore
                ? 'hidden'
                : 'block text-[#065A92] text-lg leading-[21px] underline font-medium'
            }
            onClick={() => setShowMore(true)}
          >
            Читать больше
          </button>
          {showMore && (
            <>
              <p>{data.paragraphSix}</p>
              <p>{data.paragraphSeven}</p>
              <p>{data.paragraphEight}</p>
              <p>{data.paragraphNine}</p>
              <p>{data.paragraphTen}</p>
              <p>{data.paragraphEleven}</p>
              <p>{data.paragraphTwelfth}</p>
              <p>{data.paragraphThirthteen}</p>
              <button
                type="button"
                className={
                  showMore
                    ? 'block text-[#065A92] text-lg leading-[21px] underline font-medium'
                    : 'hidden'
                }
                onClick={() => setShowMore(false)}
              >
                Читать меньше
              </button>
            </>
          )}
        <Link href="/">
            <a className="block text-[#065A92] text-lg leading-[21px] font-medium underline">
              {/* {data.attributes.linkToBook} */}
              {data.link}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
