import { FC } from 'react';
import { Button, Input, Select, InputProps, SelectProps } from 'antd';
import {
  FilterOutlined
} from '@ant-design/icons';

interface LabelCustomProps {
  label: string;
  type: 'input' | 'select';
  inputProps?: InputProps;
  selectProps?: SelectProps;
  onButtonFilterClick: () => void;
}

export const LabelCustom: FC<LabelCustomProps> = (props) => {
  return (
    <div>
      {props.label}
      <div className='dpl-flex gap-4'>
        {props.type === 'select' && !!props.selectProps  && <Select {...props.selectProps}/>}
        {props.type ==='input' && !!props.inputProps && <Input {...props.inputProps}/>}
        <Button
          icon={<FilterOutlined className="txt-color-white"/>}
          type='text'
          size='small'
          onClick={(e) => {
            props.onButtonFilterClick();
            e.stopPropagation();
          }}
        ></Button>
      </div>
    </div>
  );
};
