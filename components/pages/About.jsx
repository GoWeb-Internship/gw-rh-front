import { useState } from 'react';
import Link from 'next/link';

const About = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-9 lg:py-20">
      <h2 className="mb-6 md:mb-[52px] lg:mb-14 text-28 font-semibold text-left md:text-right md:pr-[130px] lg:text-center lg:pr-0 uppercase">
        {data.aboutTitle}
      </h2>
      <div className="lg:flex lg:justify-between">
        <p className="mb-4 w-[280px] lg:w-[272px] font-semibold text-lg text-brand1 md:ml-auto md:mb-6 lg:ml-0 before:content-[''] before:block before:h-1 before:w-full before:bg-brand1 before:mb-6">
          {data.quote}
        </p>
        <div className="w-[280px] md:w-[640px] text-base space-y-6 lg:w-[653px]">
<div>{data.body}</div>
          <button
            type="button"
            className={
              showMore
                ? 'hidden'
                : 'block text-brand1 text-lg leading-[21px] underline font-medium'
            }
            onClick={() => setShowMore(true)}
          >
            Читать больше
          </button>
          {showMore && (
            <>

              <button
                type="button"
                className={
                  showMore
                    ? 'block text-brand1 text-lg leading-[21px] underline font-medium'
                    : 'hidden'
                }
                onClick={() => setShowMore(false)}
              >
                Читать меньше
              </button>
            </>
          )}
        <Link href="/">
            <a className="block text-brand1 text-lg leading-[21px] font-medium underline">
              {data.linkToBook}
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
