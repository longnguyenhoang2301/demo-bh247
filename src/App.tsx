import React from 'react';
import logo from './logo.svg';
import './App.less';

import './resources/styles/custom.scss';
import MainLayout from './components/Layout';
import { Table, TableColumnsType } from 'antd';
import { LabelCustom } from './components';

function App() {
  interface DataType {
    key: React.Key;
    name: string;
    chinese: number;
    math: number;
    english: string;
  }
  
  const columns: TableColumnsType<DataType> = [
    {
      title: <LabelCustom
        label="Name"
        type="input"
        inputProps={{
          size: 'small'
        }}
        onButtonFilterClick={() => { }}
      />,
      showSorterTooltip: false,
      sorter: (a, b) => a.name.localeCompare(b.name),
      dataIndex: 'name',
    },
    {
      title: <LabelCustom
        label="Chinese Score"
        type="select"
        selectProps={{
          size: 'small',
          style: {
            width: 150
          }
        }}
        onButtonFilterClick={() => { }}
      />,
      dataIndex: 'chinese',
      showSorterTooltip: false,
      sorter: {
        compare: (a, b) => a.chinese - b.chinese,
        // multiple: 3,
      },
    },
    {
      title: 'Math Score',
      dataIndex: 'math',
      showSorterTooltip: false,
      sorter: {
        compare: (a, b) => a.math - b.math,
        // multiple: 2,
      },
    },
    {
      title: 'English Score',
      dataIndex: 'english',
      showSorterTooltip: false,
      sorter: {
        compare: (a, b) => a.english.localeCompare(b.english),
        // multiple: 1,
      },
    },
  ];
  
  const data: DataType[] = [
    {
      key: '1',
      name: 'John Brown',
      chinese: 98,
      math: 60,
      english: 'abc',
    },
    {
      key: '2',
      name: 'Jim Green',
      chinese: 98,
      math: 66,
      english: '123',
    },
    {
      key: '3',
      name: 'Joe Black',
      chinese: 98,
      math: 90,
      english: 'xyz',
    },
    {
      key: '4',
      name: 'Jim Red',
      chinese: 88,
      math: 99,
      english: '###',
    },
  ];
  return (
    <div className="App">
      <MainLayout>
        <Table columns={columns} dataSource={data} />
      </MainLayout>
    </div>
  );
}

export default App;
