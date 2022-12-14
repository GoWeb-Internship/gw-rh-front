import { useState } from 'react';

import AccordionHeader from './AccordionHeader';
import MethodologyBlock from '../projects/MethodologyBlock';
import BenefitsBlock from '../projects/BenefitsBlock';
import ModulesBlock from '../projects/ModulesBlock';
import SeminarsBlock from '../projects/SeminarsBlock';
import ReviewsBlock from '../projects/ReviewsBlock';
import ContactBlock from '../projects/ContactBlock';
import PriceBlock from '../projects/PriceBlock';
import AccordionBody from './AccordionBody';

const config = {
  methodology: MethodologyBlock,
  benefit: BenefitsBlock,
  modules_section: ModulesBlock,
  seminar: SeminarsBlock,
  review: ReviewsBlock,
  price: PriceBlock,
  contact: ContactBlock,
};

const AccordionComponent = ({ accordionData }) => {
  const [open, setOpen] = useState([]);

  const handleClick = idx => {
    if (!open.includes(idx)) {
      setOpen(p => [...p, idx]);
    } else {
      setOpen(p => p.filter(i => i !== idx));
    }
  };

  return (
    <>
      {accordionData.map(
        ({ pageModuleTitle, pageModuleIdentifier, ...data }, idx) => (
          <div key={pageModuleIdentifier}>
            <AccordionHeader
              title={pageModuleTitle}
              idx={idx}
              onClick={handleClick}
              open={open.includes(idx)}
            />
            <AccordionBody
              Component={config[pageModuleIdentifier]}
              data={data}
              open={open.includes(idx)}
            />
          </div>
        ),
      )}
    </>
  );
};

export default AccordionComponent;
