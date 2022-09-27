import { useState } from 'react';
import { Accordion, ThemeProvider } from '@material-tailwind/react';

import AccordionHeader from './AccordionHeader';
import MethodologyBlock from '../projects/MethodologyBlock';
import BenefitsBlock from '../projects/BenefitsBlock';
import ModulesBlock from '../projects/ModulesBlock';
import SeminarsBlock from '../projects/SeminarsBlock';
import ReviewsBlock from '../projects/ReviewsBlock';
import ContactBlock from '../projects/ContactBlock';
import PriceBlock from '../projects/PriceBlock';
import AccordionBody from './AccordionBody';
// import Container from '../reusable/Container';
// import AccodrionIcon from './AccodrionIcon';

const config = {
  methodology: MethodologyBlock,
  benefit: BenefitsBlock,
  modules_section: ModulesBlock,
  seminar: SeminarsBlock,
  review: ReviewsBlock,
  price: PriceBlock,
  contact: ContactBlock,
};

const theme = {
  accordion: {
    styles: {
      base: {
        body: {
          padding: 'py-0',
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

// const AccordionComponent2 = ({ accordionData }) => {
//   const [open, setOpen] = useState(0);

//   const handleOpen = value => {
//     setOpen(open === value ? 0 : value);
//   };

//   {
//     accordionData.map(
//       ({ pageModuleTitle, pageModuleIdentifier, ...data }, idx) => (
//         <div key={pageModuleIdentifier}>
//           <button className="py-9 flex justify-between items-center bg-brand2 shadow-accordion">
//             <Container>
//               <span className="font-semibold text-light text-left text-[1.2rem] leading-[2.2rem] md:text-28 uppercase">
//                 {pageModuleTitle}
//               </span>
//               <AccodrionIcon idx={1 + idx} open={open} />
//             </Container>
//           </button>
//           <AccordionBody Component={config[pageModuleIdentifier]} data={data} />
//         </div>
//       ),
//     );
//   }
// };
