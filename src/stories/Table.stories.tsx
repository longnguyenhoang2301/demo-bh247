import type { Meta, StoryObj } from '@storybook/react';
import { Table } from 'antd';

export type TableSearchType = 'none' | 'input' | 'select'

const meta = {
  title: 'CUSTOM/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

interface DataType {
  key: React.Key;
  name: string;
  chinese: number;
  math: number;
  english: string;
}

const columns: any = [
  {
    title: "Name",
    showSorterTooltip: false,
    sorter: (a: any, b: any) => a.name.localeCompare(b.name),
    dataIndex: 'name',
  },
  {
    title: "Chinese Score",
    dataIndex: 'chinese',
    showSorterTooltip: false,
    sorter: {
      compare: (a: any, b: any) => a.chinese - b.chinese,
      // multiple: 3,
    },
  },
  {
    title: 'Math Score',
    dataIndex: 'math',
    showSorterTooltip: false,
    sorter: {
      compare: (a: any, b: any) => a.math - b.math,
      // multiple: 2,
    },
  },
  {
    title: 'English Score',
    dataIndex: 'english',
    showSorterTooltip: false,
    sorter: {
      compare: (a: any, b: any) => a.english.localeCompare(b.english),
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

export const Primary: Story = {
  args: {
    columns,
    dataSource: data,
    style: { width: '90vw' }
  },
};

