import '../styles/global.css';

import { ChallengeProvider } from '../contexts/ChallengeContext';
import { useState } from 'react';

function MyApp({ Component, pageProps }) {


  return (
    <ChallengeProvider>
      <Component {...pageProps} />
    </ChallengeProvider>
  )
}

export default MyApp
