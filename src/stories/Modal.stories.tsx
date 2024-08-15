import type { Meta, StoryObj } from '@storybook/react';
import { ModalAddEdit } from '../components';

const meta = {
  title: 'CUSTOM/Modal',
  component: ModalAddEdit,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ModalAddEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    form: {},
    open: true,
    title: 'Chỉnh sửa tài khoản',
    options: [
      {
        name: 'input_default',
        label: 'Input Default',
        type: 'input',
        rules: [{ required: true, message: 'Please input!' }],
        inputProps: {}
      },
      {
        name: 'input_password',
        label: 'Input Password',
        type: 'input',
        rules: [{ required: true, message: 'Please input!' }],
        inputProps: {
          type: 'password',
        }
      },
      {
        name: 'select_default',
        label: 'Select Default',
        type: 'select',
        rules: [],
        selectProps: {
          options: [
            {label: 'Options 1', value: '1'},
            {label: 'Options 2', value: '2'},
            {label: 'Options 3', value: '3'}
          ]
        }
      },
      {
        name: 'select_muti',
        label: 'Select Mutiple',
        type: 'select',
        rules: [],
        selectProps: {
          options: [
            {label: 'Options 1', value: '1'},
            {label: 'Options 2', value: '2'},
            {label: 'Options 3', value: '3'}
          ],
          mode: 'tags'
        }
      },
      {
        name: 'input_nunber',
        label: 'Input Number',
        type: 'input',
        rules: [],
        inputProps: {
          type: 'number'
        }
      },
      {
        name: 'date_piker',
        label: 'Date Picker',
        type: 'date-picker',
        rules: [],
        datePickProps: {
          style: { width: '100%' },
          onChange: (value) => {console.log('value', value)}
        }
      },
      {
        name: 'checkbox',
        label: 'Checkbox',
        type: 'checkbox',
        rules: [],
        checkboxProps: {
          children: 'Checking'
        }
      },
      {
        name: 'input_area',
        label: 'Input Area',
        type: 'mutiple-input',
        rules: [],
      }
    ],
    onSubmit: () => { },
    onCancel: () => { },
  },
};