import { AccordionBody as Body } from '@material-tailwind/react';

const AccordionBody = ({ Component, data }) => {
  return (
    <Body>
      <Component data={data} />
    </Body>
  );
};

export default AccordionBody;
