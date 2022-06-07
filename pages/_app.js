import Head from 'next/head';
import NavbarDesktop from '../components/Navbar/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <NavbarDesktop />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
