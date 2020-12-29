import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import OneCol, { Row } from 'layouts/OneCol';
import User from 'components/views/User';
import Todo from 'components/views/Todo';
import UserList from 'components/views/UserList';

import globalState from 'globalState';
import { useState as useGlobalState } from '@hookstate/core';

const Wrapper = styled.div``;

const Home = ({ className }) => {
  const classes = ['Home'];
  const state = useGlobalState(globalState);

  if (className) classes.push(className);

  React.useEffect(() => {
    const hnd = setInterval(() => {
      state.user.set({ name: Date.now() });
    }, 2000);

    return () => {
      clearInterval(hnd);
    };
  }, [state.user]);

  return (
    <Wrapper className={classes.join(' ')}>
      <OneCol>
        <Row>Some nice content here</Row>
        <Row>
          <User />
          <UserList />
          <Todo />
        </Row>
      </OneCol>
    </Wrapper>
  );
};

Home.displayName = 'Home';

Home.propTypes = {
  className: PropTypes.string,
};

Home.defaultProps = {
  className: null,
};

export default Home;
