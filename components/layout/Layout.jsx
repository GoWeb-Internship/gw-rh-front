import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header {...props} />
      <Main>{children}</Main>
      <Footer />
    </>
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
