import { FC } from "react";
import MainLayout from "../../components/Layout";
import { Col, Form, Input, Row, Tabs, TabsProps, DatePicker, Select } from "antd";
import { useForm } from "antd/es/form/Form";

const { RangePicker } = DatePicker;

const DetailPage: FC<{}> = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const items: TabsProps['items'] = [
    {
      key: '1',
      label: 'Chi tiết hố sơ',
      children: <ProfileDetail />,
    },
    {
      key: '2',
      label: 'Lập phương án sửa chữa',
      children: 'Content of Tab Pane 2',
    }
  ];
  return (
    <MainLayout title="Chi tiết hồ sơ">
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </MainLayout>
  );
}

const ProfileDetail: FC<{}> = () => {
  const [form] = useForm();
  return <div className="bg-color-white">
    <Form
      form={form}
      layout="vertical"
      autoComplete="off"
    >
      <Row gutter={16} className={'dpl-flex pd24'}>
        <Col lg={12} md={24} className="border-radius6 border-1x bd-color-mix-blue">
          {/* <div className="bg-color-blue height24px width100"></div> */}
          <Row gutter={16}>

            <Col lg={12} md={24}>
              <Form.Item
                label="Đơn vị"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Số đơn bảo hiểm"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Hiệu lực bảo hiểm"
                name=""
                rules={[]}
              >
                <RangePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Tên NĐBH"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Số ấn chỉ"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="BSK (SK/SM)"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Tên PKD"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Tình trạng nộp phí"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Giá trị thực tế"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Ngày nhập"
                name=""
                rules={[]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Số hồ sơ GĐ"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Trạng thái"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Loại HSGĐ"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
            </Col>

            <Col lg={12} md={24}>
              <Form.Item
                label="Số lần giám định"
                name=""
                rules={[]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Tên lái xe"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Ghi chú"
                name=""
                rules={[]}
              >
                <Input style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Sẩn phẩm"
                name=""
                rules={[]}
              >
                <Select mode="tags" style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Ngày tổn thất"
                name=""
                rules={[]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              
              <Form.Item
                label="Ngày thông báo"
                name=""
                rules={[]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Địa điểm TT"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Mã nguyên nhân TT"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Nguyên nhân TT"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Ngày GĐ"
                name=""
                rules={[]}
              >
                <DatePicker style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Địa điểm GĐ"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Mã địa điểm tổn thất"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
              <Form.Item
                label="Đơn vị GĐ hộ"
                name=""
                rules={[]}
              >
                <Select style={{ width: '100%' }} />
              </Form.Item>
            </Col>
          </Row>
        </Col>
        <Col lg={12} md={24}>Tab B</Col>
      </Row>
    </Form>
  </div>
}

export default DetailPage;