import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import OneCol, { Row } from 'layouts/OneCol'

import useGlobalState from 'globalState'

import Button from 'components/base/button'
import Paper from 'components/base/paper'
import { ReactComponent as Icon } from 'assets/icons/right_arrow.svg'

const Wrapper = styled.div``

const Home = ({ className }) => {
  const classes = ['Home']
  const { app } = useGlobalState()
  const { name } = app.get()

  if (className) classes.push(className)

  return (
    <Wrapper className={classes.join(' ')}>
      <OneCol>

        <Row>
          <h1>Community Eycare</h1>
          <Paper>
            <Button>
              Alessio <Icon />
            </Button>
            <Button secondary>Alessio</Button>
          </Paper>
        </Row>
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
