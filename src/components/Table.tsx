import React from 'react';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
import { TableRow } from '../types';

interface TableProps {
  data: TableRow[];
  columns: string[];
  onSort?: (column: string) => void;
  onRowSelect?: (row: TableRow) => void;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
}

const Table: React.FC<TableProps> = ({
  data,
  columns,
  onSort,
  onRowSelect,
  isSelectable,
  isMultiSelect
}) => {
  const idIndex = columns.indexOf('id');

  const handleRowSelect = (row: TableRow) => {
    if (onRowSelect) {
      onRowSelect(row);
    }
  };

  return (
    <table>
      <TableHeader columns={columns} onSort={onSort} />
      <tbody>
        {data.map((row, index) => (
          <tr key={index} onClick={() => handleRowSelect(row)}>
            {columns.map((column, columnIndex) => (
              <TableCell
                key={column}
                column={column}
                value={row[column]}
                isSelectable={isSelectable}
                isMultiSelect={isMultiSelect && columnIndex === idIndex - 1} // Show checkboxes only before the 'id' column
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
