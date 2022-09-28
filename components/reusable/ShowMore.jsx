import { createContext, useContext, useEffect, useState } from 'react';
import useMedia from '../../hooks/useMedia';
import useTranslations from '../../hooks/useTranslations';
import ButtonShow from './ButtonShow';

const ShowMoreContext = createContext(0);

export const useShowMore = listData => {
  const itemsToShow = useContext(ShowMoreContext);

  const normalizedListData =
    itemsToShow !== -1 ? listData.slice(0, itemsToShow) : [...listData];

  return normalizedListData;
};

const defaultOptions = { mobile: 2, tablet: 2, desktop: 4, fullHd: 4 };

const ShowMore = ({
  children,
  mediaOptions = { mobile: 2, tablet: 4, desktop: 4, fullHd: 4 },
}) => {
  const [itemsToShow, setItemsToShow] = useState(-1);
  const [showAll, setShowAll] = useState(false);
  const pageFormat = useMedia();
  const { readLess, readMore } = useTranslations(['readLess', 'readMore']);

  useEffect(() => {
    if (!pageFormat) return;
    setItemsToShow(mediaOptions[pageFormat] ?? defaultOptions[pageFormat]);
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFormat]);

  const showMore = () => {
    setItemsToShow(-1);
    setShowAll(true);
  };

  const showLess = () => {
    setItemsToShow(mediaOptions[pageFormat] ?? defaultOptions[pageFormat]);
    setShowAll(false);
  };

  const showBtnBlock = showAll || itemsToShow !== -1;

  return (
    <>
      <ShowMoreContext.Provider value={itemsToShow}>
        {children}

        {showBtnBlock && (
          <>
            {showAll ? (
              <ButtonShow
                onClick={showLess}
                className={'mt-7 md:mt-[60px] lg:mt-[84px]'}
              >
                {readLess}
              </ButtonShow>
            ) : (
              <ButtonShow
                onClick={showMore}
                className={'mt-7 md:mt-[60px] lg:mt-[84px]'}
              >
                {readMore}
              </ButtonShow>
            )}
          </>
        )}
      </ShowMoreContext.Provider>
    </>
  );
};

const withShowMore = Component => {
  const withShowMoreComponent = props => {
    return (
      <ShowMore {...props}>
        <Component {...props} />
      </ShowMore>
    );
  };
  return withShowMoreComponent;
};

export default withShowMore;
