import { Select } from 'antd';
import React from 'react';
import { useRouter } from 'next/router';

const { Option } = Select;

const CategorySelector = ({ country, category, setCategory }) => {
  const router = useRouter();

  function handleChange(value) {
    setCategory(value);
    router.push(`/feed/${country}/${value ? value : 'general'}/1`);
  }

  function handleClear() {
    setCategory('general');
    router.push(`/feed/${country}/general/1`);
  }

  return (
    <Select
      defaultValue='general'
      onChange={handleChange}
      onClear={handleClear}
      value={category}
      allowClear
    >
      <Option value='business'>Business</Option>
      <Option value='entertainment'>Entertainment</Option>
      <Option value='general'>General</Option>
      <Option value='health'>Health</Option>
      <Option value='science'>Science</Option>
      <Option value='sports'>Sports</Option>
      <Option value='technology'>Technology</Option>
    </Select>
  );
};

export default CategorySelector;
