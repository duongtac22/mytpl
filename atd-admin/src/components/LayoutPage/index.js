import React from 'react';

import { Layout } from 'antd';

// import SideBarMenu from '../SideBarMenu';
// import Breadcrumbs from './Breadcrumbs';
// import FooterLayout from './FooterLayout';
import HeaderLayout from '../Header';
// const { Content } = Layout;

const LayoutWithRoute = ({ children }) => {
  
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <HeaderLayout></HeaderLayout>
      {/* <Layout >
        
        <SideBarMenu />

        <Layout>
          <Breadcrumbs  />
          <Layout style={{ margin: '10px 16px' }}> 
            
          </Layout>
          <FooterLayout/>
        </Layout>

      </Layout> */}
      {children}
    </Layout>
  );
};

export default LayoutWithRoute;