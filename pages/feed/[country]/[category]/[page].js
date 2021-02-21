import { useContext } from 'react';
import { Space, BackTop, Typography } from 'antd';
import MainLayout from '../../../../layout/MainLayout';
import styles from '../../../../styles/Feed.module.css';
import Paginator from '../../../../components/Paginator';
import Post from '../../../../components/Post';
import CountryContext from '../../../../components/CountryContext';
import CountrySwitcher from '../../../../components/CountrySwitcher';
import CategorySelector from '../../../../components/CategorySelector';
import CategoryContext from '../../../../components/CategoryContext';

export default function Feed({ country, category, pageNumber, articles }) {
  const { setCountry } = useContext(CountryContext);
  const { setCategory } = useContext(CategoryContext);

  const { Title } = Typography;

  return (
    <MainLayout>
      <div className={styles.main}>
        <Title>News Feed</Title>
        <div className={styles.filter}>
          <CountrySwitcher
            category={category}
            country={country}
            setCountry={setCountry}
          />
          <CategorySelector
            country={country}
            category={category}
            setCategory={setCategory}
          />
        </div>
        <Space direction='vertical' size={32} align='center'>
          {articles.map((article, index) => (
            <Post article={article} key={index} />
          ))}
          <Paginator
            country={country}
            category={category}
            pageNumber={pageNumber}
          />
        </Space>
      </div>
      <BackTop />
    </MainLayout>
  );
}

export const getServerSideProps = async (pageContext) => {
  const country = pageContext.query.country;
  const category = pageContext.query.category;
  const pageNumber = pageContext.query.page;

  if (!pageNumber || pageNumber < 1 || pageNumber > 5) {
    return {
      props: {
        articles: [],
        country: 'us',
        category: 'general',
        pageNumber: 1,
      },
    };
  }

  const apiResponse = await fetch(
    `http://newsapi.org/v2/top-headlines?country=${country}&pageSize=5&page=${pageNumber}&category=${category}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.NEXT_NEWS_API_KEY}`,
      },
    }
  );

  const apiJson = await apiResponse.json();

  const { articles } = apiJson;

  return {
    props: {
      articles,
      country,
      category,
      pageNumber: Number.parseInt(pageNumber),
    },
  };
};
