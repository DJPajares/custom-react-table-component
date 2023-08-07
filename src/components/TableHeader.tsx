import React, { useState } from 'react';

type TableHeaderProps = {
  columns: {
    key: string,
    value: string
  }[];
  onSort?: (column: string, ascending: boolean) => void;
}

const TableHeader = ({ columns, onSort }: TableHeaderProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [ascending, setAscending] = useState<boolean>(true);

  const handleSort = (column: string) => {
    if (onSort) {
      if (sortColumn === column) {
        // Toggle sort order if sorting the same column
        setAscending((prevState) => !prevState);
      } else {
        setSortColumn(column);
        setAscending(true);
      }
      onSort(column, ascending);
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn === column) {
      return ascending ? '▲' : '▼';
    }
    return null;
  };

  return (
    <thead style={styles.headerStyle}>
      {/* <tr style={styles.headerStyle}> */}
      <tr>
        {columns.map((column) => (
          <th key={column.key} style={styles.thStyle} onClick={() => handleSort(column.key)}>
            {column.value} {getSortIcon(column.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const styles = {
  headerStyle: {
    // borderRadius: 16,
    // backgroundColor: '#f0f0f0',
    // border: 'none'
    // border: '1px solid #000000',
  },
  thStyle: {
    // border: '0px solid #000000',
    cursor: 'pointer',
    outline: 0,
		border: 'none',
    // padding: 24,
		paddingTop: 8,
    paddingBottom: 8,
    // textAlign: 'left',
    align: 'left',
    margin: 0,
    fontWeight: 800,
    lineHeight: 1.75,
    fontSize: 20,
    letterSpacing: 0,
  }
};

export default TableHeader;
