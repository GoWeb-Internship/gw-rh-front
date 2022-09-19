import { useState } from 'react';
// import classnames from 'classnames';
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  ThemeProvider,
} from '@material-tailwind/react';

import Container from '../reusable/Container';

const PlusMinusIcon = ({ id, open }) => {
  const classes =
    'absolute top-1/2 -translate-y-1/2 left-0 w-full h-[2px] shrink-0 duration-200 transition-transform bg-light';
  return (
    <div className={`${id === open ? 'rotate-180' : ''} relative h-8 w-8 `}>
      <div
        className={`${classes} rotate-90 ${id === open ? 'rotate-0' : ''}`}
      ></div>
      <div
        className={`${classes} rotate-180 ${id === open ? 'rotate-0' : ''}`}
      ></div>
    </div>
  );
};

const AccordionComponent = () => {
  const [open, setOpen] = useState(1);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <ThemeProvider>
      {[
        'методология курса',
        'Преимущества курса',
        'модули',
        'Видео семинаров',
        'Отзывы',
        'Стоимость',
      ].map((item, id) => (
        <>
          <Accordion open={open === 1 + id} icon={<></>} key={id}>
            <AccordionHeader
              onClick={() => handleOpen(1 + id)}
              className="py-9 bg-brand2 shadow-accordion"
            >
              <Container className="flex justify-between items-center">
                <p className="font-semibold text-light text-left text-[1.2rem] leading-[2.2rem] md:text-28">
                  {item.toUpperCase()}
                </p>{' '}
                <PlusMinusIcon id={1 + id} open={open} />
              </Container>
            </AccordionHeader>
            <AccordionBody>
              <Container>
                <section>
                  <h2> Were not always in the position that we w</h2>
                  <div>
                    Were not always in the position that we want to be at. Were
                    constantly growing. Were constantly making mistakes. Were
                    constantly trying to express ourselves and actualize our
                    dreams. Were not always in the position that we want to be
                    at. Were
                  </div>
                </section>
              </Container>
            </AccordionBody>
          </Accordion>
        </>
      ))}
    </ThemeProvider>
  );
};

export default AccordionComponent;
