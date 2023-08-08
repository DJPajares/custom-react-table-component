import React, { CSSProperties } from 'react';
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
  return (
    <div style={styles.homeStyle as CSSProperties}>
      <h1>Table Demo</h1>
      <Table
        data={data}
        columns={columns}
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
