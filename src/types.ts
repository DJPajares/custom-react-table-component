export type TableRow = {
  id: number;
  [key: string]: string | number;
};

export type TableColumn = {
  key: string;
  label: string;
};

export type TableProps = {
  data: TableRow[];
  columns: {
    key: string;
    label: string;
  }[];
  isSelectable?: boolean;
  isMultiSelect?: boolean;
};
