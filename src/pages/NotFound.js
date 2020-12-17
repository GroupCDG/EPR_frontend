import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div``;

const NotFound = ({ className }) => {
  const classes = ['NotFound'];
  if (className) classes.push(className);

  return <Wrapper className={classes.join(' ')}>Page not found!</Wrapper>;
};

NotFound.displayName = 'NotFound';

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = {
  className: null,
};

export default NotFound;
