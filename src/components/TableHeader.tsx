import React, { useState } from 'react';

interface TableHeaderProps {
  columns: string[];
  onSort?: (column: string, ascending: boolean) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ columns, onSort }) => {
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [ascending, setAscending] = useState<boolean>(true);

  const headerStyle: React.CSSProperties = {
    backgroundColor: '#f0f0f0', // Grey background
    borderRadius: '16px', // Rounded corners
    padding: '24px', // Padding
    fontWeight: 800, // Avenir Heavy
    lineHeight: '1.75', // Line height
    letterSpacing: '0', // Letter spacing
    fontSize: '20px', // Font size for XL & LG
    fontFamily: 'Avenir Heavy, sans-serif' // Set the font-family to "Avenir Heavy"
  };

  const thStyle: React.CSSProperties = {
    borderBottom: 'none', // Remove the bottom border from header cells
    cursor: 'pointer' // Show pointer cursor when sortable
  };

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
    <thead>
      <tr style={headerStyle}>
        {columns.map((column) => (
          <th key={column} style={thStyle} onClick={() => handleSort(column)}>
            {column} {getSortIcon(column)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
