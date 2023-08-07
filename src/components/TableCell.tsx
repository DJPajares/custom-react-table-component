import React from 'react';

interface TableCellProps {
  column: string;
  value?: string | number | React.ReactNode;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  onRowSelect?: () => void;
}

const TableCell: React.FC<TableCellProps> = ({
  column,
  value,
  isSelectable,
  isMultiSelect,
  isSelected,
  onRowSelect
}) => {
  const cellStyle: React.CSSProperties = {
    borderBottom: '1px solid #E1E1E1', // Row divider in N20
    padding: '24px', // Padding
    fontWeight: 400, // Avenir Book
    lineHeight: '1.75', // Line height
    letterSpacing: '0.1em', // Letter spacing
    fontSize: '20px', // Font size for XL & LG
    fontFamily: 'Avenir Book, sans-serif', // Set the font-family to "Avenir Book"
    backgroundColor: isSelected ? '#EFEDFD' : 'transparent' // Highlight the selected row
  };

  const handleRowSelect = () => {
    if (onRowSelect) {
      onRowSelect();
    }
  };

  const contentStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center'
  };

  const checkboxStyle: React.CSSProperties = {
    marginRight: '8px'
  };

  return (
    <td style={cellStyle} onClick={isSelectable ? handleRowSelect : undefined}>
      {isSelectable && (isMultiSelect || onRowSelect) ? ( // Only show checkboxes or radio buttons on the leftmost column
        <div style={contentStyle}>
          {isMultiSelect ? (
            <input type="checkbox" style={checkboxStyle} checked={isSelected} />
          ) : (
            <input
              type="radio"
              name="selectRow"
              style={checkboxStyle}
              checked={isSelected}
            />
          )}
          {value}
        </div>
      ) : (
        value
      )}
    </td>
  );
};

export default TableCell;
