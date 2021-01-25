import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import img404 from 'assets/png/404_2.png';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const NotFound = ({ className }) => {
  const classes = ['NotFound'];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      <img src={img404} alt="Sorry, page not found" />
    </Wrapper>
  );
};

NotFound.displayName = 'NotFound';

NotFound.propTypes = {
  className: PropTypes.string,
};

NotFound.defaultProps = {
  className: null,
};

export default NotFound;
