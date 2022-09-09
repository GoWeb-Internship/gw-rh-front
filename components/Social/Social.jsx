import { FaInstagram, FaTelegramPlane } from 'react-icons/fa';
import { RiFacebookCircleLine } from 'react-icons/ri';

const socialIcons = [
  { id: '1', icon: <FaInstagram size={40} />, link: '/' },
  { id: '2', icon: <RiFacebookCircleLine size={40} />, link: '/' },
  { id: '3', icon: <FaTelegramPlane size={40} />, link: '/' },
];

const Social = () => {
  return (
    <ul className="flex justify-center gap-x-10 md:gap-x-[62px] md:justify-end lg:gap-x-16 ">
      {socialIcons.map(({ id, icon, link }) => {
        return (
          <li key={id}>
            <a
              href={link}
              className="flex justify-center items-center  rounded-full   "
            >
              {icon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default Social;
