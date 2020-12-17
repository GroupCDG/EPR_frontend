import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.page.maxWidth}px;
  margin: auto;
  min-height: 100%;
  padding: 0 ${({ theme }) => theme.spacer * 2}px;
`;

const OneCol = ({ className, children }) => {
  const classes = ['OneCol'];
  if (className) classes.push(className);

  return <Wrapper className={classes.join(' ')}>{children}</Wrapper>;
};

OneCol.displayName = 'OneCol';

OneCol.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

OneCol.defaultProps = {
  className: null,
};

export default OneCol;

export const Row = styled.div`
  margin-bottom: ${({ theme }) => theme.spacer * 4}px;
`;
