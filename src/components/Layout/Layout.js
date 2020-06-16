import React from 'react';

import Header from '../../components/Organisms/Header/Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="container">{children}</div>
  </div>
);

export default Layout;
