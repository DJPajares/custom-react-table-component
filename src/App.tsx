import React from 'react';
// import { Table, TableRow } from 'table-component';
import Table from './components/Table';
import type { TableRow } from './types';

const App: React.FC = () => {
  const data: TableRow[] = [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' }
    // Add more data rows as needed
  ];

  const columns = ['id', 'name', 'age', 'city'];

  const handleSort = (column: string) => {
    // Handle sorting logic here
  };

  const handleRowSelect = (row: TableRow) => {
    // Handle row selection logic here
  };

  return (
    <div>
      <h1>Table Demo</h1>
      <Table
        data={data}
        columns={columns}
        onSort={handleSort}
        onRowSelect={handleRowSelect}
        isSelectable
        isMultiSelect
      />
    </div>
  );
};

export default App;
