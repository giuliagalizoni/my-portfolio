import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link rel='icon' href='icons/favicon.ico' />
        <meta property='og:image' content='images/link-preview.png' />
        <meta
          property='og:description'
          content="Giulia Galizoni's web development portfolio"
        />
        <meta property='og:url' content='galizoni.com' />
        <meta property='og:type' content='portfolio' />
        <meta property='og:title' content='Giuia Galizoni' />
        <meta
          name='twitter:card'
          title='Giulia Galizoni'
          content='summary_large_image'
        />
        <meta
          property='twitter:description'
          content="Giulia Galizoni's web development portfolio"
        />

        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link
          rel='preconnect'
          href='https://fonts.gstatic.com'
          crossOrigin='true'
        />

        <link
          href='https://fonts.googleapis.com/css2?family=Domine:wght@400;500;600;700&family=Radio+Canada:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap'
          rel='stylesheet'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
