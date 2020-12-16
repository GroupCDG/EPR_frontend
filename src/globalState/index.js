import { createState, useState as useGlobalState } from '@hookstate/core'

const initialState = {
  // set here the initial values
  app: {
    name: 'test app',
  },
}
const globalState = createState(initialState)

export default () => useGlobalState(globalState)
