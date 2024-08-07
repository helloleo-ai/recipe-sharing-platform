import '../styles/globals.css';
import '@fontsource/roboto'; // Import Roboto font
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Handle route changes for authentication
  }, [router]);

  return (
    <AuthProvider>
      <Head>
        <title>Recipe Sharing Platform</title>
        <meta name="description" content="Discover and share delicious recipes with our Recipe Sharing Platform" />
        <meta property="og:title" content="Recipe Sharing Platform" />
        <meta property="og:description" content="Discover and share delicious recipes with our Recipe Sharing Platform" />
        <meta property="og:image" content="/previews/recipe-index.png" />
        <meta property="og:url" content="https://recipe-sharing-platform.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Recipe Sharing Platform" />
        <meta name="twitter:description" content="Discover and share delicious recipes with our Recipe Sharing Platform" />
        <meta name="twitter:image" content="/previews/recipe-index.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
