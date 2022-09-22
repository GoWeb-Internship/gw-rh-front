const Head = ({
  Tag = 'h2',
  title = '',
  showTitle = true,
  isColor,
  className,
}) => (
  <Tag
    className={
      !showTitle
        ? 'visually-hidden'
        : [
            'left-container text-t1828 tracking-[0.005em] font-semibold md:text-t2444 uppercase',
            className,
            isColor ? 'text-brand1' : '',
          ].join(' ')
    }
  >
    {title}
  </Tag>
);

export default Head;
