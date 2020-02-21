import React from 'react';
import Layout from './hoc/Layout/Layout';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';
import Auth from './containers/Auth/Auth';
import { connect } from 'react-redux';
import { autoLogin } from './store/actions/auth';
import Logout from './components/Logout/Logout';
import Photoloader from './containers/Photoloader/Photoloader';
import TopicList from './containers/TopicList/TopicList';
import Topic from './containers/Topic/Topic';

class App extends React.Component {

  componentDidMount() {
    this.props.autoLogin()
  }

  render() {
    let routes =
      (<Switch>
        <Route path='/topics/:id' component={Topic} />
        <Route path='/auth' component={Auth} />
        <Route path='/' exact component={Photoloader} />
        <Redirect to='/' />
      </Switch>)
    if (this.props.isAuth) {
      routes =
        (<Switch>
          <Route path='/logout' component={Logout} />
          <Route path='/topics/:id' component={Topic} />
          <Route path='/topics' component={TopicList} />
          <Route path='/' exact component={Photoloader} />
          <Redirect to='/' />
        </Switch>)

    }
    return (
      <Layout>
        {routes}
      </Layout>
    )
  }
}

function mapStateToProps(state) {
  return {
    isAuth: !!state.auth.token
  }
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
