import MainLayout from "@/components/layouts/MainLayout";
import "@/styles/globals.css";
import { client } from "@/db/apollo-client";
import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [render, setRender] = useState(false);

  useEffect(() => setRender(true), []);

  return (
    <MainLayout>
      <ApolloProvider client={client}>
        {render ? <Component {...pageProps} /> : <p>Error during loading</p>}
      </ApolloProvider>
    </MainLayout>
  );
}
