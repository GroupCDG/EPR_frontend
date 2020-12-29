import React from 'react';
import styled from 'styled-components';
// import globalState from 'globalState/index';
// import { useState as useGlobalState } from '@hookstate/core';
import useSWR from 'swr';
import PropTypes from 'prop-types';

const Wrapper = styled.div``;

const Component = ({ className }) => {
  const { data } = useSWR('https://api.mocki.io/v1/b043df5a');

  const classes = ['UserList'];
  if (className) classes.push(className);

  return (
    <Wrapper className={classes.join(' ')}>
      {data && data.map((d) => <div>{d.name}</div>)}
    </Wrapper>
  );
};

Component.displayName = 'UserList';
Component.propTypes = {
  className: PropTypes.string,
};

Component.defaultProps = {
  className: '',
};

export default Component;
