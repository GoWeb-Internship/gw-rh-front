import Link from 'next/link';
import Container from '../reusable/Container';

const PriceBlock = ({ data }) => {
  const { title, price, description, buttonText, locale } = data;
  return (
    <section>
      <Container>
        <h2 className="visually-hidden">{title}</h2>
        <p>{price}$</p>
        <div>
          <p>{title}</p>
          <p>{description}</p>
          <Link href={`/${locale}/`}>
            <a>{buttonText}</a>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default PriceBlock;
