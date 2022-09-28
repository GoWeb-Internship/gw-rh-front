import Link from 'next/link';
import Container from '../reusable/Container';

const PriceBlock = ({ data }) => {
  const { title, price, description, buttonText, locale } = data;
  return (
    <section className="sections-py">
      <Container>
        <h2 className="visually-hidden">{title}</h2>
        <div className="border-2 border-brand1 w-[280px] mx-auto md:flex md:w-full lg:w-[1136px]">
          <p className="py-12 flex justify-center items-center text-[48px] leading-none font-bold bg-brand1 text-light md:px-[42px] md:shrink-0 lg:px-[60px]">
            {price}$
          </p>
          <div className="pt-12 pb-[68px] px-3 md:pt-10 md:pb-16 md:px-5 lg:py-14">
            <p className="mb-4 text-t2444 uppercase font-semibold">{title}</p>
            <p className="mb-4 font-semibold text-qqBase text-brand1 md:max-w-[274px] md:mb-10 lg:mb-11 lg:max-w-[464px]">
              {description}
            </p>
            <Link href={`/${locale}/`}>
              <a className="py-2 mx-auto text-center block text-t1821 max-w-[280px] text-light bg-brand3 font-semibold md:mx-0">
                <span className="block mx-auto px-4 max-w-[200px]">
                  {buttonText}
                </span>
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default PriceBlock;
