import React, { FC, ReactNode, useEffect, useState } from 'react';
import './styles.scss';
import {
  TeamOutlined,
  UserOutlined,
  TableOutlined
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

const { Content, Header, Sider } = Layout;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('User', '1', <UserOutlined />),
  getItem('Table', 'table', <TableOutlined />),
  getItem('Friend', 'friend', <TeamOutlined />),
];

const MainLayout: FC<{ title: string; children: ReactNode }> = (props) => {
  const {title, children} = props;
  // const navigate = useNavigate();
  // const location = useLocation();
  const [collapsed, setCollapsed] = useState(true);
  const [activeKey, setActiveKey] = useState<string>('');

  // useEffect(() => {
  //   if (location.pathname && location.pathname !== '/') {
  //       let pathname: string[] = location.pathname.split('/');
  //       setActiveKey(pathname[pathname.length - 1])
  //   }
  // }, [location.pathname]);

  const handleClickMenu = (value: any) => {
    let key = value.key.toString();
    if (key !== '1') {
      setActiveKey(key);
      // navigate(`/${key}`);
    } else {
      setActiveKey(key);
      // navigate('/');
    }
  };

  return (
    <div className='main-layout'>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
          <div className="demo-logo-vertical" />
          <Menu onClick={handleClickMenu} theme="dark" selectedKeys={[activeKey]} defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
        <Layout>
          <Header className="header">
            <div className={'dpl-flex justify-content-between align-items-center'}>
              <span className={'txt-size-h5 robotomedium'}>{title ? title : ''}</span>
            </div>
          </Header>
          <Content className='content'>
            <div
              style={{
                padding: 24,
                minHeight: 360,
              }}
            >
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default MainLayout;
