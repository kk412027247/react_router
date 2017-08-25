import React, { Component } from 'react';

import {View as TopMenu} from '../components/TomMenu';

const App = ({children}) => {
  return(
    <div>
      <TopMenu />
      <div>{children}</div>
    </div>
  )
};
export default App;
