import Collapse from '../reusable/Collapse';

const AccordionBody = ({ Component, data, open = false }) => {
  return (
    <Collapse open={open} withoutButton maxHeight={0}>
      <Component data={data} />
    </Collapse>
  );
};

export default AccordionBody;
