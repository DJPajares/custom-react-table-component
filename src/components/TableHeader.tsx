import React, { useState, CSSProperties } from 'react';

type TableHeaderProps = {
  columns: {
    key: string;
    label: string;
  }[];
  onSort?: (column: string, ascending: boolean) => void;
};

const TableHeader = ({ columns, onSort }: TableHeaderProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [ascending, setAscending] = useState<boolean>(true);

  const handleSort = (column: string) => {
    if (onSort) {
      if (sortColumn === column) {
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
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            style={styles.headerStyle as CSSProperties}
            key={column.key}
            onClick={() => handleSort(column.key)}
          >
            {column.label} {getSortIcon(column.key)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

const styles = {
  headerStyle: {
    backgroundColor: '#f0f0f0',
    textAlign: 'left',
    cursor: 'pointer',
    padding: '8px 16px',
    fontFamily: 'Avenir-Heavy',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.75,
    letterSpacing: 0
  }
};

export default TableHeader;
