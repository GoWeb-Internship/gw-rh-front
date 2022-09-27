import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer';
import useMediaCore from '../../hooks/useMediaCore';
import { getMediaQueries } from '../../helpers/mediaServices';
import { PageFormatContext } from '../../context/PageFormatContext';
import { TranslationContext } from '../../context/TranslationContext';
import { useEffect, useState } from 'react';

const mediaQueries = getMediaQueries();

const Layout = ({ children, ...props }) => {
  const [pageFormat, setFormat] = useState(null);

  const media = useMediaCore(
    Object.values(mediaQueries),
    Object.keys(mediaQueries),
    null,
  );

  useEffect(() => {
    if (!media) return;
    setFormat(media);
  }, [media]);

  return (
    <PageFormatContext.Provider value={pageFormat}>
      <TranslationContext.Provider value={props.translation}>
        <Header {...props} />
        <Main>{children}</Main>
        <Footer {...props} />
      </TranslationContext.Provider>
    </PageFormatContext.Provider>
  );
};

const withLayout = Component => {
  const withLayoutComponent = props => {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
  return withLayoutComponent;
};

export default withLayout;
