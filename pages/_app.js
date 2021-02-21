import NProgress from 'nprogress';
import { useState } from 'react';
import CountryContext from '../components/CountryContext';
import CategoryContext from '../components/CategoryContext';
import '../styles/globals.css';
import 'nprogress/nprogress.css';
import { Router } from 'next/router';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function MyApp({ Component, pageProps }) {
  const [country, setCountry] = useState('us');
  const countryValue = { country, setCountry };
  const [category, setCategory] = useState('general');
  const categoryValue = { category, setCategory };

  return (
    <CountryContext.Provider value={countryValue}>
      <CategoryContext.Provider value={categoryValue}>
        <Component {...pageProps} />
      </CategoryContext.Provider>
    </CountryContext.Provider>
  );
}

export default MyApp;
