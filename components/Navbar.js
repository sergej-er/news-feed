import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';
import { Menu } from 'antd';
import { HomeOutlined, ContainerOutlined } from '@ant-design/icons';
import CategoryContext from './CategoryContext';
import CountryContext from './CountryContext';

export const Navbar = () => {
  const router = useRouter();
  const { country } = useContext(CountryContext);
  const { category } = useContext(CategoryContext);
  const [current, setCurrent] = useState('mail');

  useEffect(() => {
    const pathPos = router.asPath.split('/')[1];
    if (!pathPos) {
      setCurrent('home');
    } else {
      setCurrent(pathPos);
    }
  }, []);

  function handleClick(e) {
    setCurrent(e.key);
  }

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={[current]}
      mode='horizontal'
      style={{ display: 'flex', justifyContent: 'center' }}
      theme='dark'
    >
      <Menu.Item
        key='home'
        icon={<HomeOutlined style={{ fontSize: '16px' }} />}
        onClick={() => router.push('/')}
      >
        Home
      </Menu.Item>
      <Menu.Item
        key='feed'
        icon={<ContainerOutlined style={{ fontSize: '16px' }} />}
        onClick={() =>
          router.push(`/feed/${country}/${category ? category : 'general'}/1`)
        }
      >
        Feed
      </Menu.Item>
    </Menu>
  );
};
