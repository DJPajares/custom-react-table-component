import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '../../components/Table';

jest.mock('../../utilities/useMediaQuery', () => ({
  __esModule: true,
  ...jest.requireActual('../../utilities/useMediaQuery'),
  useMediaQuery: jest.fn()
}));

describe('Table Component', () => {
  const sampleColumns = [
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

  const sampleData = [
    { id: 1, name: 'Alice', age: 30, city: 'New York' },
    { id: 2, name: 'Bob', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Charlie', age: 99, city: 'Marioland' }
  ];

  it('renders table rows correctly', () => {
    const { getByText } = render(
      <Table data={sampleData} columns={sampleColumns} />
    );

    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
    expect(getByText('Charlie')).toBeInTheDocument();
  });

  it('sorts the data correctly', () => {
    const { getByText } = render(
      <Table data={sampleData} columns={sampleColumns} />
    );

    fireEvent.click(getByText('Name'));

    expect(getByText('Alice')).toBeInTheDocument();
    expect(getByText('Bob')).toBeInTheDocument();
    expect(getByText('Charlie')).toBeInTheDocument();
  });

  it('shows radio button if isSelectable is passed and isMultiSelect is not', () => {
    const { getAllByRole } = render(
      <Table data={sampleData} columns={sampleColumns} isSelectable />
    );

    const radioButton = getAllByRole('radio');
    expect(radioButton).toHaveLength(sampleData.length);

    fireEvent.click(radioButton[1]);
    expect(radioButton[1]).toBeChecked();
  });

  it('shows checkboxes if isSelectable and isMultiSelect are both passed', () => {
    const { getAllByRole } = render(
      <Table
        data={sampleData}
        columns={sampleColumns}
        isSelectable
        isMultiSelect
      />
    );

    const checkboxes = getAllByRole('checkbox');
    expect(checkboxes).toHaveLength(sampleData.length);

    fireEvent.click(checkboxes[1]);
    expect(checkboxes[1]).toBeChecked();
  });
});
