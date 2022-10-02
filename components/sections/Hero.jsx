import Image from 'next/image';
import PropTypes from 'prop-types';

import useTranslations from '../../hooks/useTranslations';

import Button from '../reusable/Button';
import Section from '../reusable/Section';
import Container from '../reusable/Container';
import DialogWindow from '../reusable/DialogWindow';

import ArrowDown from '../../public/hero/arrowDown.svg';
import ArrowUp from '../../public/hero/arrowUp.svg';

const Hero = ({ data }) => {
  const { signToConsultBtn, projectsBtn, consultMore, actionYears, learnInfo } =
    useTranslations([
      'signToConsultBtn',
      'projectsBtn',
      'consultMore',
      'actionYears',
      'learnInfo',
    ]);

  return (
    <Section
      className="pt-[152px] pb-7 bg-bgHero md:pt-[184px] md:pb-16 lg:pt-[236px] lg:pb-[124px] lg:!w-screen"
      id="hero"
    >
      <Container className="lg:flex lg:justify-between">
        <ArrowDown className="hidden md:block absolute top-[425px] right-3 lg:-top-8 lg:right-20 xl:right-[220px]" />
        <ArrowUp className="hidden md:block absolute top-[360px] left-0 lg:top-[488px] lg:left-[60px]" />
        <div className="md:mb-[140px] lg:mb-0 xl:mr-[200px]">
          <h1 className="w-[280px] mb-10 font-semibold text-4xl text-brand1 uppercase md:w-[464px] md:mb-8 md:text-52 md:font-bold lg:mt-2 lg:mb-[72px] after:content-[''] after:block after:bg-[url('/hero/surname.svg')] after:bg-no-repeat after:bg-cover after:w-[168px] after:h-[13px] md:after:w-[236px] md:after:h-[18px]">
            {data.heroTitle}
          </h1>
          <p className="mb-[88px] font-medium text-main text-xl leading-[24px] md:w-[420px] md:mb-[50px] md:text-xl md:leading-[24px] lg:mb-[167px]">
            {data.description}
          </p>
          <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-5 lg:space-x-12">
            <Button
              linkTo={{
                pathname: '/contact-us',
                query: { clickFrom: `${signToConsultBtn}` },
              }}
              text={signToConsultBtn}
            />
            <Button
              linkTo="/projects"
              text={projectsBtn}
              buttonTheme="secondary"
            />
          </div>
        </div>
        <div className="hidden md:block md:m-auto md:w-[420px] md:h-[480px] lg:w-[476px] lg:h-[540px] relative">
          <Image
            src={data.photo.data.attributes.url}
            alt={data.photoAlt}
            width={476}
            height={540}
          />
          <DialogWindow
            classNameDiv={`top-[94px] -left-[94px] lg:top-[118px] lg:-left-[68px] after:right-5`}
            text={consultMore}
          />
          <DialogWindow
            classNameDiv={`top-[140px] -right-[110px] lg:top-[130px] lg:-right-[44px] after:left-5`}
            text={actionYears}
          />
          <DialogWindow
            classNameDiv={`top-[245px] -left-[110px] lg:top-[300px] lg:-left-[140px] after:right-5`}
            text={learnInfo}
          />
        </div>
      </Container>
    </Section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    heroTitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photoAlt: PropTypes.string.isRequired,
    photo: PropTypes.shape({
      data: PropTypes.shape({
        id: PropTypes.number,
        attributes: PropTypes.shape({
          url: PropTypes.string.isRequired,
        })
      })
    })
  })
};

export default Hero;
