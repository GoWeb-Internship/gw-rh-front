import { useState } from 'react';
import Link from 'next/link';

const About = ({ data }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="py-9 lg:py-20">
      <h2 className="mb-6 md:mb-[52px] lg:mb-14 text-28 font-semibold text-left md:text-right lg:text-center uppercase">
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

          {/* <p className="mb-8 text-base">Александр Рыженко – эксперт в открытии и реализации призвания человека. В его арсенале – тренерский, писательский,лекторский, исследовательский опыт. Имеет два высших образования: высшее техническое и магистр практической психологии. Закончил Академию информациологии, Ведическую духовную академию.</p>
                    <p className="mb-8 text-base">На определенном этапе его знания и практический опыт вышли далеко за пределы психолога и консультанта, а практические наработки позволили перейти на ведение личных проектов в Украине, России, Финляндии, Голландии, Германии, Канаде по вопросам семейных отношений, личностному росту, выходу из сложных жизненных обстоятельств, наработке профессиональных навыков и мастерства в своем деле, развитию и расширению бизнеса, в реализации талантов, открытию человеком своего предназначения.</p> */}
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

              {/* <p className="mb-8 text-base">Имеет инновационные разработки в применении системного мышления для решения задач, стоящих сегодня перед человеком и обществом. Например, можно научиться мыслить и действовать таким образом, чтобы мысль одного человека позитивно влияла на миллионы людей. Или обучить всего несколько человек, чтобы они смогли улучшить экологическую ситуацию в городе, в котором живут, или стране. Или… Впрочем, эта книга о том, как изменить свою жизнь к лучшему с помощью Любви.</p>
                    <p className="mb-14 text-base">Имеет инновационные разработки в применении системного мышления для решения задач, стоящих сегодня перед человеком и обществом. Например, можно научиться мыслить и действовать таким образом, чтобы мысль одного человека позитивно влияла на миллионы людей. Или обучить всего несколько человек, чтобы они смогли улучшить экологическую ситуацию в городе, в котором живут, или стране. Или… Впрочем, эта книга о том, как изменить свою жизнь к лучшему с помощью Любви.</p> */}
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
            <a className=" text-[#065A92] text-lg leading-[21px] font-medium underline">
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
