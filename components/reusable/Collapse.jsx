import { useMemo } from 'react';
import { useEffect, useRef, useState } from 'react';
import useMedia from '../../hooks/useMedia';
import useTranslations from '../../hooks/useTranslations';

const getMaxHeight = height => (!height ? '1000px' : `${height + 100}px`);

const Collapse = ({
  children,
  maxHeight = 252,
  className = '',
  withoutButton = false,
  open,
}) => {
  const [containerHeight, setContainerHeight] = useState(0);
  const [showBlock, setShowBlock] = useState(false);
  const container = useRef(null);

  const pageFormat = useMedia();

  const { readMore, readLess } = useTranslations(['readMore', 'readLess']);

  useEffect(() => {
    if (!container.current) return;
    if (!pageFormat) return;
    setContainerHeight(container?.current?.children[0].offsetHeight ?? 0);
  }, [pageFormat]);

  useEffect(() => {
    if (open === undefined) return;
    setShowBlock(open);
  }, [open]);

  const styles = useMemo(
    () => ({
      maxHeight: showBlock ? getMaxHeight(containerHeight) : `${maxHeight}px`,
      padding: showBlock ? null : 0,
    }),
    [containerHeight, maxHeight, showBlock],
  );

  return (
    <>
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
          className="text-lg leading-[21px] font-semibold text-brand1 underline flex mr-auto py-3 hover:text-blue focus:text-blue transition-colors duration-200"
          onClick={() => {
            setShowBlock(p => !p);
          }}
        >
          {!showBlock ? `${readMore}` : `${readLess}`}
        </button>
      )}
    </>
  );
};

export default Collapse;
