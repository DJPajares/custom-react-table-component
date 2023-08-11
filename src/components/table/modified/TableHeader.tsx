import React, { CSSProperties } from 'react';

type TableHeaderProps = {
  isSelectable: boolean;
};

const TableHeader = ({ isSelectable }: TableHeaderProps) => {
  return (
    <div style={ styles.headerStyle as CSSProperties }>
      <div style={ styles.headerRowStyle as CSSProperties }>
        {isSelectable && (
          <div style={ styles.cellStyle as CSSProperties }></div>
        )}
        <div style={ styles.cellStyle as CSSProperties }>
          Table demo
        </div>
        <div style={ styles.cellStyle as CSSProperties }></div>
      </div>
    </div>
  );
};

const styles = {
  headerStyle: {
    display: 'table-header-group',
  },
  headerRowStyle: {
    display: 'table-row',
  },
  cellStyle: {
    display: 'table-cell',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    paddingTop: 8,
    paddingBottom: 8,
    paddingRight: 16,
    fontFamily: 'Avenir-Heavy',
    fontWeight: 700,
    lineHeight: 1.75,
    letterSpacing: 0
  }
};

export default TableHeader;
