import { FC } from 'react';
import { Button, Input, InputProps, SelectProps, Modal, Row, Col } from 'antd';
import './styles.scss'

interface ModalOptionProps {
  name: string;
  label: string;
  type: 'input' | 'select' | 'date-picker' | 'input-number';
  inputProps?: InputProps;
  selectProps?: SelectProps;
}

interface ModalAddEditProps {
  open: boolean;
  title: string;
  options: Array<ModalOptionProps>;
  onButtonSubmitClick: () => void;
  onButtonCancelClick: () => void;
}

export const ModalAddEdit: FC<ModalAddEditProps> = (props) => {
  return (
    <div>
      <Modal
        open={props.open}
        title={props.title}
        onOk={props.onButtonSubmitClick}
        onCancel={props.onButtonCancelClick}
        footer={[
          <Button key="back" onClick={props.onButtonCancelClick}>
            Return
          </Button>,
          <Button key="submit" type="primary" onClick={props.onButtonSubmitClick}>
            Submit
          </Button>,
        ]}
      >
        <Row gutter={16} className={'dpl-flex'}>
          {props.options.map((option) => {
            return(
              <Col lg={12} md={24}>
                <Row><span>{option.label}</span></Row>
                <Input
                  name={option.name}
                  value={''}
                  onChange={() => { }}
                  {...option.inputProps}
                ></Input>
              </Col>
            )
          })}
        </Row>
      </Modal>
    </div>
  );
};

