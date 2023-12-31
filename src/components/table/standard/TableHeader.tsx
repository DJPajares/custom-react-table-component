import React, { useState, CSSProperties } from 'react';
import ArrowUpIcon from '../../../icons/ArrowUpIcon';
import ArrowDownIcon from '../../../icons/ArrowDownIcon';

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
    <div style={styles.headerStyle as CSSProperties}>
      <div style={styles.headerRowStyle as CSSProperties}>
        {columns.map((column, idx, arr) => {
          let lastColumn = false;
          if (arr.length - 1 === idx) lastColumn = true;

          return (
            <div
              style={
                styles.cellStyle({ isMobile, idx, lastColumn }) as CSSProperties
              }
              key={column.key}
              onClick={() => handleSort(column.key)}
            >
              {column.label} {getSortIcon(column.key)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const styles = {
  headerStyle: {
    display: 'table-header-group'
  },
  headerRowStyle: {
    display: 'table-row'
  },
  cellStyle: ({
    isMobile,
    idx,
    lastColumn
  }: {
    isMobile: boolean;
    idx: number;
    lastColumn: boolean;
  }) => ({
    display: 'table-cell',
    backgroundColor: '#f0f0f0',
    textAlign: 'justify',
    cursor: 'pointer',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
    borderTopLeftRadius: idx === 0 ? 16 : 0,
    borderTopRightRadius: lastColumn ? 16 : 0,
    fontFamily: 'Avenir-Heavy',
    fontSize: isMobile ? 14 : 20,
    fontWeight: 700,
    lineHeight: 1.75,
    letterSpacing: 0
  })
};

export default TableHeader;
