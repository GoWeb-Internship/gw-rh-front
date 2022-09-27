import { useContext } from 'react';
import { PageFormatContext } from '../context/PageFormatContext';

const useMedia = () => {
  const pageFormat = useContext(PageFormatContext);
  return pageFormat;
};

export default useMedia;
