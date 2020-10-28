import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './Route';
import Alfred from '../pages/alfred';
import notLogin from '../pages/notLogin';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Alfred} />
      {/* <Route path="/" component={notLogin} /> */}
      {/* <Route path="/alfred" exact component={Alfred} isPrivate /> */}
    </Switch>
  );
}
