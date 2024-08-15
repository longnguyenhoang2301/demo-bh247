import { FC } from 'react';
import { Button, Input, InputProps, SelectProps, Modal, Row, Col, Form, Select, DatePicker, DatePickerProps, Checkbox, CheckboxProps } from 'antd';
import { Rule } from 'antd/es/form';
import './styles.scss'

const { TextArea } = Input;

interface ModalOptionProps {
  name: string;
  label: string;
  type: 'input' | 'select' | 'date-picker' | 'mutiple-input' | 'checkbox';
  rules: Array<Rule>;
  inputProps?: InputProps;
  selectProps?: SelectProps;
  datePickProps?: DatePickerProps;
  checkboxProps?: CheckboxProps;
}

interface ModalAddEditProps {
  form: any;
  open: boolean;
  title: string;
  options: Array<ModalOptionProps>;
  onSubmit: () => void;
  onCancel: () => void;
}

export const ModalAddEdit: FC<ModalAddEditProps> = (props) => {
  const { form, open, title, options, onSubmit, onCancel } = props;

  const onFinish = (values: any) => {
    onSubmit();
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
      <Modal
        open={open}
        title={title}
        footer={[]}
        onCancel={onCancel}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Row gutter={16} className={'dpl-flex'}>
            {options.map((option, index) => {
              switch (option.type) {
                case 'input':
                  return (
                    <Col key={index} lg={12} md={24}>
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
                    <Col key={index} lg={12} md={24}>
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
                    <Col key={index} lg={12} md={24}>
                      <Form.Item
                        label={option.label}
                        name={option.name}
                        rules={option.rules}
                      >
                        <DatePicker {...option.datePickProps} />
                      </Form.Item>
                    </Col>
                  );
                case 'mutiple-input':
                  return (
                    <Col key={index} lg={24} md={24}>
                      <Form.Item
                        label={option.label}
                        name={option.name}
                        rules={option.rules}
                      >
                        <TextArea style={{ resize: 'none' }} />
                      </Form.Item>
                    </Col>
                  );
                case 'checkbox':
                  return (
                    <Col key={index} lg={12} md={24}>
                      <Form.Item
                        label={option.label}
                        name={option.name}
                        rules={option.rules}
                        valuePropName="checked"
                      >
                        <Checkbox {...option.checkboxProps} />
                      </Form.Item>
                    </Col>
                  );
                default:
                  return <div key={index}></div>;
              }
            })}
            <Col>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

