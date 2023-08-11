import React, { CSSProperties } from 'react';
import Table from './components/table/Table';
import type { TableColumn, TableRow } from './types';
import './fonts/Avenir-Book.ttf';
import './fonts/Avenir-Heavy.ttf';
import jsonData from './mockData/data.json';
import jsonColumns from './mockData/columns.json';

const data: TableRow[] = jsonData;

const columns: TableColumn[] = jsonColumns;

const App = () => {
  return (
    <div style={styles.homeStyle as CSSProperties}>
      <Table data={data} columns={columns} isSelectable isMultiSelect />
    </div>
  );
};

const styles = {
  homeStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 16
  }
};

export default App;
