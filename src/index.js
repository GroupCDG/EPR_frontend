import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from 'theme/Baseline';
import { Typography } from 'theme/default';
import axios from 'axios';
import { SWRConfig } from 'swr';
import App from './App';

// swr global configuration
const swrConfig = {
  fetcher: (url) => axios.get(url).then((res) => res.data),
};

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline Typography={Typography} />
    <SWRConfig value={swrConfig}>
      <App />
    </SWRConfig>
  </React.StrictMode>,
  document.getElementById('root')
);
