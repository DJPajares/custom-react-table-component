import React from 'react';
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
}

const Table = ({
	data,
	columns,
	onSort,
	onRowSelect,
	isSelectable = false,
	isMultiSelect = false
}: TableProps) => {
	// const idIndex = columns.map((column) => column.key).indexOf('id');

	return (
			<table style={styles.tableStyle as React.CSSProperties}>
				<TableHeader columns={columns} onSort={onSort} />
				<TableBody data={ data } isSelectable={ isSelectable } isMultiSelect={isMultiSelect} />
			</table>
  );
};
const styles = {
	tableStyle: {
		boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
		borderCollapse: 'collapse',
		borderStyle: 'hidden',
		borderRadius: 16,
		// borderSpacing: 0,
	}
}

export default Table;