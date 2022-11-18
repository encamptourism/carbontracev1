import '../styles/default.css';
import '../styles/style.css';
import '../styles/responsive.css';
import Loader from "../components/common/Loading";

function MyApp({ Component, pageProps }) {
return (
  <>
  <Loader/>
  <Component {...pageProps} />
  </>
  )
}

export default MyApp
