import { Dispatch, FC, SetStateAction } from 'react';
import { Button, Input, Select, InputProps, SelectProps, DatePickerProps, DatePicker } from 'antd';
import {
  SearchOutlined
} from '@ant-design/icons';
import lodash from 'lodash';
import dayjs from 'dayjs';

interface LabelCustomProps {
  name: string,
  label: string;
  type: 'input' | 'select' | 'date-piker';
  inputProps?: InputProps;
  selectProps?: SelectProps;
  datePikerProps?: DatePickerProps;
  filter: any;
  setFilter: Dispatch<SetStateAction<any>>;
}

export const LabelCustom: FC<LabelCustomProps> = (props) => {
  const { name, label, type, inputProps, selectProps, datePikerProps, filter, setFilter } = props;

  const handleInputChange = (key: string, value: any, filter: any, setFilter: Dispatch<SetStateAction<any>>) => {
    let temp = lodash.merge({}, filter);
    temp[key] = value;
    setFilter(temp);
  };

  return (
    <div>
      {label}
      <div className='dpl-flex gap-4'>
        {type === 'select' && !!selectProps  && <Select
          onChange={(value) => handleInputChange(name, value, filter, setFilter)}
          {...selectProps}
        />}
        {type ==='input' && !!inputProps && <Input
          onChange={(e) => handleInputChange(name, e.target.value, filter, setFilter)}
          {...inputProps}
        />}
        {type ==='date-piker' && !!datePikerProps && <DatePicker
          onChange={(value) => handleInputChange(name, dayjs(value).format('DD/MM/YYYY'), filter, setFilter)}
          {...datePikerProps}
        />}
      </div>
    </div>
  );
};
