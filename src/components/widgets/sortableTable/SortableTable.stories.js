import React from 'react'
import TableComponent from './SortableTable'

const headerMap = {
  priority: 'Priority',
  name: 'Name',
  nhsNum: 'NHS num',
  dob: 'D.o.B.',
}

const tableData = Array.from(Array(10)).map(() => ({
  priority: parseInt(Math.random() * 3 + 1, 10),
  name: 'John White',
  nhsNum: parseInt(Math.random() * 20000000, 10),
  dob: new Date(parseInt(Math.random() * 999999999999, 10))
    .toLocaleString()
    .split(',')[0],
}))

export default {
  title: 'Widgets/Sortable Table',
  componenet: TableComponent,
  argTypes: {
    onSort: {
      action: 'sort',
      table: {
        disable: true,
      },
    },
  },
}

const SortableTable = (argTypes) => {
  const [orderBy, setOrderBy] = React.useState()

  function handleSort(values) {
    // logging the action
    argTypes.onSort([...values].map((val) => val[1]))

    // passing the same values to the table
    setOrderBy(values)
  }
  return (
    <TableComponent
      data={tableData}
      headerMap={headerMap}
      defaultOrder={orderBy}
      onSort={handleSort}
    />
  )
}

export { SortableTable }
