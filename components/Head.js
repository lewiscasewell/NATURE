import NextHead from "next/head";
import PropTypes from "prop-types";

const Head = ({ title, description }) => {
  return (
    <NextHead>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} key="title" />
      <meta property="og:description" content={description} />
      <link rel="manifest" href="/manifest.json" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/img/icons/192.png" />
      <meta name="apple-mobile-web-app-status-bar" content="#aa7700" />
      <meta name="theme-color" content="#fff" />{" "}
    </NextHead>
  );
};

export default Head;
