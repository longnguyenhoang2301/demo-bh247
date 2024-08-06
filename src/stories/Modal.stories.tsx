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
    open: true,
    title: 'Chỉnh sửa tài khoản',
    options: [
        {
            name: 'account',
            label: 'Tài Khoản',
            type: 'input',
            inputProps: {}
        },
        {
            name: 'password',
            label: 'Mật Khẩu',
            type: 'input',
            inputProps: {}
        }
    ],
    onButtonSubmitClick: () => {},
    onButtonCancelClick: () => {},
  },
};