import PropTypes from 'prop-types';
import Link from 'next/link';

import Container from '../reusable/Container';
import Social from '../Social';
import LogoIcon from 'public/logo-header.svg';

const Footer = ({ footer }) => {
  return (
    <footer className="bg-brand1  w-full">
      <Container className="footer pt-8 px-5 pb-6 md:pt-16 md:px-16  lg:pt-14  lg:px-[152px] md:text-base md:font-semibold">
        <div className="flex flex-col items-center md:flex-row md:justify-between md:items-start ">
          <div className="flex mb-16 md:mb-0 gap-x-6 md:gap-x-4 lg:gap-x-4 items-start  ">
            <div className="relative h-12 w-12 md:h-16 md:w-16  ">
              <LogoIcon />
            </div>

            <address>
              <p className="mb-4">{footer.connection}</p>
              <p className="mb-4">{footer.address}</p>
              <p className="mb-4">{footer.email}</p>
              <p>{footer.phoneNumber}</p>
            </address>
          </div>
          <div className="w-[268px] md:w-[305px] md:mr-0">
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
            <div className="text-center mt-[67px] md:text-right md:mt-[70px] font-medium text-sm">
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

Footer.propTypes = {
  footer: PropTypes.shape({
    policyName: PropTypes.string.isRequired,
    connection: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phoneNumber: PropTypes.string.isRequired,
    links: PropTypes.array.isRequired,
  }),
};
