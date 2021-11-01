import React from 'react';

import { Route } from 'react-router-dom';

import Layout from './LayoutPage';

const RouteApp = ({ component: Component , ...rest }) => {
  
  return (
    <Route
      render={(routeProps) => (
        <Layout>
          
          <Component {...routeProps} />
        </Layout>
      )}
    />
  );
};

export default RouteApp;