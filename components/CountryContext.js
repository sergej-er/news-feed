import React from 'react';

const CountryContext = React.createContext({
  country: 'us',
  setCountry: () => {},
});

export default CountryContext;
