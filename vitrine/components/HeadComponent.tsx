import Head from "next/head";

const HeadComponent: React.FC = () => {
  return (
    <Head>
      <title>Mon resto chic</title>
      <meta name="description" content="Restaurent pour VIP" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadComponent;
