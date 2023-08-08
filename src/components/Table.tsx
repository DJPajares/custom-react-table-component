import React, { useState, useEffect, CSSProperties } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import type { TableRow } from '../types';

type TableProps = {
  data: TableRow[];
  columns: {
    key: string;
    value: string;
  }[];
  onSort?: (column: string) => void;
  onRowSelect?: (row: TableRow) => void;
  isSelectable?: boolean;
  isMultiSelect?: boolean;
};

const Table = ({
	data,
	columns,
	onSort,
	onRowSelect,
	isSelectable = false,
	isMultiSelect = false
}: TableProps) => {
	const [ selectedRows, setSelectedRows ] = useState<number[]>([]);

	useEffect(() => {
		console.log('selectedRows:', selectedRows);
	}, [ selectedRows ]);

	const handleRowSelect = (rowIndex: number) => {
		setSelectedRows((prevSelectedRows) => {
			if (prevSelectedRows.includes(rowIndex)) {
				return prevSelectedRows.filter((row) => row !== rowIndex);
			}

			return [ ...prevSelectedRows, rowIndex ];
		});
	};

	return (
		// <div style={ styles.wrapperStyle as CSSProperties}>
			<table style={styles.tableStyle as CSSProperties}>
				<TableHeader columns={columns} onSort={onSort} />

				<tbody>
					{data.map((row, index) => (
						<TableBody
							key={index}
							row={row}
							index={index}
							isSelectable={isSelectable}
							isMultiSelect={isMultiSelect}
							isSelected={selectedRows.includes(index)}
							onRowSelect={() => handleRowSelect(index)}
							selectedRows={selectedRows}
							handleRowSelect={handleRowSelect}
						/>
					))}
				</tbody>
			</table>
		// </div>
  );
};

const styles = {
	// wrapperStyle: {
  //   backgroundColor: '#f0f0f0',
  //   boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  //   borderRadius: 16
	// },
  tableStyle: {
    // backgroundColor: '#f0f0f0',
    borderCollapse: 'collapse',
    // borderStyle: 'hidden',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		borderRadius: 16,
		userSelect: 'none'
    // borderSpacing: 0,
  }
};

export default Table;
