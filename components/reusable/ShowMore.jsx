import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import useMedia from '../../hooks/useMedia';
import useTranslations from '../../hooks/useTranslations';
import ButtonShow from './ButtonShow';

// const ShowMoreContext = createContext(0);
const ShowMoreContext = createContext({
  listDataLength: 0,
  itemsToShow: 0,
  changeListDataLength: () => {},
  changeItemsToShow: () => {},
});

export const useShowMore = (listData = []) => {
  const [normalizedListData, setNormalizedListData] = useState(listData);
  const {
    itemsToShow,
    listDataLength,
    changeListDataLength,
    changeItemsToShow,
  } = useContext(ShowMoreContext);

  useEffect(() => {
    if (!itemsToShow) return;
    const normalizedListData =
      listData.length > itemsToShow
        ? listData.slice(0, itemsToShow)
        : [...listData];
    setNormalizedListData(normalizedListData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [itemsToShow]);

  useEffect(() => {
    if (!listData.length) return;
    changeListDataLength(listData.length);
  }, [changeListDataLength, listData.length]);

  return {
    normalizedListData,
    itemsToShow,
    listDataLength,
    changeItemsToShow,
  };
};

const defaultOptions = { mobile: 2, tablet: 4, desktop: 4, fullHd: 4 };

const ShowMore = ({
  children,
  mediaOptions = { mobile: 2, tablet: 4, desktop: 4, fullHd: 4 },
  // listDataLength = -1,
}) => {
  const [showAll, setShowAll] = useState(false);
  const pageFormat = useMedia();
  const { readLess, readMore } = useTranslations(['readLess', 'readMore']);
  const { changeItemsToShow, listDataLength, itemsToShow } = useShowMore();

  useEffect(() => {
    if (!pageFormat) return;
    changeItemsToShow(mediaOptions[pageFormat] ?? defaultOptions[pageFormat]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pageFormat]);

  const showMore = () => {
    changeItemsToShow(listDataLength);
    setShowAll(true);
  };

  const showLess = () => {
    changeItemsToShow(mediaOptions[pageFormat] ?? defaultOptions[pageFormat]);
    setShowAll(false);
  };

  return (
    <>
      {children}

      {(listDataLength > itemsToShow || showAll) && (
        <>
          {showAll ? (
            <ButtonShow
              onClick={showLess}
              className={'block mx-auto mt-7 md:mt-[60px] lg:mt-[84px] lg:mx-0'}
            >
              {readLess}
            </ButtonShow>
          ) : (
            <ButtonShow
              onClick={showMore}
              className={'block mx-auto mt-7 md:mt-[60px] lg:mt-[84px] lg:mx-0'}
            >
              {readMore}
            </ButtonShow>
          )}
        </>
      )}
    </>
  );
};

const withShowMore = Component => {
  const WithShowMoreComponent = props => {
    const [listDataLength, setListDataLength] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(0);

    const changeListDataLength = useCallback(value => {
      setListDataLength(value);
    }, []);

    const changeItemsToShow = useCallback(value => {
      setItemsToShow(value);
    }, []);

    return (
      <ShowMoreContext.Provider
        value={{
          listDataLength,
          itemsToShow,
          changeListDataLength,
          changeItemsToShow,
        }}
      >
        <ShowMore {...props}>
          <Component {...props} />
        </ShowMore>
      </ShowMoreContext.Provider>
    );
  };
  return WithShowMoreComponent;
};

export default withShowMore;
