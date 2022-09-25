import Section from '../reusable/Section';
import Container from '../reusable/Container';

const Traveling = () => {
  return (
    <Section className="pt-[154px] pb-9 md:pt-[184px] md:pb-10 lg:pt-[244px] lg:pb-32">
      <Container>
        <div className="w-[280px] md:w-full text-left text-brand1 font-semibold pb-8 lg:pb-16 md:pb-14">
          <h1 className="uppercase text-4xl mb-4 md:mb-6">
            Путешествия - источник сил
          </h1>
          <p>
            Карлов мост и лебеди - так начинается моя Прага. Для кого-то она
            начинается с башенных часов или замков.{' '}
          </p>
        </div>
        <div className="bg-[#F0F6FA]  pt-4 md:pt-10 lg:pt-12 ">
          <div className="mb-4 md:mb-10 lg:mb-0 px-4 md:px-5 md:flex">
            <div className="mb-2 md:mb-0">
              <p className="text-[#585D61] mb-1">Август, 2021 год</p>
              <h2 className="text-brand2 uppercase font-semibold text-lg leading-[27px] md:text-2xl md:leading-[44px] tracking-[0.005em] ">
                Прага - чайная церемония
              </h2>
            </div>
            <div className="md:w-[278px]">
              <p>
                Курс: “Мысль - модель Со-Творения” - уникальная методология
                “Нового времени”, котрая является сплавом истинных духовных
                знаний, тайн древних цивилизаций и современных открытий.
              </p>
            </div>
          </div>
          <div className="w-[280px] h-[256px] bg-red-500 lg:w-[640px] lg:h-[360px] md:w-[560px] md:h-[315px]"></div>
        </div>
      </Container>
    </Section>
  );
};

export default Traveling;
