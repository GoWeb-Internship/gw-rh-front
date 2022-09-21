import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';

const socialIcons = [
  { id: '1', Icon: FaInstagram, link: '/' },
  { id: '2', Icon: RiFacebookCircleLine, link: '/' },
  { id: '3', Icon: FaTelegramPlane, link: '/' },
];

const Social = () => {
  return (
    <ul className="flex justify-center gap-x-10 md:gap-x-[62px] md:justify-end lg:gap-x-16 ">
      {socialIcons.map(({ id, Icon, link }) => {
        return (
          <li key={id}>
            <a
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
