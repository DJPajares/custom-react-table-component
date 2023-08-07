import React, {useState} from 'react';
import { TableRow } from '../types';

type TableBodyProps = {
	data: TableRow[];
  isSelectable?: boolean;
  isMultiSelect?: boolean;
  isSelected?: boolean;
  onRowSelect?: () => void;
}

const TableBody = ({
  data,
  isSelectable = false,
  isMultiSelect = false,
  isSelected = false,
  onRowSelect
}: TableBodyProps) => {
  const [selectedRows, setSelectedRows] = useState([])
  const handleRowSelect = (rowIndex: number) => {
    // console.log('rowIndex: ', rowIndex)
    // console.log('data: ', data[ rowIndex ])
    
    setSelectedRows((prevSelectedRows: any) => {
      if (prevSelectedRows.includes(rowIndex)) {
        return prevSelectedRows.filter((row: any) => row !== rowIndex);
      }

      return [...prevSelectedRows, rowIndex];
    });
  };

  return (
    <tbody>
      {data.map((row, index) => (
        <tr key={index}>
          <td style={ styles.bodyStyle({isSelected}) }>
            {isSelectable && (isMultiSelect || onRowSelect) && (
              <div>
                {isMultiSelect ? (
                  <input type="checkbox" onChange={() => handleRowSelect(index)} />
                ) : (
                  <input
                    type="radio"
                    name="selectRow"
                    // checked={ isSelected }
                    onChange={ () => handleRowSelect(index) }
                  />
                )}
              </div>
            )}
          </td>
  
          {Object.values(row).map((value, idx) => (
            <td key={ idx } style={ styles.bodyStyle({ isSelected: false }) as React.CSSProperties} onClick={() => handleRowSelect(index)} >
              {value}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
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
    cursor: 'pointer',
  }),
  contentStyle: {
    // display: 'flex',
    // alignItems: 'center'
  },
  checkboxStyle: {
    marginRight: '8px'
  }
}

export default TableBody;
