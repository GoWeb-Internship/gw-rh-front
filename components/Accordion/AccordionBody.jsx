import { AccordionBody as Body } from '@material-tailwind/react';
// import Collapse from '../reusable/Collapse';

const AccordionBody = ({ Component, data }) => {
  return (
    <Body>
      <Component data={data} />
    </Body>
  );
  // return (
  //   <div>
  //     <Component data={data} />
  //   </div>
  // );
};

export default AccordionBody;
