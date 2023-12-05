
import React from 'react';

import Layout from '../components/layout/Layout';
import '../styles/globals.css';
import Footer from '../components/footer/footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
    <Layout>
      <Component {...pageProps} />
    </Layout>
      <Footer />
      </div>
  );
}
export default MyApp;
