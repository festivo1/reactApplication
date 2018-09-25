import React, { Component } from 'react';
import './App.css';
import { Route,withRouter,Switch} from 'react-router-dom';
import { getCurrentUser, login } from '../util/APIUtils';
import { ACCESS_TOKEN } from '../constants';
import Login from '../components/user/login/Login';
import Profile from '../components/user/profile/Profile';
import AppHeader from '../common/AppHeader';
import NotFound from '../common/NotFound';
import LoadingIndicator from '../common/LoadingIndicator';
import PrivateRoute from '../common/PrivateRoute';
import MakeDashboard from '../components/dashboard/MakerDashboard';
import { Layout, notification } from 'antd';
import MakerDashboard from '../components/dashboard/MakerDashboard';
const { Content } = Layout;

class App extends Component {
  render(){
    return(
      
      <Login/>
    );
  }

}

export default withRouter(App);
