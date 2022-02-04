import { ChakraProvider } from "@chakra-ui/react";
import Head from "../components/Head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Head
        title="NATURE"
        description="Here are some nature pics from Reddit that you might not have seen before."
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
