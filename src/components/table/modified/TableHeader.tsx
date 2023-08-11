import React, { CSSProperties } from 'react';

type TableHeaderProps = {
  isSelectable: boolean;
};

const TableHeader = ({ isSelectable }: TableHeaderProps) => {
  console.log('isSelectable', isSelectable);
  return (
    <div style={styles.headerStyle as CSSProperties}>
      <div style={styles.headerRowStyle as CSSProperties}>
        {isSelectable && (
          <div
            style={styles.cellStyle({ isSelectable: false }) as CSSProperties}
          ></div>
        )}
        <div style={styles.cellStyle({ isSelectable }) as CSSProperties}>
          Table demo
        </div>
        <div
          style={styles.cellStyle({ isSelectable: false }) as CSSProperties}
        ></div>
      </div>
    </div>
  );
};

const styles = {
  headerStyle: {
    display: 'table-header-group'
  },
  headerRowStyle: {
    display: 'table-row'
  },
  cellStyle: ({ isSelectable }: { isSelectable: boolean }) => ({
    display: 'table-cell',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: isSelectable ? 16 : 0,
    paddingRight: 16,
    fontFamily: 'Avenir-Heavy',
    fontWeight: 700,
    lineHeight: 1.75,
    letterSpacing: 0
  })
};

export default TableHeader;
