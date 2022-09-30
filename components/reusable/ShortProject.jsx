import ReactMarkdown from 'react-markdown';

import useTranslations from 'hooks/useTranslations.js';

import Button from 'components/reusable/Button';
import Head from 'components/reusable/Head';

import ProjectsBg from 'public/projectsBg.svg';
import LinkToBook from './LinkToBook';

const ShortProject = ({ data, link }) => {

  const { linkToBook, signToProjectBtn, moreBtn } = useTranslations([
    'linkToBook',
    'signToProjectBtn',
    'moreBtn',
  ]);

  return (
    <li className="relative flex mb-8 md:mb-16 lg:mb-[124px] last:mb-0 lg:even:flex-row-reverse [&_svg]:even:-scale-x-100 [&_svg]:even:left-0">
        <ProjectsBg className="hidden lg:block absolute -z-10 bottom-0 right-0" />
      <div className="lg:w-[656px]">
        <Head title={data.attributes.title} Tag="h3" className="!mb-2 text-t2444" />
        <p className="text-blue mb-4 md:mb-6">{data.attributes.projectShort.projectIdea}</p>
        <ReactMarkdown className="mb-7 md:mb-14 prose">
          {data.attributes.projectShort.projectDescription}
        </ReactMarkdown>
        {data.attributes.projectShort.showLink && (
          <LinkToBook className="mb-8 md:mb-14" text={linkToBook} link={link}/>
        )}
        <div className="flex flex-col space-y-5 md:flex-row md:space-y-0 md:space-x-12 lg:space-x-12">
          <Button
            linkTo={{
              pathname: '/contact-us',
              query: { clickFrom: `${signToProjectBtn}` },
            }}
            text={signToProjectBtn}
          />
          <Button
            linkTo={`/projects/${data.attributes.slug}`}
            text={moreBtn}
            buttonTheme="secondary"
          />
        </div>
      </div>
    </li>
  );
};

export default ShortProject;
