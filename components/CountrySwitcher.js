import { Select } from 'antd';
import { useRouter } from 'next/router';

const { Option } = Select;

const CountrySwitcher = ({ category, country, setCountry }) => {
  const router = useRouter();

  function handleChange(value) {
    setCountry(value);
    router.push(`/feed/${value}/${category ? category : 'all'}/1`);
  }

  return (
    <Select style={{ width: 120 }} onChange={handleChange} value={country}>
      <Option value='us'>USA</Option>
      <Option value='ru'>Russia</Option>
      <Option value='de'>Germany</Option>
    </Select>
  );
};

export default CountrySwitcher;
