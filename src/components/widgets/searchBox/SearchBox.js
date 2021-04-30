import React from 'react'
import PropTypes from 'prop-types'
import Input from 'components/base/input'
import { ReactComponent as SearchIcon } from 'assets/icons/magnifier.svg'
import WrapperSt from './SearchBox.style'

const SearchBox = ({ className, onSearch, placeholder, defaultValue }) => {
  const classes = ['SearchBox']
  if (className) classes.push(className)

  function onSubmit(e) {
    e.preventDefault()
    onSearch(e.target.keyword.value)
  }
  return (
    <WrapperSt onSubmit={onSubmit} className={classes.join(' ')}>
      <Input
        name="keyword"
        type="text"
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
      <button type="submit">
        <SearchIcon />
      </button>
    </WrapperSt>
  )
}

SearchBox.displayName = 'SearchBox'

SearchBox.propTypes = {
  className: PropTypes.string,
  onSearch: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
}

SearchBox.defaultProps = {
  className: null,
  placeholder: null,
  defaultValue: null,
}

export default SearchBox
