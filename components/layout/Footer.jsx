import Container from '../reusable/Container';
import Image from 'next/image';
import Link from 'next/link';
import Social from '../Social';

const links = [
  { id: '1', name: 'Об авторе', path: '/about' },
  { id: '2', name: 'Проекты', path: '/projects' },
  { id: '3', name: 'Консультации', path: '/consultations' },
];

const Footer = () => {
  return (
    <footer>
      <Container className="footer pt-8 px-5 pb-[104px]  md:pt-16 md:px-16 md:pb-[108px]   lg:pt-14 lg:pb-32 lg:px-[152px]  md:flex-row md:text-base md:font-semibold  ">
        <div className="flex mb-16 md:mb-0 gap-x-6 md:gap-x-11 lg:gap-x-8 items-start  ">
          <Image src="/logo.svg" alt="alt" width={64} height={64} />
          <div>
            <p className="mb-4">Мы всегда на связи:</p>
            <p className="mb-4">lovebook@gmail.com</p>
            <p>+38 (063) 123-45-74</p>
          </div>
        </div>

        <div className="w-[268px] md:w-[300px]  m-auto md:mr-0">
          <div>
            <ul className="flex text-center mb-9  ">
              {links.map(({ id, name, path }) => {
                return (
                  <li key={id} className="w-1/2 ">
                    {path ? (
                      <Link href={path}>
                        <a>{name}</a>
                      </Link>
                    ) : (
                      <p>{name}</p>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
          <Social />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
