import '../styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Handle route changes for authentication
  }, [router]);

  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
