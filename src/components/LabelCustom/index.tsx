import { Dispatch, FC, SetStateAction } from 'react';
import { Input, Select, InputProps, SelectProps, DatePickerProps, DatePicker, Col } from 'antd';
import {
  SearchOutlined,
  UpOutlined,
  DownOutlined
} from '@ant-design/icons';
import lodash from 'lodash';
import dayjs from 'dayjs';
interface LabelCustomProps {
  name: string,
  label: string;
  type: 'input' | 'select' | 'date-piker' | 'none';
  inputProps?: InputProps;
  selectProps?: SelectProps;
  datePikerProps?: DatePickerProps;
  openSearch: boolean;
  setOpenSearch: Dispatch<SetStateAction<boolean>>;
  filter: any;
  setFilter: Dispatch<SetStateAction<any>>;
}

export const LabelCustom: FC<LabelCustomProps> = (props) => {
  const { name, label, type, inputProps, selectProps, datePikerProps, openSearch, setOpenSearch, filter, setFilter } = props;

  const handleInputChange = (key: string, value: any) => {
    let temp = lodash.merge({}, filter);
    temp[key] = { value: value, ...temp[key] };
    setFilter(temp);
  };

  const changeDataSort = (sortKey: string, sortOrder: string) => {
    const itemKeys = Object.entries(filter).map(([key, value]: any) => {
      const resetValue = { ...value, order: sortKey === key ? sortOrder : 'null' }
      return [key, resetValue]
    });
    return Object.fromEntries(itemKeys);
  }

  const handleSortClick = (key: string) => {
    let temp = lodash.merge({}, filter);
    if (temp[key].order === 'null') {
      setFilter(changeDataSort(key, 'ascend'));
    } else if (temp[key].order === 'ascend') {
      setFilter(changeDataSort(key, 'descend'));
    } else {
      setFilter(changeDataSort(key, 'null'));
    }
  }

  const onOpenSearchClick = () => {
    setOpenSearch(!openSearch);
  }

  return (
    <div>
      <Col
        className={type === 'none' ? 'dpl-flex gap-4 pd16 justify-content-center' : 'dpl-flex gap-4 pd16'}
        style={{ minHeight: '54px' }}
      >
        {!!label ? label : (<>
          {openSearch ? <UpOutlined onClick={onOpenSearchClick}/> : <DownOutlined onClick={onOpenSearchClick} />}
        </>)}
      </Col>
      {openSearch && <Col className='dpl-flex gap-4  px-14 py-8 bg-color-gray3' style={{ height: '48px' }}>
        {type === 'select' && !!selectProps && <Select
          onChange={(value) => handleInputChange(name, value)}
          {...selectProps}
        />}
        {type === 'input' && !!inputProps && <Input
          suffix={<SearchOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
          onChange={(e) => handleInputChange(name, e.target.value)}
          {...inputProps}
        />}
        {type === 'date-piker' && !!datePikerProps && <DatePicker
          onChange={(value) => handleInputChange(name, dayjs(value).format('DD/MM/YYYY'))}
          {...datePikerProps}
        />}
      </Col>}
    </div>
  );
};
