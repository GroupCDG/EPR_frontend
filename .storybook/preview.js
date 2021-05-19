import React from 'react'
import { addDecorator } from '@storybook/react'
import CssBaseline from 'theme/Baseline'
import { Typography } from 'theme/Default'

addDecorator((storyFn) => {
  return (
    <>
      <CssBaseline Typography={Typography} />
      {storyFn()}
    </>
  )
})

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
}
