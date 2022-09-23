import Image from 'next/image';

import Button from '../reusable/Button';
import Section from '../reusable/Section';
import Container from '../reusable/Container';

import ArrowDown from '../../public/hero/arrowDown.svg';
import ArrowUp from '../../public/hero/arrowUp.svg';

const Hero = ({ data, translation }) => {

  return (
    <Section
      className="pt-8 pb-7 bg-bgHero md:py-16 lg:pt-[116px] lg:pb-[124px] lg:!w-screen"
      id="hero"
    >
      <Container className="lg:flex lg:justify-between">
        <ArrowDown className="hidden md:block absolute top-[425px] right-3 lg:-top-8 lg:right-11" />
        <ArrowUp className="hidden md:block absolute top-[360px] left-0 lg:top-[457px] lg:left-[60px]" />
        <div className="md:mb-[140px] lg:mb-0">
          <h1 className="w-[280px] mb-10 font-semibold text-4xl text-brand1 uppercase md:w-[464px] md:mb-8 md:text-52 md:font-bold lg:mt-2 lg:mb-[72px] after:content-[''] after:block after:bg-[url('/hero/surname.svg')] after:bg-no-repeat after:bg-cover after:w-[168px] after:h-[13px] md:after:w-[236px] md:after:h-[18px]">
            {data.heroTitle}
          </h1>
          <p className="mb-[88px] font-medium text-black text-xl leading-[24px] md:w-[420px] md:mb-[50px] md:text-xl md:leading-[24px] lg:mb-[167px]">
            {data.description}
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-12">
            <Button linkTo="/contuct-us" text={translation.signToConsultBtn} />
            <Button linkTo="/projects" text={translation.projectsBtn} buttonTheme="secondary" />
          </div>
        </div>
        <div className="hidden md:block md:m-auto md:w-[420px] md:h-[480px] lg:w-[476px] lg:h-[540px] relative">
          <Image
            src={data.photo.data.attributes.url}
            alt={data.photoAlt}
            width={476}
            height={540}
          />
          <div
            className={`flex justify-center align-center absolute top-[94px] -left-[94px] w-[216px] h-[82px] lg:top-[118px] lg:-left-[68px] dialogOne`}
          >
            <p className=" text-blue text-center text-sm leading-[16px] font-semibold px-8 py-4">
              {translation.consultMore}
            </p>
          </div>
          <div
            className={`flex justify-center align-center absolute top-[140px] -right-[110px] w-[202px] h-[99px] lg:top-[130px] lg:-right-[44px] dialogTwo`}
          >
            <p className=" text-blue text-center text-sm leading-[16px] font-semibold px-8 py-4">
              {translation.actionYears}
            </p>
          </div>
          <div
            className={`flex justify-center align-center absolute top-[245px] -left-[110px] w-[194px] h-[99px] lg:top-[300px] lg:-left-[140px] dialogThree`}
          >
            <p className=" text-blue text-center text-sm leading-[16px] font-semibold px-8 py-4">
              {translation.learnInfo}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
