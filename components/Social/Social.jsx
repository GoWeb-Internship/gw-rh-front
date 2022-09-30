import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';
import PropTypes from 'prop-types';

const Social = ({ links }) => {
  const socialIcons = [
    { id: '1', Icon: FaInstagram, link: links.instagram },
    { id: '2', Icon: RiFacebookCircleLine, link: links.facebook },
    { id: '3', Icon: FaTelegramPlane, link: links.telegram },
  ];

  return (
    <ul className="flex justify-center gap-x-10 md:gap-x-[62px] md:justify-end lg:gap-x-16 ">
      {socialIcons.map(({ id, Icon, link }) => {
        return (
          <li key={id}>
            <a
              target="_blank"
              rel="noreferrer noopener nofollow"
              aria-label={links.instagram}
              href={link}
              className="flex justify-center items-center  rounded-full"
            >
              <Icon size={40} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Social;

Social.propTypes = {
  links: PropTypes.objectOf(PropTypes.string).isRequired,
};
