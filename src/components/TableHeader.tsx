import React, { useState, CSSProperties } from 'react';
import ArrowUpIcon from '../icons/ArrowUpIcon';
import ArrowDownIcon from '../icons/ArrowDownIcon';

type TableHeaderProps = {
  isMobile: boolean;
  columns: {
    key: string;
    label: string;
  }[];
  onSort?: (column: string, ascending: boolean) => void;
};

const TableHeader = ({ isMobile, columns, onSort }: TableHeaderProps) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [ascending, setAscending] = useState<boolean>(true);

  const handleSort = (column: string) => {
    if (onSort) {
      let newAscending = ascending;

      if (sortColumn === column) {
        newAscending = !newAscending;
      } else {
        newAscending = true;
      }

      setSortColumn(column);
      setAscending(newAscending);

      onSort(column, newAscending);
    }
  };

  const getSortIcon = (column: string) => {
    if (sortColumn === column) {
      return ascending ? (
        <ArrowUpIcon size={10} />
      ) : (
        <ArrowDownIcon size={10} />
      );
    }
    return null;
  };

  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            style={styles.headerStyle(isMobile) as CSSProperties}
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
  headerStyle: (isMobile: boolean) => ({
    // backgroundColor: '#f0f0f0',
    textAlign: 'left',
    cursor: 'pointer',
    padding: '8px 16px',
    fontFamily: 'Avenir-Heavy',
    fontSize: isMobile ? 14 : 20,
    fontWeight: 700,
    lineHeight: 1.75,
    letterSpacing: 0
  })
};

export default TableHeader;
