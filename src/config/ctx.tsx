import React from 'react';
import { string } from 'prop-types';
export const BaseContext = React.createContext({
  config: {
    username: '',
    session: '',
    role: 1
  },
  changeCfg: (c:any) => {}
});