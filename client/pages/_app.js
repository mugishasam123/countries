import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import apollo_client from "../config/aplollo-client";
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo_client}>
      <ToastContainer/>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
