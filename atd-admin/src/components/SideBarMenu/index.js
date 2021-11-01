import React, { useState } from 'react';

import { Layout, Menu  } from 'antd';
import { useLocation } from 'react-router-dom';
import MenuItem from './MenuItem';
const { Sider } = Layout;
const SideBarMenu = (props) => {
  

  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();
  const onCollapse = (collapsed) => setCollapsed(collapsed);

  const dataSider  = props.sideBarData ;
  console.log(dataSider);
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[location.pathname]}
        style={{ height: '100%', borderRight: 0 }}

      > 
        {dataSider.map(item => <MenuItem {...item} key={item.id} />
       )}
        


      </Menu>
    </Sider>
  );
};

export default SideBarMenu;