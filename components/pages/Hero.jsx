import Image from 'next/image';
import Button from '../reusable/Button';

import Section from '../reusable/Section';
import Container from '../reusable/Container';

const Hero = ({ data, translation }) => {

  return (
    <Section
      className="pt-8 pb-7 bg-bgHero md:py-16 lg:pt-[116px] lg:pb-[124px] lg:w-full"
      id="hero"
    >
      <Container className="lg:flex lg:justify-between">
        <div className="md:mb-[140px] lg:mb-0">
          <h1 className="w-[280px] mb-10 font-semibold text-4xl text-brand1 uppercase md:w-[464px] md:mb-8 md:text-52 md:font-bold lg:mt-2 lg:mb-[72px] after:content-[''] after:block after:bg-[url('/hero/surname.svg')] after:bg-no-repeat after:bg-cover after:w-[168px] after:h-[13px] md:after:w-[236px] md:after:h-[18px]">
            {data.heroTitle}
          </h1>
          <p className="mb-[88px] font-medium text-black text-xl leading-[24px] md:w-[420px] md:mb-[50px] md:text-xl md:leading-[24px] lg:mb-[167px]">
            {data.description}
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-12">
            <Button text={translation.signToConsultBtn} />
            <Button text={translation.projectsBtn} buttonTheme="secondary" />
          </div>
        </div>
        <div className="hidden md:block md:m-auto md:w-[420px] md:h-[480px] lg:w-[476px] lg:h-[540px]">
          <Image
            src="/hero/author.png"
            alt={data.photoAlt}
            width={476}
            height={540}
          />
        </div>
        <div className="relative w-[216px] h-[70px] bg-light"><p className="text-blue">Провел более <span className="">30 000</span> консультаций</p></div>
      </Container>
    </Section>
  );
};

export default Hero;
