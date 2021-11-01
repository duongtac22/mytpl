import React from "react";
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
const { Header} = Layout;
const HeaderLayout = () => {
  const location = useLocation();
  return(
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" 
            mode="horizontal"
            defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key="/">
                <span>Home</span>
                <Link to="/"></Link>
            </Menu.Item>

            <Menu.Item key="/user">
                <span>Users</span>
                <Link to="/users"></Link>
            </Menu.Item>

      </Menu>
    </Header>
  )
};
export default HeaderLayout;