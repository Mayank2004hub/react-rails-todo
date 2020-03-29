import {Layout, Menu, Sider, SubMenu} from "antd";
import React from "react";

const Sidebar = () => {
    return <Sider width={200} className="site-layout-background">
        <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{height: '100%', borderRight: 0}}
        >
        </Menu>
    </Sider>
}