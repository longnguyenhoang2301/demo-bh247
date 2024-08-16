import { FC } from 'react';
import { Button, Input, InputProps, SelectProps, Row, Col, Form, Select, DatePicker, DatePickerProps, CheckboxProps } from 'antd';
import { Rule } from 'antd/es/form';
import {
  SearchOutlined,
  ReloadOutlined
} from '@ant-design/icons';

interface FilterOptionProps {
  name: string;
  label: string;
  type: 'input' | 'select' | 'date-picker';
  rules: Array<Rule>;
  inputProps?: InputProps;
  selectProps?: SelectProps;
  datePickProps?: DatePickerProps;
  checkboxProps?: CheckboxProps;
}

interface FilterGroupProps {
  form: any;
  options: Array<FilterOptionProps>;
  onSubmit: () => void;
  onReset: () => void;
}

export const FilterGroup: FC<FilterGroupProps> = (props) => {
  const { form, options, onSubmit, onReset } = props;

  const onFinish = (values: any) => {
    onSubmit();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className='width100 bg-color-white pd24 border-1x bd-color-gray3 border-radius4'>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Row gutter={16} className={'dpl-flex mgbt8'}>
          {options.map((option, index) => {
            switch (option.type) {
              case 'input':
                return (
                  <Col key={index} lg={6} md={24}>
                    <Form.Item
                      label={option.label}
                      name={option.name}
                      rules={option.rules}
                    >
                      <Input {...option.inputProps} />
                    </Form.Item>
                  </Col>
                );
              case 'select':
                return (
                  <Col key={index} lg={6} md={24}>
                    <Form.Item
                      label={option.label}
                      name={option.name}
                      rules={option.rules}
                    >
                      <Select {...option.selectProps} />
                    </Form.Item>
                  </Col>
                );
              case 'date-picker':
                return (
                  <Col key={index} lg={6} md={24}>
                    <Form.Item
                      label={option.label}
                      name={option.name}
                      rules={option.rules}
                    >
                      <DatePicker {...option.datePickProps} />
                    </Form.Item>
                  </Col>
                );
              default:
                return <div key={index}></div>;
            }
          })}
        </Row>
        <Col>

          <Row className={'align-items-center justify-content-end mgt15'}>
            <Col>

              <span onClick={onReset} className={'mgr20 cursor-pointer txt-size-h8 robotoregular txt-color-gray'}>
                <ReloadOutlined className={''} /> &nbsp;
                {'Refresh'}</span>
              <Button
                className={'border-radius6 _btn-search'}
                onClick={() => { }}
              >
                <SearchOutlined className={''} />
                <span className={'txt-size-h7 robotoregular'}>{'Tìm kiếm'}</span>
              </Button>
            </Col>
          </Row>
        </Col>
      </Form>
    </div>
  );
};

