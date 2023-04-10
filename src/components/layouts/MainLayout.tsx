import Head from "next/head";
import classes from "./MainLayout.module.css";
import Image from "next/image";
import Link from "next/link";
import Search from "../search/Search";

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
      <div className={classes.mainHeader}>
        <div>
          <Search />
        </div>
        <div>
          <Image
            width={40}
            height={40}
            src="/images/logo.png"
            alt="lambda_logo.png"
            priority
          />
        </div>
      </div>
      {children}
    </div>
  );
};

export default MainLayout;
