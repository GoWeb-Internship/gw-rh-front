const ProjectContentBox = ({ children, reverse }) => {
  return (
    <div
      className={[
        'lg:flex lg:justify-between lg:gap-x-6',
        reverse ? 'lg:flex-row-reverse' : '',
      ].join(' ')}
    >
      {children}
    </div>
  );
};

export default ProjectContentBox;
