import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer';
import useMedia from '../../hooks/useMedia';
import { getMediaQueries } from '../../helpers/mediaServices';
import { PageFormatContext } from '../../context/PageFormatContext';
import { TranslationContext } from '../../context/TranslationContext';

const mediaQueries = getMediaQueries();

const Layout = ({ children, ...props }) => {
  const pageFormat = useMedia(
    Object.values(mediaQueries),
    Object.keys(mediaQueries),
    null,
  );

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
