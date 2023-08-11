import React, { CSSProperties } from 'react';
import { TableRow } from '../../../types';

type TableBodyProps = {
  isMobile: boolean;
  row: TableRow;
  rowIdx: number;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  handleRowSelect: () => void;
};

const TableBody = ({
  isMobile,
  row,
  rowIdx,
  isSelectable = false,
  isMultiSelect = false,
  isSelected = false,
  handleRowSelect
}: TableBodyProps) => {
  return (
    <div style={styles.bodyStyle as CSSProperties}>
      <div style={styles.rowStyle as CSSProperties}>
        {isSelectable && (
          <div
            style={
              styles.checkCellStyle({ isSelected, rowIdx }) as CSSProperties
            }
          >
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
          </div>
        )}

        {Object.values(row).map((value, idx) => (
          <div
            key={idx}
            style={
              styles.cellStyle({
                isSelected,
                isMobile,
                isSelectable,
                idx,
                rowIdx
              }) as CSSProperties
            }
            onClick={isSelectable ? handleRowSelect : () => {}}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  bodyStyle: {
    display: 'table-row-group'
  },
  rowStyle: {
    display: 'table-row'
  },
  checkCellStyle: ({
    isSelected,
    rowIdx
  }: {
    isSelected: boolean;
    rowIdx: number;
  }) => ({
    display: 'table-cell',
    verticalAlign: 'middle',
    paddingTop: 8,
    paddingBottom: 8,
    borderTop: rowIdx === 0 ? '' : '1px solid #E1E1E1',
    backgroundColor: isSelected ? '#EFEDFD' : 'transparent',
    cursor: 'pointer'
  }),
  cellStyle: ({
    isSelected,
    isMobile,
    isSelectable,
    idx,
    rowIdx
  }: {
    isSelected: boolean;
    isMobile: boolean;
    isSelectable: boolean;
    idx: number;
    rowIdx: number;
  }) => ({
    display: 'table-cell',
    verticalAlign: 'middle',
    borderTop: rowIdx === 0 ? '' : '1px solid #E1E1E1',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: !isSelectable && idx === 0 ? 0 : 16,
    paddingRight: 16,
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
    backgroundColor: '#FFFFFF'
  }),
  radio: (isMobile: boolean) => ({
    height: isMobile ? 24 : 32,
    width: isMobile ? 24 : 32
  })
};

export default TableBody;
