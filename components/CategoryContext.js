import React from 'react';

const CategoryContext = React.createContext({
  category: 'general',
  setCategory: () => {},
});

export default CategoryContext;
