import React from 'react'
import Navbar from './Navbar'
import styled from "styled-components"
import {Outlet} from 'react-router-dom'
import {
    MenuFoldOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import {Button, Layout, Menu, theme} from 'antd';
import {useState} from 'react';
import {ItemMenu} from '../Data';

const {Header, Sider, Content} = Layout;

const LayoutCore = () => {

    const [collapsed, setCollapsed] = useState(false);
    const {
        token: {colorBgContainer},
    } = theme.useToken();

    return (
        <>
            {/* <Navbar/> */}
            <Layout style={stylelayouts}>
                <Sider trigger={null} collapsible collapsed={collapsed}>
                    <Logo collapsed={collapsed}>
                        <img style={{width: "100%"}} src="" alt="logo"/>
                    </Logo>
                    <Menu
                        theme="dark"
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={ItemMenu}
                    />
                </Sider>
                <Layout>
                    <Header
                        style={{
                            padding: 0,
                            background: colorBgContainer,
                        }}
                    >
                        <Button
                            type="text"
                            icon={collapsed ? <MenuFoldOutlined/> : <MenuFoldOutlined/>}
                            onClick={() => setCollapsed(!collapsed)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Header>
                    <Content
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                            background: colorBgContainer,
                            overflow: "scroll"
                        }}
                    >
                        <Outlet/>
                    </Content>
                </Layout>
            </Layout>

        </>
    )
}
const Logo = styled.div`
  width: ${props => props.collapsed ? "60px" : "80px"};
  height: ${props => props.collapsed ? "80px" : "80px"};
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const stylelayouts = {
    height: "100vh",
}

export default LayoutCore