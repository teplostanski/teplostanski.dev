import '../styles/global.scss';

export default function App({ Component, pageProps }: {Component: any; pageProps: any}) {
  return <Component {...pageProps} />;
}