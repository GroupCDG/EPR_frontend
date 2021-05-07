import React from 'react'
import PropTypes from 'prop-types'
import { WrapperSt, THeadSt, TBodySt } from './Table.style'

const Table = ({ className, head, body }) => {
  const classes = ['Table']
  if (className) classes.push(className)

  return (
    <WrapperSt className={classes.join(' ')}>
      <THeadSt>
        <tr>
          {head.map((item, index) => {
            const dummyKey = Date.now() + index

            const element =
              typeof item === 'object' ? (
                <th key={item.key}>{item.value}</th>
              ) : (
                <th key={dummyKey}>
                  <span className="defaultTH">{item}</span>
                </th>
              )

            return element
          })}
        </tr>
      </THeadSt>
      <TBodySt>
        {body.map((item, i) => {
          const trKey = Date.now() + i
          return (
            <tr key={trKey}>
              {item.map((value, index) => {
                const tdKey = Date.now() + index
                return (
                  <td key={tdKey}>
                    {typeof value === 'object' ? (
                      value
                    ) : (
                      <span className="defaultTD">{value}</span>
                    )}
                  </td>
                )
              })}
            </tr>
          )
        })}
      </TBodySt>
    </WrapperSt>
  )
}

Table.displayName = 'Table'

Table.propTypes = {
  className: PropTypes.string,
  head: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])
  ),
  body: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.node])
    )
  ),
}

Table.defaultProps = {
  className: null,
  head: null,
  body: null,
}

export default Table
