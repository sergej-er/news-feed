import { useRouter } from 'next/router';
import { Pagination } from 'antd';

const Paginator = ({ country, category, pageNumber }) => {
  const router = useRouter();

  function handleChange(pageNumber) {
    router.push(`/feed/${country}/${category}/${pageNumber}`);
  }

  return (
    <Pagination
      current={pageNumber}
      total={50}
      onChange={handleChange}
      style={{ marginBottom: 25 }}
    />
  );
};

export default Paginator;
