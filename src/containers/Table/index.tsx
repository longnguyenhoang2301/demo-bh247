import { Dispatch, FC, SetStateAction, useMemo, useState } from "react";
import MainLayout from '../../components/Layout';
import { Button, Col, Input, Radio, Row, Select, Table, TableColumnsType } from 'antd';
import { LabelCustom, ModalAddEdit } from '../../components';
import { useForm } from 'antd/es/form/Form';
import { EditOutlined, EyeOutlined } from '@ant-design/icons';
import lodash from 'lodash';

interface DataType {
  key: React.Key;
  so_hsgd: string;
  ten_don_vi: string;
  ngay_nhap: string;
  ten_ndbh: string;
  so_seria: string;
  bks_sk_sm: string;
  ngay_ton_that: string;
  uoc_ban_dau: string;
  trang_thai: string;
  loai_hsgd: string;
  cbtt_gd: string;
  giao_gd: string;
  nhan_gd: string;
}

const TablePage: FC<{}> = () => {
  const [form] = useForm();
  const [open, setOpen] = useState<boolean>(false);
  const [filter, setFilter] = useState<any>({
    key: '',
    so_hsgd: '',
    ten_don_vi: '',
    ngay_nhap: '',
    ten_ndbh: '',
    so_seria: '',
    bks_sk_sm: '',
    ngay_ton_that: '',
    uoc_ban_dau: '',
    trang_thai: '',
    loai_hsgd: '',
    cbtt_gd: '',
    giao_gd: '',
    nhan_gd: '',
  });

  const onSubmit = () => {
    console.log('form', form.getFieldsValue());
    setOpen(false);
  }

  const columns: TableColumnsType<DataType> = [
    {
      title: <LabelCustom
        name="so_hsgd"
        label="Số HSGĐ"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 150,
      showSorterTooltip: false,
      sorter: (a, b) => a.so_hsgd.localeCompare(b.so_hsgd),
      dataIndex: 'so_hsgd',
    },
    {
      title: <LabelCustom
        name="ten_don_vi"
        label="Tên đơn vị"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 200,
      showSorterTooltip: false,
      sorter: (a, b) => a.ten_don_vi.localeCompare(b.ten_don_vi),
      dataIndex: 'ten_don_vi',
    },
    {
      title: <LabelCustom
        name="ngay_nhap"
        label="Ngày nhập"
        type="date-piker"
        datePikerProps={{
          size: 'small',
          placeholder: '',
          onClick: (e) => e.stopPropagation(),
          // style: {
          //   width: '100%'
          // }
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 160,
      dataIndex: 'ngay_nhap',
      showSorterTooltip: false,
      sorter: {
        compare: (a, b) => a.ngay_nhap.localeCompare(b.ngay_nhap),
      },
    },
    {
      title: <LabelCustom
        name="ten_ndbh"
        label="Tên NĐBH"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 200,
      showSorterTooltip: false,
      sorter: (a, b) => a.ten_ndbh.localeCompare(b.ten_ndbh),
      dataIndex: 'ten_ndbh',
    },
    {
      title: <LabelCustom
        name="so_seria"
        label="Số Seria"
        type="select"
        selectProps={{
          size: 'small',
          options: [
            {
              label: '1',
              value: '1'
            },
            {
              label: '2',
              value: '2'
            },
            {
              label: '3',
              value: '3'
            },
          ],
          onClick: (e) => e.stopPropagation(),
          style: {
            width: '100%'
          }
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 120,
      showSorterTooltip: false,
      sorter: (a, b) => a.so_seria.localeCompare(b.so_seria),
      dataIndex: 'so_seria',
    },
    {
      title: <LabelCustom
        name="bks_sk_sm"
        label="BKS(SK/SM)"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 120,
      showSorterTooltip: false,
      sorter: (a, b) => a.bks_sk_sm.localeCompare(b.bks_sk_sm),
      dataIndex: 'bks_sk_sm',
    },
    {
      title: <LabelCustom
        name="ngay_ton_that"
        label="Ngày tổn thất"
        type="date-piker"
        datePikerProps={{
          size: 'small',
          placeholder: '',
          onClick: (e) => e.stopPropagation(),
          // style: {
          //   width: '100%'
          // }
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 160,
      dataIndex: 'ngay_ton_that',
      showSorterTooltip: false,
      sorter: {
        compare: (a, b) => a.ngay_ton_that.localeCompare(b.ngay_ton_that),
      },
    },
    {
      title: <LabelCustom
        name="uoc_ban_dau"
        label="Ước ban đầu"
        type="input"
        inputProps={{
          size: 'small',
          type: 'number',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 150,
      showSorterTooltip: false,
      sorter: (a, b) => Number(a.uoc_ban_dau) - Number(b.uoc_ban_dau),
      dataIndex: 'uoc_ban_dau',
    },
    {
      title: <LabelCustom
        name="loai_hsgd"
        label="Loại GSGĐ"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 150,
      showSorterTooltip: false,
      sorter: (a, b) => a.loai_hsgd.localeCompare(b.loai_hsgd),
      dataIndex: 'loai_hsgd',
    },
    {
      title: <LabelCustom
        name="cbtt_gd"
        label="CBTT GĐ"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 150,
      showSorterTooltip: false,
      sorter: (a, b) => a.cbtt_gd.localeCompare(b.cbtt_gd),
      dataIndex: 'cbtt_gd',
    },
    {
      title: <LabelCustom
        name="giao_gd"
        label="Giao GĐ"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 120,
      showSorterTooltip: false,
      sorter: (a, b) => a.giao_gd.localeCompare(b.giao_gd),
      dataIndex: 'giao_gd',
    },
    {
      title: <LabelCustom
        name="nhan_gd"
        label="Nhận GĐ"
        type="input"
        inputProps={{
          size: 'small',
          onClick: (e) => e.stopPropagation(),
        }}
        filter={filter}
        setFilter={setFilter}
      />,
      width: 120,
      showSorterTooltip: false,
      sorter: (a, b) => a.nhan_gd.localeCompare(b.nhan_gd),
      dataIndex: 'nhan_gd',
    },
    {
      title: '',
      dataIndex: 'action',
      key: 'action',
      width: 100,
      fixed: 'right',
      render: (text: string, record: any, index: number) => {
        return <Row className={'justify-content-center gap-6'}>
          <Col><EyeOutlined /></Col>
          <Col><EditOutlined /></Col>
          {/* <Col><DeleteOutlined /></Col> */}
        </Row>
      }
    }
  ];

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const data: DataType[] = [
    {
      key: '1',
      so_hsgd: '22/33/123456',
      ten_don_vi: 'PVI Cầu Giấy',
      ngay_nhap: '12/12/2022',
      ten_ndbh: 'NGUYỄN VĂN A',
      so_seria: '1432',
      bks_sk_sm: 'SK431555',
      ngay_ton_that: '12/12/2023',
      uoc_ban_dau: '10000000',
      trang_thai: '1',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '2',
      so_hsgd: '22/31/123456',
      ten_don_vi: 'PVI Đống Đa',
      ngay_nhap: '11/12/2022',
      ten_ndbh: 'NGUYỄN VĂN B',
      so_seria: '866422',
      bks_sk_sm: '22H24422',
      ngay_ton_that: '12/12/2022',
      uoc_ban_dau: '40000000',
      trang_thai: '2',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '3',
      so_hsgd: '01/33/123456',
      ten_don_vi: 'PVI Cầu Giấy',
      ngay_nhap: '12/12/2022',
      ten_ndbh: 'NGUYỄN TRỌNG C',
      so_seria: '012342',
      bks_sk_sm: 'SK131555',
      ngay_ton_that: '12/12/2023',
      uoc_ban_dau: '20000000',
      trang_thai: '1',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '4',
      so_hsgd: '22/33/123456',
      ten_don_vi: 'PVI Thanh Xuân',
      ngay_nhap: '12/01/2022',
      ten_ndbh: 'NGUYỄN VĂN D',
      so_seria: '995433',
      bks_sk_sm: 'SK431555',
      ngay_ton_that: '11/11/2023',
      uoc_ban_dau: '50000000',
      trang_thai: '3',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '5',
      so_hsgd: '22/33/123456',
      ten_don_vi: 'PVI Cầu Giấy',
      ngay_nhap: '12/12/2022',
      ten_ndbh: 'NGUYỄN VĂN A',
      so_seria: '1432',
      bks_sk_sm: 'SK431555',
      ngay_ton_that: '12/12/2023',
      uoc_ban_dau: '10000000',
      trang_thai: '1',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '6',
      so_hsgd: '22/31/123456',
      ten_don_vi: 'PVI Đống Đa',
      ngay_nhap: '11/12/2022',
      ten_ndbh: 'NGUYỄN VĂN B',
      so_seria: '866422',
      bks_sk_sm: '22H24422',
      ngay_ton_that: '12/12/2022',
      uoc_ban_dau: '40000000',
      trang_thai: '2',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '7',
      so_hsgd: '01/33/123456',
      ten_don_vi: 'PVI Cầu Giấy',
      ngay_nhap: '12/12/2022',
      ten_ndbh: 'NGUYỄN TRỌNG C',
      so_seria: '012342',
      bks_sk_sm: 'SK131555',
      ngay_ton_that: '12/12/2023',
      uoc_ban_dau: '20000000',
      trang_thai: '1',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '8',
      so_hsgd: '22/33/123456',
      ten_don_vi: 'PVI Thanh Xuân',
      ngay_nhap: '12/01/2022',
      ten_ndbh: 'NGUYỄN VĂN D',
      so_seria: '995433',
      bks_sk_sm: 'SK431555',
      ngay_ton_that: '11/11/2023',
      uoc_ban_dau: '50000000',
      trang_thai: '3',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '9',
      so_hsgd: '22/33/123456',
      ten_don_vi: 'PVI Cầu Giấy',
      ngay_nhap: '12/12/2022',
      ten_ndbh: 'NGUYỄN VĂN A',
      so_seria: '1432',
      bks_sk_sm: 'SK431555',
      ngay_ton_that: '12/12/2023',
      uoc_ban_dau: '10000000',
      trang_thai: '1',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '10',
      so_hsgd: '22/31/123456',
      ten_don_vi: 'PVI Đống Đa',
      ngay_nhap: '11/12/2022',
      ten_ndbh: 'NGUYỄN VĂN B',
      so_seria: '866422',
      bks_sk_sm: '22H24422',
      ngay_ton_that: '12/12/2022',
      uoc_ban_dau: '40000000',
      trang_thai: '2',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '11',
      so_hsgd: '01/33/123456',
      ten_don_vi: 'PVI Cầu Giấy',
      ngay_nhap: '12/12/2022',
      ten_ndbh: 'NGUYỄN TRỌNG C',
      so_seria: '012342',
      bks_sk_sm: 'SK131555',
      ngay_ton_that: '12/12/2023',
      uoc_ban_dau: '20000000',
      trang_thai: '1',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
    {
      key: '12',
      so_hsgd: '22/33/123456',
      ten_don_vi: 'PVI Thanh Xuân',
      ngay_nhap: '12/01/2022',
      ten_ndbh: 'NGUYỄN VĂN D',
      so_seria: '995433',
      bks_sk_sm: 'SK431555',
      ngay_ton_that: '11/11/2023',
      uoc_ban_dau: '50000000',
      trang_thai: '3',
      loai_hsgd: 'Tự giám định',
      cbtt_gd: 'Bùi Văn A',
      giao_gd: 'Giao GĐ',
      nhan_gd: 'Đang GĐ',
    },
  ];
  
  const dataSourceFilter = useMemo(() => {
    return data.filter((item: DataType) => {
      const isCheck: boolean[] = [];
      const itemKeys = Object.entries(item).map(([key, value]) => ({
        key: key,
        value: value
      }));
      itemKeys.forEach(i => {
        isCheck.push(i.value.toUpperCase().includes(filter[i.key].toUpperCase()))
      })
      return isCheck.every(e => e);
    });
  }, [data, filter])

  return <MainLayout title="Hồ sơ giám định Ô tô">
    {/* <Button onClick={() => setOpen(!open)}>Open Click</Button> */}
    <div className={'dpl-flex justify-content-between align-items-center mgbt24 pd16 bg-color-white'}>
      <Col>
        <Radio.Group defaultValue="a">
          <Radio.Button value="a">Hố sơ chưa sang PIAS</Radio.Button>
          <Radio.Button value="b">Hồ sơ đã sang PIAS</Radio.Button>
          <Radio.Button value="c">Hồ sơ đã duyệt</Radio.Button>
        </Radio.Group>
      </Col>
      <Col className='align-items-end dpl-flex gap-8'>
        <Col className=''>
          <Select placeholder="Chọn năm dữ liệu" options={[]}></Select>
        </Col>
        <Col>
          <Button onClick={() => {}}>Xuất Excel</Button>
        </Col>
      </Col>
    </div>
    <Table
      columns={columns}
      dataSource={dataSourceFilter}
      scroll={{ x: 1800 }}
    />

    <ModalAddEdit
      form={form}
      open={open}
      title='Chỉnh sửa tài khoản'
      options={[
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
              { label: 'Options 1', value: '1' },
              { label: 'Options 2', value: '2' },
              { label: 'Options 3', value: '3' }
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
              { label: 'Options 1', value: '1' },
              { label: 'Options 2', value: '2' },
              { label: 'Options 3', value: '3' }
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
            style: { width: '100%' }
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
      ]}
      onSubmit={onSubmit}
      onCancel={() => setOpen(!open)}
    />
  </MainLayout>
}

export default TablePage;