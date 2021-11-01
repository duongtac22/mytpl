import React from 'react';
import { Layout  } from 'antd';
import Breadcrumbs from '../../components/LayoutPage/Breadcrumbs';
import SideBarMenu from '../../components/SideBarMenu';
const Home = () => {

const sideBarData = [
    {
        id : 1 ,
        name : 'Sider Home 1',
        path : '/sider-home-1',
        sub : [
        {
            id : 3 , 
            name : 'Sider Home sub 1',
            path : '/side-home-sub-1'
        },
        {
            id : 4 , 
            name : 'Sider Home sub 2',
            path : '/side-home-sub-2'
        }
        ]
    }, 
    {
        id : 2 , 
        name : 'Sider Home 2',
        path : '/sider-home-2',
        sub : []
    }
]

  return (
      <Layout >
        
        <SideBarMenu sideBarData={sideBarData} />

        <Layout>
          <Breadcrumbs  />
          <Layout style={{ margin: '10px 16px' }}> 
            
          </Layout>
        </Layout>

      </Layout> 
  );
};

export default Home;