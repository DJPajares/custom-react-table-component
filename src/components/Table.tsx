import React, { useState, CSSProperties } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import type { TableRow } from '../types';
import { useMediaQuery } from '../utilities/useMediaQuery';

type TableProps = {
  data: TableRow[];
  columns: {
    key: string;
    label: string;
  }[];
  isSelectable?: boolean;
  isMultiSelect?: boolean;
};

const Table = ({
  data,
  columns,
  isSelectable = false,
  isMultiSelect = false
}: TableProps) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortedData, setSortedData] = useState(data);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);

  const isMobile = useMediaQuery('(max-width: 768px)');

  const handleSort = (column: string, ascending?: boolean) => {
    const sorted = [...data].sort((a: any, b: any) => {
      const aValue = a[column] ?? '';
      const bValue = b[column] ?? '';

      if (aValue === bValue) return 0;

      if (ascending) {
        return aValue < bValue ? -1 : 1;
      } else {
        return aValue > bValue ? -1 : 1;
      }
    });

    setSortedData(sorted);
  };

  const handleRowSelect = (rowId: string) => {
    if (isMultiSelect) {
      setSelectedRows((prevSelectedRows) => {
        if (prevSelectedRows.includes(rowId)) {
          return prevSelectedRows.filter((id) => id !== rowId);
        }
        return [...prevSelectedRows, rowId];
      });
    } else {
      setSelectedRow(rowId);
    }
  };

  return (
    <table style={styles.tableStyle as CSSProperties}>
      <TableHeader isMobile={isMobile} columns={columns} onSort={handleSort} />

      <tbody>
        {sortedData.map((row) => (
          <TableBody
            isMobile={isMobile}
            row={row}
            key={row.id?.toString()}
            isSelectable={isSelectable}
            isMultiSelect={isMultiSelect}
            isSelected={
              isMultiSelect
                ? selectedRows.includes(row.id.toString())
                : row.id.toString() === selectedRow
            }
            handleRowSelect={() => row.id && handleRowSelect(row.id.toString())}
          />
        ))}
      </tbody>
    </table>
  );
};

const styles = {
  tableStyle: {
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 16,
    userSelect: 'none',
    margin: 16
  }
};

export default Table;
