# Custom React Table Component

## Introduction

This document provides an overview of the Custom React Table Component - a versatile table component developed using ReactJS. This component has been designed to provide a flexible and customizable table display, with key features such as sorting, single-select (radio button), multi-select (checkbox), and responsiveness for both desktop and mobile views. It's important to note that no third-party UI component libraries have been used in the creation of this component.

## Usage

To use the Custom React Table Component, import and integrate it into your React application. Here's an example of how to use it:

```bash
import React from 'react';
import Table from './path/to/Table';

const App = () => {
  // Define your data and columns
  const data = [...]; // Your data array
  const columns = [...]; // Your column configuration

  return (
    <div>
      <Table data={data} columns={columns} isSelectable={true} isMultiSelect={true} />
    </div>
  );
};

export default App;
```

## Features

### Basic Table Display

The Custom React Table Component provides a straightforward table display for your data. It accepts data and columns as props and renders the data in a tabular format.

### Sorting

The component supports sorting based on the values in each column. Clicking on a column header triggers sorting in ascending or descending order, as specified by the user. The handleSort function is responsible for handling sorting logic.

### Single-Select and Multi-Select

The component offers both single-select (radio button) and multi-select (checkbox) functionalities. When isSelectable is set to true and isMultiSelect is set to false, single-select mode is enabled. When isMultiSelect is set to true, multi-select mode is enabled, allowing users to select multiple rows.

### Responsive Design

The component is designed to be responsive and adapt to both desktop and mobile views. The layout adjusts based on the screen size using the useMediaQuery hook.

## API

The Custom React Table Component accepts the following props:

- data (array): The data to be displayed in the table.
- columns (array): Configuration for the columns.
- isSelectable (boolean): Enables row selection.
- isMultiSelect (boolean): Enables multi-select mode.

## Testing

The component contains a unit test for the table component, showing expected behaviors for the provided parameters

## Storybook

The component contains storybook to allow interactions with the component in isoldation.

To run the story book, simply type in the below code:

```bash
    yarn storybook
```

## Demo

Desktop:
https://github.com/DJPajares/custom-react-table-component/assets/91174577/61b92bb5-7d1b-4d97-ab13-fb4a760439e2

Mobile:
https://github.com/DJPajares/custom-react-table-component/assets/91174577/bd63be03-fa4d-41a0-b203-bd495f6ccd6b

