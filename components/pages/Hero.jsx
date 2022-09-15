import Image from 'next/image';
import Button from '../reusable/Button';

import Section from '../reusable/Section';
import Container from '../reusable/Container';

const Hero = ({ data }) => {
  return (
    <Section
      className="pt-8 pb-7 bg-bgHero md:py-16 lg:pt-[60px] lg:pb-[124px] lg:flex lg:justify-between"
      id="hero"
    >
      <Container>
        <div className="md:mb-[140px] lg:mb-0">
          <h1 className="w-[280px] mb-10 font-semibold text-4xl text-brand1 uppercase md:w-[464px] md:mb-8 md:text-52 md:font-bold lg:mt-16 lg:mb-[72px] after:content-[''] after:block after:bg-[url('/hero/surname.svg')] after:bg-no-repeat after:bg-cover after:w-[168px] after:h-[13px] md:after:w-[236px] md:after:h-[18px]">
            {data.heroTitle}
          </h1>
          <p className="mb-[88px] font-medium text-black text-xl leading-[24px] md:w-[420px] md:mb-[50px] md:text-lg lg:mb-[167px]">
            {data.description}
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5">
            <Button text="Записаться на консультацию" />
            <Button text="Проекты" buttonTheme="secondary" />
          </div>
        </div>
        <div className="hidden md:block md:m-auto md:w-[420px] md:h-[480px] lg:w-[523px] lg:h-[596px]">
          <Image
            src="/hero/author.jpg"
            alt={data.photoAlt}
            width={523}
            height={596}
          />
        </div>
      </Container>
    </Section>
  );
};

export default Hero;
