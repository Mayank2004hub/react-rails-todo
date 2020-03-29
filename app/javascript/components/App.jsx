import 'antd/dist/antd.css'
import React from 'react'
import { Layout } from 'antd'
import NotificationAlert from './common/NotificationAlert'
import Sidebar from './Sidebar'
import SyncedUrlParams from './common/SyncedUrlParams'
import Routes from './Routes'

const { Content } = Layout

const App = () => <Layout style={{ minHeight: '100vh' }}>
  <SyncedUrlParams/>
  <NotificationAlert/>
  <Layout>
    <Sidebar/>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        <Routes/>
      </Content>
    </Layout>
  </Layout>
</Layout>

export default App
