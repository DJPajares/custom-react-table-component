import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table from '../components/table/Table'; // Update the import path as needed
import type { TableRow, TableProps, TableColumn } from '../types';
import jsonData from '../mockData/data.json';
import jsonColumn from '../mockData/columns.json';

export default {
  title: 'Components/Table',
  component: Table
} as Meta;

const sampleData: TableRow[] = jsonData;

const sampleColumn: TableColumn[] = jsonColumn;

const Template: Story<TableProps> = (args) => <Table {...args} />;

// Default story
export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  columns: sampleColumn
};

// Story with radio button
export const RadioButton = Template.bind({});
RadioButton.args = {
  data: sampleData,
  columns: sampleColumn,
  isSelectable: true
};

// Story with checkbox
export const Checkbox = Template.bind({});
Checkbox.args = {
  data: sampleData,
  columns: sampleColumn,
  isSelectable: true,
  isMultiSelect: true
};
