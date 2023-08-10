import React from 'react';
import { Story, Meta } from '@storybook/react';
import Table from '../components/Table'; // Update the import path as needed
import type { TableRow, TableProps } from '../types';

export default {
  title: 'Components/Table',
  component: Table
} as Meta;

const sampleData: TableRow[] = [
  { id: 1, name: 'John Doe', age: 30, city: 'New York' },
  { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
  { id: 3, name: 'Mario Kart', age: 99, city: 'Marioland' }
];

const sampleColumn = [
  {
    key: 'checkbox',
    label: ''
  },
  {
    key: 'id',
    label: 'ID'
  },
  {
    key: 'name',
    label: 'Name'
  },
  {
    key: 'age',
    label: 'Age'
  },
  {
    key: 'city',
    label: 'City'
  }
];

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
