import Layout from '../components/Layout';
import '../styles/globals.css'; // Ensure styles are imported if needed

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
export default MyApp;
