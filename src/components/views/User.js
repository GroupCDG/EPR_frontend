import React from 'react';
import styled from 'styled-components';
import globalState from 'globalState/index';
import { useState as useGlobalState } from '@hookstate/core';

const Wrapper = styled.div``;

const Component = () => {
  const global = useGlobalState(globalState);
  const { user } = global.get();
  console.log('user');

  return <Wrapper>{user && user.name}</Wrapper>;
};

Component.displayName = 'User';

export default Component;
