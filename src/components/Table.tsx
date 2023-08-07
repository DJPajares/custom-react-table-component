import React from 'react';
import TableHeader from './TableHeader';
import TableCell from './TableCell';
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
}

const Table = ({
	data,
	columns,
	onSort,
	onRowSelect,
	isSelectable,
	isMultiSelect
}: TableProps) => {
	const idIndex = columns.map((column) => column.key).indexOf('id');

	const handleRowSelect = (row: TableRow) => {
		if (onRowSelect) {
			onRowSelect(row);
		}
	};

	return (
		<table style={styles.tableStyle}>
			<TableHeader columns={columns} onSort={onSort} />
			<tbody style={styles.bodyStyle}>
				{data.map((row, index) => (
					<tr style={ styles.rowStyle }  key={index} onClick={() => handleRowSelect(row)}>
						{columns.map((column, columnIndex) => (
							<TableCell
								key={column.key}
								column={column.key}
								value={row[column.key]}
								isSelectable={isSelectable}
								isMultiSelect={
									isMultiSelect && columnIndex === idIndex - 1
								}
							/>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

const styles = {
	tableStyle: {
		borderRadius: 16,
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
		border: 'none',
		// border: 0,
		// paddingTop: 8,
		// paddingBottom: 8,
		// paddingLeft: 16,
		// paddingRight: 16,
		backgroundColor: '#f0f0f0',
		// outline: 0
		// paddingHorizontal: 16,
		// paddingVertical: 8
	},
	bodyStyle: {
		backgroundColor: '#FFFFFF',
		border: 'none'
	},
	rowStyle: {
		border: 'none'
		// paddingHorizontal: 16,
		// paddingVertical: 8
		// backgroundColor: '#F0F0F0'
		// backgroundColor: '#FFFFFF',
		// borderTop: '1px solid #E1E1E1',
    // border: '1px solid #FFFFFF',
    // padding: 24,
    // fontWeight: 400,
    // lineHeight: 1.75,
    // letterSpacing: '0.1em',
    // fontSize: 20,
		// borderColor: '#FFFFFF'
	}
}

export default Table;
