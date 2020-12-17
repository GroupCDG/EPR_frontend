import React from 'react';
import styled from 'styled-components';
import globalState from 'globalState';
import { useState as useGlobalState } from '@hookstate/core';

let index = 0;
function getIndex() {
  index += 1;
  return index;
}

const Wrapper = styled.div``;

const Component = () => {
  const state = useGlobalState(globalState);
  const todos = state.todo.get();

  console.log('todo');

  React.useEffect(() => {
    const hnd = setInterval(() => {
      state.todo.merge([{ name: (Math.random() * 10).toFixed(2) }]);
    }, 3000);
    return () => {
      clearInterval(hnd);
    };
  }, [state]);

  return (
    <Wrapper>
      <ul>
        {todos.map((item) => (
          <li key={getIndex()}>{item.name}</li>
        ))}
      </ul>
    </Wrapper>
  );
};

Component.displayName = 'Todo';

export default Component;
