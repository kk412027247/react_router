import React from 'react';

import {View as TopMenu} from '../components/TopMenu';

const App = ({children}) => {
  return(
    <div>
      <TopMenu />
      <div>{children}</div>
    </div>
  )
};
export default App;
