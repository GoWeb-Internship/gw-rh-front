import Section from '../reusable/Section';
import Container from '../reusable/Container';
import WithVideo from '../Travel/WithVideo';
import WithImg from '../Travel/WithImg';
const Traveling = () => {
  return (
    <Section className="pt-[154px] pb-9 md:pt-[184px] md:pb-10 lg:pt-[244px] lg:pb-32">
      <Container>
        <div>
          <div className="w-[280px] md:w-full text-left text-brand1 font-semibold pb-8 lg:pb-16 md:pb-14">
            <h1 className="uppercase text-4xl mb-4 md:mb-6">
              Путешествия - источник сил
            </h1>
            <p>
              Карлов мост и лебеди - так начинается моя Прага. Для кого-то она
              начинается с башенных часов или замков.{' '}
            </p>
          </div>
          <WithVideo />
          <WithImg />
        </div>
      </Container>
    </Section>
  );
};

export default Traveling;
