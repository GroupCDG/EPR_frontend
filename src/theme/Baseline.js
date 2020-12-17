import React from 'react';
import { createGlobalStyle } from 'styled-components';
import 'normalize.css';
import PropTypes from 'prop-types';

const CssBaseline = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    height: 100%;
  }

  * {
    box-sizing: border-box;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

`;
const BaseLine = ({ Typography }) => (
  <>
    <CssBaseline />
    <Typography />
  </>
);

BaseLine.propTypes = {
  Typography: PropTypes.shape({}).isRequired,
};

BaseLine.displayName = 'Baseline';
export default BaseLine;
