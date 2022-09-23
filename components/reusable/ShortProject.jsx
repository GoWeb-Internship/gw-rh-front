import ReactMarkdown from 'react-markdown';

import Button from 'components/reusable/Button';
import Head from 'components/reusable/Head';

import ProjectsBg from 'public/projectsBg.svg';
import LinkToBook from './LinkToBook';

const ShortProject = ({ data, translation, nav }) => {
  return (
    <li className="relative flex mb-8 md:mb-16 lg:mb-[124px] last:mb-0 lg:even:flex-row-reverse [&_svg]:even:-scale-x-100 [&_svg]:even:left-0">
      <div className="lg:w-[656px]">
        <Head title={data.projectTitle} Tag="h3" className="!mb-2 text-t2444" />
        <p className="text-blue mb-4 md:mb-6">{data.projectIdea}</p>
        <ReactMarkdown className="mb-7 md:mb-14 prose">
          {data.projectDescription}
        </ReactMarkdown>
          {nav === 2 && <LinkToBook className="mb-8 md:mb-14"/>}
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-12 lg:space-x-12">
          <Button linkTo="/contuct-us" text={translation.signToConsultBtn} />
          <Button
            linkTo={`/projects/project-${nav}`}
            text={translation.moreBtn}
            buttonTheme="secondary"
          />
        </div>
      </div>
      <ProjectsBg className="hidden lg:block absolute -z-10 bottom-0 right-0" />
    </li>
  );
};

export default ShortProject;
