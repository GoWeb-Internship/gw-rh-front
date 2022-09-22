import { useState } from 'react';
import { Accordion, ThemeProvider } from '@material-tailwind/react';

import AccordionHeader from './AccordionHeader';
import MethodologyBlock from '../projects/MethodologyBlock';
import BenefitsBlock from '../projects/BenefitsBlock';
import ModulesBlock from '../projects/ModulesBlock';
import SeminarsBlock from '../projects/SeminarsBlock';
import ReviewsBlock from '../projects/ReviewsBlock';
import PriceBlock from '../projects/PriceBlock';
import AccordionBody from './AccordionBody';

const config = {
  methodology: MethodologyBlock,
  benefit: BenefitsBlock,
  modules_section: ModulesBlock,
  seminar: SeminarsBlock,
  review: ReviewsBlock,
  price: PriceBlock,
};

const theme = {
  accordion: {
    styles: {
      base: {
        body: {
          padding: 'pt-0 pb-[100px]',
        },
        header: {
          initial: {
            padding: 'py-9',
          },
          active: {
            padding: 'py-9',
          },
        },
      },
    },
  },
};

const AccordionComponent = ({ accordionData }) => {
  const [open, setOpen] = useState(0);

  const handleOpen = value => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <ThemeProvider value={theme}>
      {accordionData.map(
        ({ pageModuleTitle, pageModuleIdentifier, ...data }, idx) => (
          <Accordion
            open={open === 1 + idx}
            icon={<></>}
            key={pageModuleIdentifier}
          >
            <AccordionHeader
              title={pageModuleTitle}
              open={open}
              idx={idx}
              onClick={() => handleOpen(1 + idx)}
            />
            <AccordionBody
              Component={config[pageModuleIdentifier]}
              data={data}
            />
          </Accordion>
        ),
      )}
    </ThemeProvider>
  );
};

export default AccordionComponent;
