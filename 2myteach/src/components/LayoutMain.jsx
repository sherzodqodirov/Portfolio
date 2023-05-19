import React from "react";
import { Link, Outlet } from "react-router-dom";
import { Breadcrumb, Layout, Menu, theme } from "antd";
const { Header, Content, Footer } = Layout;

const LayoutMain = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const navitem = [
    {
      key: 1,
      label: <Link to={"/"}>Admin</Link>,
    },
  {
      key: 2,
      label: <Link to={"/client"}>Client</Link>,
    },
  ];

  return (
    <Layout className="layout">
      <Header>
        <div
          style={{
            float: "left",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: 120,
            height: 31,
            margin: "16px 24px 16px 0",
            background: "rgba(255, 255, 255, 0.2)",
          }}
        >
          LOGO
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          items={navitem}
        />
      </Header>
      <Content
        style={{
          marginTop: "20px",
          padding: "0 20px",
        }}
      >
        <div
          className="site-layout-content"
          style={{
            minHeight: "75vh",
            padding: "20px",
              overflow:"scroll",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </div>
      </Content>
      <Footer
        style={{
          textAlign: "center",
        }}
      >
        Sherzod Qodirov ©2023
      </Footer>
    </Layout>
  );
};

export default LayoutMain;
