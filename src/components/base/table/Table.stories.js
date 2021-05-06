import React from 'react'
import TableComponent from './Table'

const tableHead = ['Priority', 'Name', 'NHS num', 'D.o.B.']

const item = ['Urgent', 'John White', 1, '05/11/1980']

const tableBody = Array.from(Array(10)).map(() => [
  item[0],
  item[1],
  parseInt(Math.random() * 20000000, 10),
  item[3],
])

export default {
  title: 'Base/Table',
  componenet: TableComponent,
}

const Table = () => <TableComponent body={tableBody} head={tableHead} />

export { Table }
