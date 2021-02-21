import { Navbar } from '../components/Navbar';
import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    // <div className='page-container'>
    //   <Navbar />
    //   {children}
    // </div>
    <Layout>
      <Header>
        <Navbar />
      </Header>
      <Content className='page-container'>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
