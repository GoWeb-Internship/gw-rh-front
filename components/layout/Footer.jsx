import Container from '../reusable/Container';
import Link from 'next/link';
import Social from '../Social';
import LogoIcon from 'public/logo-header.svg';

const Footer = ({ footer }) => {
  return (
    <footer>
      <Container className="footer pt-8 px-5 pb-[104px] md:pt-16 md:px-16 md:pb-[108px] lg:pt-14 lg:pb-32 lg:px-[152px] md:text-base md:font-semibold">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start ">
          <div className="flex mb-16 md:mb-0 gap-x-6 md:gap-x-11 lg:gap-x-8 items-start  ">
            <div className="relative h-12 w-12 md:h-16 md:w-16  ">
              <LogoIcon />
            </div>

            <div>
              <p className="mb-4">{footer.connection}</p>
              <p className="mb-4">{footer.address}</p>
              <p className="mb-4">{footer.email}</p>
              <p>{footer.phoneNumber}</p>
            </div>
          </div>
          <div className="w-[268px] md:w-[300px] md:mr-0">
            <div>
              <ul className="flex text-center mb-9  ">
                {footer.links.map(({ id, name, path }) => {
                  return (
                    <li key={id} className="w-1/2 ">
                      <Link href={path}>
                        <a>{name}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
            <Social />
            <div className="text-center mt-[67px] md:text-right md:mt-[70px]">
              <Link href="/policy">
                <a>{footer.policyName}</a>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
