import React , { useState, useEffect }from 'react';
import { Layout  } from 'antd';
import Breadcrumbs from '../../components/LayoutPage/Breadcrumbs';
import SideBarMenu from '../../components/SideBarMenu';
import { Table } from 'antd';
import axios from 'axios';

const User = () => {

    const [tableData , setTableData ] = useState();
    const columns = [
        {
          title: 'CreatedAt',
          dataIndex: 'createdAt',
          key: 'createdAt',
        },
        {
          title: 'Name User 2',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Total Account',
          dataIndex: 'total',
          key: 'total',
        },
        {
            title: 'Transaction Type',
            dataIndex: 'transaction',
            key: 'transaction',
          }
    ];
    const getTableData = async () => {
        try {
          const res = await axios.get(`https://617cbd331eadc500171362ff.mockapi.io/fakeResume`);
    
          setTableData(res.data);
        } catch (error) {
          console.log(error);
        }
    };
    const sideBarData = [
        {
            id : 1 ,
            name : 'Sider User 1',
            path : '/sider-user-1',
            sub : [
            {
                id : 3 , 
                name : 'Sider User sub 1',
                path : '/side-user-sub-1'
            },
            {
                id : 4 , 
                name : 'Sider User sub 2',
                path : '/side-user-sub-2'
            }
            ]
        }, 
        {
            id : 2 , 
            name : 'Sider User 2',
            path : '/sider-user-2',
            sub : []
        }
    ]
    useEffect(() => getTableData(), []);

    return (
        <Layout >
        
        <SideBarMenu sideBarData={sideBarData} />

        <Layout>
          <Breadcrumbs  />
          <Layout style={{ margin: '10px 16px' }}> 
            <Table dataSource={tableData} columns={columns} />
          </Layout>
        </Layout>

      </Layout> 
       
    );
}

export default User;