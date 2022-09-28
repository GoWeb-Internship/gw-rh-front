import Section from 'components/reusable/Section';
import Container from 'components/reusable/Container';
import Heading from '../reusable/Heading';
import Button from '../reusable/Button';
import ImageList from '../ImageList/ImageList';
import useTranslations from '../../hooks/useTranslations';

const Afisha = ({ data }) => {
  const button = useTranslations(['callbackBtn', 'afishaConsult']);

  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[64px] lg:pt-[244px] lg:pb-[124px]">
      <Container>
        <Heading
          text={data.attributes.mainTitle}
          className="uppercase font-semibold text-t3642 text-brand1 mb-4 md:mb-14"
        />
        <Heading
          tag="h2"
          text={data.attributes.title}
          className="uppercase font-semibold text-t2444 mb-4 md:mb-6"
        />
        <ImageList
          dataList={data.attributes.imageCard}
          mediaOptions={{ mobile: 2, tablet: 6, desktop: 8, fullHd: 8 }}
        />
        <div className="mt-8 md:mt-20 md:flex md:justify-between lg:justify-start">
          <Button
            linkTo={{
              pathname: '/contact-us',
              query: { clickFrom: `${button.callbackBtn}` },
            }}
            text={button.callbackBtn}
            className="my-0 mx-auto mb-6 md:m-0 lg:mr-[33px]"
          />
          <p className="text-brand1 text-lg font-semibold md:w-[310px] lg:w-[464px]">
            {button.afishaConsult}
          </p>
        </div>
      </Container>
    </Section>
  );
};

export default Afisha;
