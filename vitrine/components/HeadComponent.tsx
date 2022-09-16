import Head from "next/head";

const HeadComponent: React.FC = () => {
  return (
    <Head>
      <title>Mon resto chic</title>
      <meta name="description" content="Restaurent pour VIP" />
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="flex.css" type="text/css" />
      <link rel="stylesheet" href="mediaqueries.css" type="text/css" />
      <link rel="stylesheet" href="animations.css" type="text/css" />
      <link rel="stylesheet" href="javascript.css" type="text/css" />
    </Head>
  );
};

export default HeadComponent;
