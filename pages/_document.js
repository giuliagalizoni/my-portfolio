import { Html, Head, Main, NextScript } from 'next/document';
import { useRef } from 'react';
import { useScroll } from 'react-use';

export default function Document() {
  const scrollRef = useRef(null);
  const { x, y } = useScroll(scrollRef);

  console.log(x, y);

  return (
    <Html lang='en'>
      <Head>
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
      <body ref={scrollRef}>
        <script src='noflash.js' />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
