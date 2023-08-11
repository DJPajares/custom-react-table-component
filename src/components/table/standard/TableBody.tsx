import React, { CSSProperties } from 'react';
import { TableRow } from '../../../types';

type TableBodyProps = {
  isMobile: boolean;
  row: TableRow;
  columns: any[];
  rowIdx: number;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  handleRowSelect: () => void;
};

const TableBody = ({
  isMobile,
  row,
  columns,
  rowIdx,
  isSelectable = false,
  isMultiSelect = false,
  isSelected = false,
  handleRowSelect
}: TableBodyProps) => {
  // filter data that have the object's key in the columns's key
  const filteredRow = Object.keys(row)
    .filter((key) => columns.some((mapping) => mapping.key === key))
    .reduce((filteredObj: any, key) => {
      filteredObj[key] = row[key];
      return filteredObj;
    }, {});

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

        {Object.values(filteredRow).map((value: any, idx) => (
          <div
            key={idx}
            style={
              styles.cellStyle({
                isSelected,
                isMobile,
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
    paddingLeft: 16,
    borderTop: rowIdx === 0 ? '' : '1px solid #E1E1E1',
    backgroundColor: isSelected ? '#EFEDFD' : 'transparent',
    cursor: 'pointer'
  }),
  cellStyle: ({
    isSelected,
    isMobile,
    rowIdx
  }: {
    isSelected: boolean;
    isMobile: boolean;
    rowIdx: number;
  }) => ({
    display: 'table-cell',
    verticalAlign: 'middle',
    borderTop: rowIdx === 0 ? '' : '1px solid #E1E1E1',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
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
