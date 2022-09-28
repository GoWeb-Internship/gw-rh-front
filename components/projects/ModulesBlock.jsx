import Container from '../reusable/Container';
import Modules from '../Modules/Modules';

const ModulesBlock = ({ data }) => {
  const { module, page_module } = data;

  return (
    <section className="sections-py">
      <Container>
        <h2 className="visually-hidden">{page_module}</h2>
        {!!module.length && (
          <Modules
            modules={module}
            mediaOptions={{ mobile: 2, tablet: 2, desktop: 4, fullHd: 4 }}
          />
        )}
      </Container>
    </section>
  );
};

export default ModulesBlock;
