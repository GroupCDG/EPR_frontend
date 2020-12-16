import { createState } from '@hookstate/core';

const initialState = {
  user: undefined,
  todo: [],
};
const globalState = createState(initialState);
export default globalState;
