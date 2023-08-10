import React, { CSSProperties } from 'react';
import { TableRow } from '../types';

type TableBodyProps = {
  isMobile: boolean;
  row: TableRow;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  handleRowSelect: () => void;
};

const TableBody = ({
  isMobile,
  row,
  isSelectable = false,
  isMultiSelect = false,
  isSelected = false,
  handleRowSelect
}: TableBodyProps) => {
  return (
    <tr>
      <td style={styles.bodyStyle({ isSelected, isMobile }) as CSSProperties}>
        {isSelectable && (
          <div>
            {isMultiSelect ? (
              <input
                type="checkbox"
                style={styles.checkbox(isMobile) as CSSProperties}
                checked={isSelected}
                onChange={handleRowSelect}
              />
            ) : (
              <input
                type="radio"
                style={styles.radio(isMobile) as CSSProperties}
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
          style={styles.bodyStyle({ isSelected, isMobile }) as CSSProperties}
          onClick={isSelectable ? handleRowSelect : () => {}}
        >
          {value}
        </td>
      ))}
    </tr>
  );
};

const styles = {
  bodyStyle: ({
    isSelected,
    isMobile
  }: {
    isSelected: boolean;
    isMobile: boolean;
  }) => ({
    borderTop: '1px solid #E1E1E1',
    padding: '8px 16px',
    fontFamily: 'Avenir-Book',
    fontSize: isMobile ? 14 : 20,
    fontWeight: 350,
    lineHeight: 1.75,
    letterSpacing: '0.1em',
    backgroundColor: isSelected ? '#EFEDFD' : 'transparent',
    cursor: 'pointer'
  }),
  checkbox: (isMobile: boolean) => ({
    height: isMobile ? 24 : 32,
    width: isMobile ? 24 : 32,
    borderRadius: 8,
    border: '1px solid #A8A8A8'
    // backgroundColor: '#5C50BB'
  }),
  radio: (isMobile: boolean) => ({
    height: isMobile ? 24 : 32,
    width: isMobile ? 24 : 32
  })
};

export default TableBody;
