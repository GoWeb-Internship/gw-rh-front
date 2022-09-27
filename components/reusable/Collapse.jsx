import { useEffect, useRef, useState } from 'react';

const getMaxHeight = height => (!height ? '1000px' : `${height + 100}px`);

const Collapse = ({
  children,
  maxHeight = 252,
  className = '',
  translate,
  withoutButton = false,
  open,
}) => {
  const { readMore, readLess } = translate;
  const [containerHeight, setContainerHeight] = useState(0);
  const [showBlock, setShowBlock] = useState(false);
  const container = useRef(null);

  useEffect(() => {
    if (!container.current) return;
    setContainerHeight(container?.current?.children[0].offsetHeight ?? 0);
  }, []);

  useEffect(() => {
    if (open === undefined) return;
    setShowBlock(open);
  }, [open]);

  const styles = {
    maxHeight: showBlock ? getMaxHeight(containerHeight) : `${maxHeight}px`,
    padding: showBlock ? null : 0,
  };

  return (
    <div>
      <div
        ref={container}
        style={styles}
        className={[
          'transition-[max-height] duration-500 overflow-hidden relative',
          className,
        ].join(' ')}
      >
        {children}
        <div
          className={`h-12 gradient w-full bottom-0 transition-transform duration-500 absolute ${
            showBlock ? 'translate-y-12' : ''
          } left-0 z-10`}
        ></div>
      </div>
      {!withoutButton && (
        <button
          type="button"
          className="text-lg leading-[21px] font-semibold text-brand1 underline flex mr-auto py-3"
          onClick={() => {
            setShowBlock(p => !p);
          }}
        >
          {!showBlock ? `${readMore}` : `${readLess}`}
        </button>
      )}
    </div>
  );
};

export default Collapse;
