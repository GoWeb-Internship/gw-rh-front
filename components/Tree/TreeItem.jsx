import Link from 'next/link';

const TreeItem = ({ positionClasses = '', label = '', to = '/' }) => {
  return (
    <Link href={`/projects/${to}`}>
      <a
        className={[
          'transition-colors duration-1200 md:animate-tree',
          'py-2 px-4 md:px-6 bg-treeBtn rounded-3xl font-semibold uppercase text-qqBase md:text-t1828 tracking-[0.005] block md:absolute hover:bg-treeBtnAccent focus:bg-treeBtnAccent',
          positionClasses,
        ].join(' ')}
      >
        {label}
      </a>
    </Link>
  );
};

export default TreeItem;
