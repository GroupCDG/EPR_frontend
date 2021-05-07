import React from 'react'

import { ReactComponent as PinIcon } from 'assets/icons/pin.svg'
import TabMenuComponent from './TabMenu'

export default {
  title: 'Base/Tab Menu',
}

const tabs = [
  {
    key: 'one',
    value: (
      <div
        style={{
          display: 'flex',
        }}
      >
        <PinIcon
          style={{
            marginRight: '4px',
          }}
        />
        One
      </div>
    ),
  },
  { key: 'two', value: 'Two' },
  { key: 'three', value: 'Three' },
]
const tabContent = [
  <h1>Some content here</h1>,
  <h1>Some content here 2</h1>,
  <h1>Some content here 3</h1>,
]
const defaultTabIndex = 1

const TabMenu = () => (
  <TabMenuComponent
    tabs={tabs}
    tabContent={tabContent}
    defaultTabIndex={defaultTabIndex}
  />
)

export { TabMenu }
