import Image from 'next/image';
import Button from '../reusable/Button';

const Hero = ({ data }) => {
  return (
    <section className="py-8 md:py-16 lg:pt-[60px] lg:pb-[124px] lg:flex lg:justify-between">
      <div className="md:mb-[140px] lg:mb-0">
        <div className="absolute left-0 top-[84px] md:left-3 md:top-[146px] lg:top-[188px] w-[192px] h-[42px] md:w-[276px] md:h-[62px] lg:w-[344px] lg:h-[78px] -z-10">
          <Image
            src="/hero/surname.svg"
            alt="decoration-icon"
            width={344}
            height={78}
          />
        </div>
        <h1 className="w-[280px] mb-10 font-semibold text-4xl text-[#065A92] uppercase md:w-[464px] md:mb-8 md:text-52 md:font-bold lg:mt-16 lg:mb-[72px]">
          {/* {data.attributes.title} */}
          {data.author}
        </h1>
        <p className="w-[280px] mb-[88px] font-semibold text-base md:w-[420px] md:mb-[50px] md:text-lg md:leading-[24px] lg:mb-[167px]">
          {/* {data.attributes.description} */}
          {data.profession}
        </p>
        <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5">
          <Button text="Записаться на консультацию" />
          <Button text="Проекты" buttonTheme="secondary" />
        </div>
      </div>
      {/* <Image src={data.attributes.imgUrl} alt="hero" width={463} height={592} /> */}
      <div className="hidden md:block md:m-auto md:w-[420px] md:h-[480px] lg:w-[523px] lg:h-[596px]">
        <Image
          src="/hero/author.jpg"
          alt={data.photo.alt}
          width={523}
          height={596}
        />
      </div>
    </section>
  );
};

export default Hero;
