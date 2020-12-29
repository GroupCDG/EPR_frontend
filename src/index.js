import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from 'theme/Baseline';
import { ThemeProvider } from 'styled-components';
import defaultTheme, { Typography } from 'theme/Default';
import axios from 'axios';
import { SWRConfig } from 'swr';
import App from './App';

const swrConfig = {
  fetcher: (url) => axios.get(url).then((res) => res.data),
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline Typography={Typography} />
      <SWRConfig value={swrConfig}>
        <App />
      </SWRConfig>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
