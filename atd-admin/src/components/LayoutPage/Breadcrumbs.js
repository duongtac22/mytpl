import React from "react";
import { Link, useLocation} from "react-router-dom";
import { Breadcrumb } from "antd";

const Breadcrumbs = () => {
  const location = useLocation();
  const { pathname } = location ;
  const breadcrumbItem = pathname.split('/').filter((item) => item );
  return(
  <Breadcrumb style={{ margin: '10px 16px' }}>

    {breadcrumbItem.length > 0 ? (
        <Breadcrumb.Item>
            <Link to="/"> Home </Link>
        </Breadcrumb.Item>
    ) : (
        <Breadcrumb.Item>
             Home 
        </Breadcrumb.Item>
    )}

    {breadcrumbItem.map((value,index) => {
        // check item cuoi
        const checkLast = index === breadcrumbItem.lenght - 1 ;

        // split url
        const path = `/${breadcrumbItem.slice(0,index+1).join("/")}`;

        return checkLast ? (
            <Breadcrumb.Item>
                {value} 
            </Breadcrumb.Item>
        )
            
        : (
            <Breadcrumb.Item>
                <Link to={`${path}`}> {value}  </Link>
            </Breadcrumb.Item>
        ); 

    })}
        
  </Breadcrumb>
  )
};
export default Breadcrumbs;