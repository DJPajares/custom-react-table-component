import React, { CSSProperties } from 'react';
import { TableRow } from '../types';

type TableBodyProps = {
  row: TableRow;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  handleRowSelect: () => void;
};

const TableBody = ({
  row,
  isSelectable = false,
  isMultiSelect = false,
  isSelected = false,
  handleRowSelect
}: TableBodyProps) => {
  return (
    <tr>
      <td style={styles.bodyStyle({ isSelected })}>
        {isSelectable && (
          <div>
            {isMultiSelect ? (
              <input
                type="checkbox"
                checked={isSelected}
                onChange={handleRowSelect}
              />
            ) : (
              <input
                type="radio"
                checked={isSelected}
                onChange={handleRowSelect}
              />
            )}
          </div>
        )}
      </td>

      {Object.values(row).map((value, idx) => (
        <td
          key={idx}
          style={styles.bodyStyle({ isSelected }) as CSSProperties}
          onClick={handleRowSelect}
        >
          {value}
        </td>
      ))}
    </tr>
  );
};

const styles = {
  bodyStyle: ({ isSelected }: { isSelected: boolean }) => ({
    borderTop: '1px solid #E1E1E1',
    padding: '8px 16px',
    fontFamily: 'Avenir-Book',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.1em',
    backgroundColor: isSelected ? '#EFEDFD' : 'transparent',
    cursor: 'pointer'
  })
};

export default TableBody;
