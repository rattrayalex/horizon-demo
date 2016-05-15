import React from 'react';
import { Route } from 'react-router';

import BaseLayout from './components/BaseLayout';
import Home from './components/Home';


export default (
  <Route path="/" component={BaseLayout} >
    <Route path="*" component={Home} />
  </Route>
);
