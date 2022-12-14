import AccodrionIcon from './AccodrionIcon';
import Container from '../reusable/Container';
import { useRef } from 'react';

const AccordionHeader = ({ title, idx, open, onClick }) => {
  const buttonRef = useRef(null);

  const handleClick = () => {
    onClick(idx);
    setTimeout(() => {
      buttonRef.current?.scrollIntoView({
        block: 'start',
      });
    }, 750);
  };

  return (
    <button
      type="button"
      className="py-4 md:py-9 bg-brand2 shadow-accordion w-full"
      onClick={handleClick}
      ref={buttonRef}
    >
      <Container className="flex justify-between items-center ">
        <span className="font-semibold text-light text-left text-t2444 md:text-28 uppercase">
          {title}
        </span>
        <AccodrionIcon open={open} />
      </Container>
    </button>
  );
};

export default AccordionHeader;
