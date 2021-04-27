import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import OneCol, { Row } from 'layouts/OneCol'

import useGlobalState from 'globalState'

const Wrapper = styled.div``

const Home = ({ className }) => {
  const classes = ['Home']
  const { app } = useGlobalState()
  const { name } = app.get()

  if (className) classes.push(className)

  return (
    <Wrapper className={classes.join(' ')}>
      <OneCol>
        <Row>Some nice content here</Row>
        <Row>{name}</Row>
      </OneCol>
    </Wrapper>
  )
}

Home.displayName = 'Home'

Home.propTypes = {
  className: PropTypes.string,
}

Home.defaultProps = {
  className: null,
}

export default Home
