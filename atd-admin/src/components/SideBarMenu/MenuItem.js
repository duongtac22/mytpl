import React from 'react';
import { Menu  } from 'antd';
import { Link } from 'react-router-dom';
const MenuItem = (menuData) => {
    const { SubMenu } = Menu ;
    if (menuData.sub && menuData.sub.length > 0 ) {
        return (
            <SubMenu title={menuData.name}  key={menuData.id} className="bbbb">
                
                {menuData.sub.map((item) => (
                    <MenuItem {...item} key={item.id} >
                        <Link to={item.path }> {item.name} </Link>
                    </MenuItem>
                ))}
            </SubMenu>
        );
    } else {
        return (
            <Menu.Item key={menuData.id}  {...menuData} >
                <Link to={menuData.path}> {menuData.name} </Link>
            </Menu.Item>
        );
    }
 
};

export default MenuItem;