import styled from "styled-components";
import Head from "next/head";
import classes from "./MainLayout.module.css";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className={classes.mainLayout}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Help you find the nearest clinic" />
        <meta name="og:title" content="Clinics" />
      </Head>
      {children}
    </div>
  );
};

export default MainLayout;
