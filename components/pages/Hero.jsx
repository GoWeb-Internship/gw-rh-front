import Image from 'next/image';
import Button from '../reusable/Button';
import Container from '../reusable/Container';

const Hero = ({ data }) => {
  return (
    <section className="box-content pt-8 pb-7 bg-bgHero md:py-16 lg:pt-[60px] lg:pb-[124px] lg:flex lg:justify-between">
      <Container>
        <div className="md:mb-[140px] lg:mb-0">
        <div className="absolute left-0 top-[120px] md:left-3 md:top-[146px] lg:top-[188px] w-[192px] h-[42px] md:w-[276px] md:h-[62px] lg:w-[344px] lg:h-[78px]">
          <Image
            src="/hero/surname.svg"
            alt="decoration-icon"
            width={236}
            height={18}
          />
        </div>
        <h1 className="w-[280px] mb-10 font-semibold text-4xl text-brand1 uppercase md:w-[464px] md:mb-8 md:text-52 md:font-bold lg:mt-16 lg:mb-[72px]">
          {data.heroTitle}
        </h1>
        <p className="w-[280px] mb-[88px] font-semibold text-base md:w-[420px] md:mb-[50px] md:text-lg md:leading-[24px] lg:mb-[167px]">
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
      
    </section>
  );
};

export default Hero;
