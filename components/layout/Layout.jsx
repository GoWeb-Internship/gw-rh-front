import Header from './Header/Header';
import Main from './Main';
import Footer from './Footer';

const Layout = ({ children, ...props }) => {
  return (
    <>
      <Header navData={props.navData} />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default Layout;

export const withLayout = Component => {
  const withLayoutComponent = props => {
    return (
      <Layout {...props}>
        <Component {...props} />
      </Layout>
    );
  };
  return withLayoutComponent;
};
