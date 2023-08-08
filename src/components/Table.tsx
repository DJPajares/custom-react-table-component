import React, { useState, CSSProperties } from 'react';
import TableHeader from './TableHeader';
import TableBody from './TableBody';
import type { TableRow } from '../types';

type TableProps = {
  data: TableRow[];
  columns: {
    key: string;
    label: string;
  }[];
  isSelectable?: boolean;
  isMultiSelect?: boolean;
};

const Table = ({
	data,
	columns,
	isSelectable = false,
	isMultiSelect = false
}: TableProps) => {
	const [selectedRows, setSelectedRows] = useState<number[]>([]);
	const [sortedData, setSortedData] = useState(data);

	const handleSort = (column: string, ascending?: boolean) => {
	  const sorted = [...data].sort((a, b) => {
			const aValue = a[column] ?? '';
			const bValue = b[column] ?? '';

			if (aValue === bValue) return 0;

			if (ascending) {
				return aValue > bValue ? -1 : 1;
			} else {
				return aValue < bValue ? -1 : 1;
			}
		});

		setSortedData(sorted);
	};
  
	const handleRowSelect = (rowId: any) => {
		setSelectedRows((prevSelectedRows) => {
			if (prevSelectedRows.includes(rowId)) {
				return prevSelectedRows.filter((id) => id !== rowId);
			}

			return [ ...prevSelectedRows, rowId ];
		});
	};

	return (
			<table style={styles.tableStyle as CSSProperties}>
				<TableHeader columns={columns} onSort={handleSort} />

				<tbody>
					{sortedData.map((row, index) => (
						<TableBody
							row={row}
							index={index}
							isSelectable={isSelectable}
							isMultiSelect={isMultiSelect}
							isSelected={selectedRows.includes(index)}
							handleRowSelect={() => handleRowSelect(index)}
						/>
					))}
				</tbody>
			</table>
  );
};

const styles = {
  tableStyle: {
    borderCollapse: 'collapse',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		borderRadius: 16,
		userSelect: 'none',
		margin: 16
  }
};

export default Table;
