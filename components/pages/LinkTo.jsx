import PropTypes from 'prop-types';

import useTranslations from '../../hooks/useTranslations';

import Section from '../reusable/Section';
import Container from '../reusable/Container';
import Head from 'components/reusable/Head';
import LinkToBook from '../reusable/LinkToBook';

const LinkTo = ({ data, link }) => {
  const linkToBook = useTranslations('linkToBook');

  return (
    <Section className="pt-[152px] pb-8 md:pt-[184px] md:pb-[124px] lg:pt-[244px]">
      <Container>
        <Head
          Tag="h1"
          title={data.attributes.title}
          isColor
          className="text-4xl !mb-4 md:mb-6 md:text-4xl"
        />
        <p className="font-semibold text-main mb-8 lg:mb-14">
          {data.attributes.subTitle}
        </p>
        <LinkToBook text={linkToBook} link={link} />
      </Container>
    </Section>
  );
};

LinkTo.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    attributes: PropTypes.shape({
      title: PropTypes.string.isRequired,
      subTitle: PropTypes.string.isRequired,
    }),
  }),
  link: PropTypes.string.isRequired,
};
export default LinkTo;
