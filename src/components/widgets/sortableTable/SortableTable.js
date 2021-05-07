import React from 'react'
import PropTypes from 'prop-types'
import Table from 'components/base/table'
import { ReactComponent as CloseIcon } from 'assets/icons/close.svg'
import { ReactComponent as DescendingIcon } from 'assets/icons/descending.svg'
import { WrapperSt } from './SortableTable.style'

const cellClassMap = new Map([
  [undefined, ''],
  [true, 'ascending'],
  [false, 'descending'],
])

const SortableTable = ({
  className,
  data,
  headerMap,
  onSort,
  defaultOrder,
}) => {
  const [orderBy, setOrderBy] = React.useState(defaultOrder)

  React.useLayoutEffect(() => {
    setOrderBy(defaultOrder)
  }, [defaultOrder])

  const headData = Object.keys(data[0])

  const classes = ['SortableTable']
  if (className) classes.push(className)

  // setting the cols order
  const colsMap = React.useMemo(() => {
    const tmpMap = new Map()
    orderBy?.forEach((o) => {
      tmpMap.set(o.id, o)
    })
    headData.forEach((o) => {
      if (!tmpMap.has(o)) tmpMap.set(o, { id: o, ascending: undefined })
    })
    return tmpMap
  }, [headData, orderBy])

  // building the table header
  const tableHead = React.useMemo(() => {
    function handleHeadClick({ id, value }) {
      return () => {
        const newOrder = new Map(orderBy)
        newOrder.set(id, { id, ascending: !value.ascending })

        onSort(newOrder)
      }
    }

    function removeOrderBy(id) {
      return () => {
        const newOrder = new Map(orderBy)
        newOrder.delete(id)
        onSort(newOrder)
      }
    }

    return [...colsMap].map(([id, value]) => {
      const cName = ['sortableTH']
      cName.push(cellClassMap.get(value.ascending))

      return {
        key: value,
        value: (
          <span className={cName.join(' ')}>
            {value.ascending !== undefined && (
              <button
                type="button"
                className="removeOrder"
                onClick={removeOrderBy(id)}
              >
                <CloseIcon />
              </button>
            )}

            <button
              type="button"
              className="colHeading"
              onClick={handleHeadClick({ id, value })}
            >
              {headerMap[value.id]}
              {value.ascending !== undefined && <DescendingIcon />}
            </button>
          </span>
        ),
      }
    })
  }, [colsMap, headerMap, orderBy, onSort])

  // table body
  const tableBody = React.useMemo(
    () =>
      data.map((item) =>
        [...colsMap].map(([key, value]) => {
          const cName = ['sortableTD']
          cName.push(value.ascending !== undefined ? 'sorted' : null)
          return <span className={cName.join(' ')}>{item[key]}</span>
        })
      ),
    [colsMap, data]
  )

  return (
    <WrapperSt className={classes.join(' ')}>
      <Table body={tableBody} head={tableHead} />
    </WrapperSt>
  )
}

SortableTable.displayName = 'SortableTable'

SortableTable.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  ),
  headerMap: PropTypes.arrayOf(PropTypes.shape({})),
  defaultOrder: PropTypes.instanceOf(Map),
  onSort: PropTypes.func,
}

SortableTable.defaultProps = {
  className: null,
  data: null,
  headerMap: null,
  defaultOrder: null,
  onSort: () => {},
}

export default SortableTable
