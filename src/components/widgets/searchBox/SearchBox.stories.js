import React from 'react'
import SearchBoxComponent from '.'

export default {
  title: 'Widgets/Search Box',
  argTypes: {
    onSearch: {
      action: 'on search',
    },
    placeholder: {
      defaultValue: 'Keyword',
      control: {
        type: 'text',
      },
    },
    defaultValue: {
      control: {
        type: 'text',
      },
    },
  },
}

const SearchBox = (args) => <SearchBoxComponent {...args} />

export { SearchBox }
