import { Navbar } from '../components/Navbar';
import { Layout } from 'antd';
import Head from 'next/head';

const { Header, Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout>
      <Head>
        <title>News Feed</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header>
        <Navbar />
      </Header>
      <Content className='page-container'>{children}</Content>
    </Layout>
  );
};

export default MainLayout;
