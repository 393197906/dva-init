import React from 'react';
import {Router, Route, Switch} from 'dva/router';
import dynamic from 'dva/dynamic';
import navConfig from './routeConfig'

// dynamic.setDefaultLoadingComponent(() => {
//   return ;
// });


export default ({history, app}) => {
  return (
    <Router history={history}>
      <Switch>
        {
          navConfig(app).map(item => {
            const {path, component: Component, children} = item;
            return (
              <Route path={path} component={props => <Component {...props} children={children}/>}/>
            )
          })
        }
      </Switch>
    </Router>
  );
}

