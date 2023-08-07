import React from 'react';

type TableCellProps = {
  column: string;
  value?: string | number | React.ReactNode;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  onRowSelect?: () => void;
}

const TableCell = ({
  column,
  value,
  isSelectable = false,
  isMultiSelect = false,
  isSelected = false,
  onRowSelect
}: TableCellProps) => {
  const handleRowSelect = () => {
    if (onRowSelect) {
      onRowSelect();
    }
  };

  return (
    <td style={styles.cellStyle({isSelected})} onClick={isSelectable ? handleRowSelect : undefined}>
      {isSelectable && (isMultiSelect || onRowSelect) ? ( // Only show checkboxes or radio buttons on the leftmost column
        <div style={styles.contentStyle}>
          {isMultiSelect ? (
            <input type="checkbox" style={styles.checkboxStyle} checked={isSelected} />
          ) : (
            <input
              type="radio"
              name="selectRow"
              style={styles.checkboxStyle}
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

const styles = {
  cellStyle: ({ isSelected }: { isSelected: boolean }) => ({
    border: 'none',
    outline: 0,
		// borderLeft: 'none',
    // borderRight: 'none',
		// borderBottom: 'none',
    // borderTop: '1px solid #E1E1E1',
    padding: 24,
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.1em',
    fontSize: 20,
    backgroundColor: isSelected ? '#EFEDFD' : '#FFFFFF'
  }),
  contentStyle: {
    display: 'flex',
    alignItems: 'center'
  },
  checkboxStyle: {
    marginRight: '8px'
  }
}

export default TableCell;
