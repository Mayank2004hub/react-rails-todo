import { Menu, Layout } from 'antd'
import { Link } from 'react-router-dom'
import React from 'react'
import { useHistory } from 'react-router'
import AppRoutes from '../helpers/AppRoutes'

const Sidebar = () => {
  const history = useHistory()

  return <Layout.Sider
    style={{
      overflow: 'auto',
      height: '100vh',
      position: 'fixed',
    }}
    width={200}
    className="site-layout-background"
    theme="light"
  >
    <Menu
      theme="light"
      selectedKeys={[history.location.pathname]}
      defaultOpenKeys={["open"]}
      mode="inline"
    >
      <Menu.Item key={AppRoutes.home}>
        <Link to={AppRoutes.home}>Home</Link>
      </Menu.Item>
    </Menu>
  </Layout.Sider>
}

export default Sidebar
