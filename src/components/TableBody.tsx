import React, { useState, useEffect, CSSProperties } from 'react';
import { TableRow } from '../types';

type TableBodyProps = {
  row: TableRow;
  index: number;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  onRowSelect?: (rowIndex: number) => void;
  selectedRows: number[];
  handleRowSelect: (rowIndex: number) => void;
};

const TableBody = ({
  row,
  index,
  isSelectable = false,
  isMultiSelect = false,
  isSelected = false,
  onRowSelect,
  selectedRows,
  handleRowSelect
}: TableBodyProps) => {
  // const [selectedRows, setSelectedRows] = useState([]);

  // useEffect(() => {
  //   console.log('selectedRows: ', selectedRows);
  // }, [selectedRows]);

  // const handleRowSelect = (rowIndex: number) => {
  //   // console.log('rowIndex: ', rowIndex)
  //   // console.log('data: ', data[ rowIndex ])

  //   setSelectedRows((prevSelectedRows: any) => {
  //     if (prevSelectedRows.includes(rowIndex)) {
  //       return prevSelectedRows.filter((row: any) => row !== rowIndex);
  //     }

  //     return [...prevSelectedRows, rowIndex];
  //   });
  // };

  const handleCheckboxChange = () => {
    handleRowSelect(index);
    if (onRowSelect) {
      onRowSelect(index);
    }
  };

  return (
    <tr key={index}>
      <td style={styles.bodyStyle({ isSelected })}>
        {isSelectable && (isMultiSelect || onRowSelect) && (
          <div>
            {isMultiSelect ? (
              // <input type="checkbox" onChange={() => handleRowSelect(index)} />
              <input
                type="checkbox"
                checked={selectedRows.includes(index)}
                onClick={() => handleRowSelect(index)}
              />
            ) : (
              <input
                type="radio"
                name="selectRow"
                onClick={() => handleRowSelect(index)}
                checked={isSelected}
              />
            )}
          </div>
        )}
      </td>

      {Object.values(row).map((value, idx) => (
        <td
          key={idx}
          style={styles.bodyStyle({ isSelected }) as CSSProperties}
          onClick={() => handleRowSelect(index)}
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
    // textAlign: 'left',
    padding: '8px 16px',
    fontSize: 20,
    fontWeight: 400,
    lineHeight: 1.75,
    letterSpacing: '0.1em',
    backgroundColor: isSelected ? '#EFEDFD' : 'transparent',
    cursor: 'pointer'
  })
};

export default TableBody;
