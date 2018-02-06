import React from 'react';
import {connect} from 'dva';
import {Route, Redirect, Switch} from 'dva/router';
import {Scrollbars} from 'react-custom-scrollbars';


const IndexPage = props => {
  const {children, location: {pathname}} = props;
  console.log(children);
  return (
    <div>
      <h1>layout</h1>
      {/*<Scrollbars>*/}
        <Switch>
          {children.map(r => {
            const {path, component: Component} = r;
            return (<Route exact path={path} component={Component}/>)
          })
          }
          <Redirect exact from="/" to={children[0] ? children[0].path : '/'}/>
          <Route component={null}/>
        </Switch>
      {/*</Scrollbars>*/}
    </div>
  );
};


IndexPage.propTypes = {};

export default connect()(IndexPage);
