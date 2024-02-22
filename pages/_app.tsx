import { SessionProvider } from 'next-auth/react';
import { AppProps } from 'next/app';
import { Session } from 'next-auth'; // Import the Session type from next-auth

interface CustomAppProps extends AppProps {
  pageProps: {
    session?: Session | null; // Define the session property with the appropriate type
    // Add other properties if needed
  };
}

const App = ({ Component, pageProps }: CustomAppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
};

export default App;
