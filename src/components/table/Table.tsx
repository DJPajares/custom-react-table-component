import React, { useState, CSSProperties, useEffect } from 'react';
import TableHeader from './standard/TableHeader';
import TableBody from './standard/TableBody';
import ModifiedTableHeader from './modified/TableHeader';
import ModifiedTableBody from './modified/TableBody';
import type { TableProps } from '../../types';
import { useMediaQuery } from '../../utilities/useMediaQuery';

const Table = ({
  data,
  columns,
  isSelectable = false,
  isMultiSelect = false
}: TableProps) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [sortedData, setSortedData] = useState(data);
  const [selectedRow, setSelectedRow] = useState<string | null>(null);
  const [newColumns, setNewColumns] = useState(columns);
  const [isModifiedMobileLayout, setIsModifiedMobileLayout] = useState(false);

  useEffect(() => {
    // Update columns
    const updatedColumns = [...columns];

    if (isSelectable) {
      updatedColumns.unshift({
        key: 'checkbox',
        label: ''
      });
    }

    setNewColumns(updatedColumns);

    // Set modified mobile layout
    if (columns.length > 3) {
      setIsModifiedMobileLayout(true);
    }
  }, [columns, isSelectable]);

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
    <div style={styles.tableWrapperStyle as CSSProperties}>
      {isMobile && isModifiedMobileLayout ? (
        <div style={styles.tableStyle as CSSProperties}>
          <ModifiedTableHeader isSelectable={isSelectable} />

          {sortedData.map((row, rowIdx) => (
            <ModifiedTableBody
              key={row.id?.toString()}
              isMobile={isMobile}
              row={row}
              columns={columns}
              rowIdx={rowIdx}
              isSelectable={isSelectable}
              isMultiSelect={isMultiSelect}
              isSelected={
                isMultiSelect
                  ? selectedRows.includes(row.id.toString())
                  : row.id.toString() === selectedRow
              }
              handleRowSelect={() =>
                row.id && handleRowSelect(row.id.toString())
              }
            />
          ))}
        </div>
      ) : (
        <div style={styles.tableStyle as CSSProperties}>
          <TableHeader
            isMobile={isMobile}
            columns={newColumns}
            onSort={handleSort}
          />

          {sortedData.map((row, rowIdx) => (
            <TableBody
              key={row.id?.toString()}
              isMobile={isMobile}
              row={row}
              rowIdx={rowIdx}
              isSelectable={isSelectable}
              isMultiSelect={isMultiSelect}
              isSelected={
                isMultiSelect
                  ? selectedRows.includes(row.id.toString())
                  : row.id.toString() === selectedRow
              }
              handleRowSelect={() =>
                row.id && handleRowSelect(row.id.toString())
              }
            />
          ))}
        </div>
      )}
    </div>
  );
};

const styles = {
  tableWrapperStyle: {
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: 16
  },
  tableStyle: {
    display: 'table',
    paddingLeft: 16,
    paddingRight: 16,
    userSelect: 'none'
  }
};

export default Table;
