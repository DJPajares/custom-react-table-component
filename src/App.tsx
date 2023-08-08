import React, { useState, CSSProperties } from 'react';
import Table from './components/Table';
import type { TableRow } from './types';

const data: TableRow[] = [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Mario Kart', age: 99, city: 'Marioland' }
];

const columns = [
  {
    key: 'checkbox',
    value: ''
  },
  {
    key: 'id',
    value: 'ID'
  },
  {
    key: 'name',
    value: 'Name'
  },
  {
    key: 'age',
    value: 'Age'
  },
  {
    key: 'city',
    value: 'City'
  }
];

const App = () => {
  const [sortedData, setSortedData] = useState(data);
  const [selectedRow, setSelectedRow] = useState(null);

  const handleSort = (column: string, ascending?: boolean) => {
    const sorted = [...data].sort((a, b) => {
      const aValue = a[column] ?? '';
      const bValue = b[column] ?? '';

      if (aValue === bValue) return 0;

      if (ascending) {
        return aValue > bValue ? -1 : 1;
      } else {
        return aValue < bValue ? -1 : 1;
      }
    });

    setSortedData(sorted);
  };

  const handleRowSelect = (row: TableRow) => {
    console.log('App.tsx - handleRowSelect', row);
    // setSelectedRow(row)
    // console.log('asd', sortedData[row])
  };

  return (
    <div style={styles.homeStyle as CSSProperties}>
      <h1>Table Demo</h1>
      <Table
        data={sortedData}
        columns={columns}
        onSort={handleSort}
        onRowSelect={handleRowSelect}
        isSelectable
        isMultiSelect
      />
    </div>
  );
};

const styles = {
  homeStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
};

export default App;
