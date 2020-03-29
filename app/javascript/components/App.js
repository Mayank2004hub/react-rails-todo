import {Layout} from "antd";

const { Content } = Layout
const App = () => <Layout style={{ minHeight: '100vh' }}>
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
