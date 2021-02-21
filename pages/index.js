import MainLayout from '../layout/MainLayout';
import { Typography } from 'antd';

export default function Home() {
  const { Title, Link } = Typography;
  return (
    <MainLayout>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <Title>News Feed</Title>
        <Title level={5}>Powered by</Title>
        <Title level={5}>
          <Link href='https://nextjs.org/'>Next.js</Link> &{' '}
          <Link href='https://newsapi.org/'>NewsAPI</Link>
        </Title>
      </div>
      <Link href='https://github.com/sergej-er/news-feed'>GitHub</Link>
    </MainLayout>
  );
}
