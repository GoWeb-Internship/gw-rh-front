import Container from 'components/reusable/Container.jsx';
import TreeIcon from 'public/tree.svg';
import Bird from 'public/bird.svg';
import TreeItem from './TreeItem';
import useTranslations from '../../hooks/useTranslations';

const positionConfig = [
  {
    slug: 'project-5',
    classes: 'md:left-0 md:top-[87px] lg:left-5',
  },
  {
    slug: 'project-3',
    classes: 'md:left-[480px] md:top-[200px] lg:left-[530px]',
  },
  {
    slug: 'project-4',
    classes: 'md:left-[280px] md:top-[200px] lg:left-[312px]',
  },
  {
    slug: 'project-2',
    classes: 'md:left-[256px] md:top-[350px] lg:left-[290px]',
  },
  {
    slug: 'project-6',
    classes: 'md:left-0 md:top-[200px] lg:left-5',
  },
  {
    slug: 'project-1',
    classes: 'md:left-[458px] md:top-[440px] lg:left-[506px] lg:top-[514px]',
  },
  {
    slug: 'project-7',
    classes: 'md:left-[268px] md:top-[542px] lg:left-[302px] lg:top-[600px]',
  },
];

const Tree = ({ projects }) => {
  const title = useTranslations('projectsBtn');
  return (
    <section className="py-8 md:pt-[86px] md:pb-[90px] lg:pt-[143px] lg:pb-[125px]">
      <Container className="pl-[63px] pr-0 md:px-0 w-full max-w-full overflow-hidden md:overflow-visible">
        <h2 className="visually-hidden">{title}</h2>
        <div className="relative md:pl-0 w-[500px] h-[436px] mx-auto md:w-[640px] md:h-[560px] lg:w-[712px] lg:h-[620px]">
          <Bird className="absolute  w-[38px] h-[57px] left-[86px] top-0 md:-translate-x-1/2 md:w-[60px]  md:h-[89px] md:-top-[18px] md:left-[12%] lg:w-[66px] lg:h-[97px] lg:-top-[18px] lg:left-[11%]" />
          <TreeIcon />
          <div className="absolute top-0 -left-[43px] h-full flex items-start flex-col justify-between md:block md:static">
            {positionConfig.map(({ slug, classes }) => {
              const project = projects.find(project => slug === project.slug);
              return (
                <TreeItem
                  key={slug}
                  label={project?.treeTitle ?? ''}
                  to={slug}
                  positionClasses={classes}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Tree;
