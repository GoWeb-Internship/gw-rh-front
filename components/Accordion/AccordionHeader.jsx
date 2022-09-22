import { AccordionHeader as Head } from '@material-tailwind/react';
import AccodrionIcon from './AccodrionIcon';
import Container from '../reusable/Container';

const AccordionHeader = ({ title, idx, open, onClick }) => {
  return (
    <Head onClick={onClick} className="py-9 bg-brand2 shadow-accordion">
      <Container className="flex justify-between items-center">
        <span className="font-semibold text-light text-left text-[1.2rem] leading-[2.2rem] md:text-28 uppercase">
          {title}
        </span>
        <AccodrionIcon idx={1 + idx} open={open} />
      </Container>
    </Head>
  );
};

export default AccordionHeader;
