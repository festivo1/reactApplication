import React, { Component } from 'react';
import { login } from '../../../util/APIUtils';
import './Login.css';
// import '../../../assets/css/bootstrap.min.css';
//import '../../../assets/css/font-awesome.min.css';
// import '../../../assets/css/custom.css';
// import '../../../assets/css/select2.min.css';

import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../../constants';
import logo from '../../../assets/images/logo.png';
import bankLogo from "../../../assets/images/bfi-logo.png";
import { Form, Input, Button, Icon, notification } from 'antd';
import { FieldGroup, FormControl, ControlLabel, HelpBlock, FormGroup, ButtonToolbar } from 'react-bootstrap';
const FormItem = Form.Item;

class Login extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            username: '',
            password: '',
            tenant: ''
        };
    }
    getValidationState() {
        const length = this.state.password.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
    }

    handleUsername = (e) => {

        this.setState({ username: e.target.value });

    }
    handleTenant = (e) => {

        this.setState({ tenant: e.target.value });


    }
    handlePassword = (e) => {

        this.setState({ password: e.target.value });

    }
    handleSubmit = () => {
        alert(this.state.username + this.state.password);
    }
    render() {
        //  const AntWrappedLoginForm = Form.create()(LoginForm);


        return (

            <div className=''>
                <Header />
                {/* <!-- page content --> */}
                <div className="right_col login_col" role="main">
                    <div className="clearfix"></div>
                    <div className="x_title">
                        <h2>
                            <i className="fa fa-sign-in"></i> Login <small style={{ fontSize: '12px' }}>Please
						provide your login details.</small>
                        </h2>
                        <div className="clearfix"></div>
                    </div>
                    <div className="clearfix"></div>
                    <div className="login-container">
                        <h1 className="page-title">Login</h1>
                        <div className="login-content">
                            {/* <AntWrappedLoginForminForm onLogin={this.props.onLogin} /> */}
                            <form>
                                <FormGroup
                                    controlId="formUsername"
                                    validationState={this.getValidationState()}
                                >
                                    <ControlLabel>Username</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={this.state.username}
                                        placeholder="Username"
                                        onChange={this.handleUsername}
                                    />
                                    <FormControl.Feedback />
                                    {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                                </FormGroup>
                                <FormGroup
                                    controlId="formTenant"
                                    validationState={this.getValidationState()}
                                >
                                    <ControlLabel>Tenant</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={this.state.tenant}
                                        placeholder="Enter tenant ID"
                                        onChange={this.handleTenant}
                                    />
                                    <FormControl.Feedback />
                                    {/* <HelpBlock>Validation is based on string length.</HelpBlock> */}
                                </FormGroup>
                                <FormGroup
                                    controlId="formPassword"
                                    validationState={this.getValidationState()}
                                >
                                    <ControlLabel>password</ControlLabel>
                                    <FormControl
                                        type="text"
                                        value={this.state.password}
                                        placeholder="password"
                                        onChange={this.handlePassword}
                                    />
                                    <FormControl.Feedback />
                                    {/* <HelpBlock></HelpBlock> */}
                                </FormGroup>
                                
                                    <Button active style={{backgroundColor:'lightblue'}} onClick={this.handleSubmit}>Submit</Button>
   

                            </form>
                        </div>
                    </div>

                </div>
            </div>

        );
    }
}
export default Login;
class Header extends Component {
    render() {
        return (
            <div>
                <img src={logo} className=""></img>
                <span style={{ height: '50px', fontSize: '2em', verticalAlign: 'middle' }}>
                    | Login Panel</span>
                <div style={{ float: 'right', padding: '0px 10px' }} >
                    Licensed to: <span id="bfi-logo"></span><img
                        src={bankLogo} style={{ height: '50px', width: '60px' }}
                    ></img>
                </div>
            </div>
        );
    }
}
export { Header };

class Footer extends Component {
    render() {
        return (
            <footer className="login_col">
                <div className="pull-right">&copy; 2016-2017 TrustAML</div>
                <div className="clearfix"></div>
            </footer>
        );
    }

}
export { Footer };
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const loginRequest = Object.assign({}, values);
                login(loginRequest)
                    .then(response => {
                        localStorage.setItem(ACCESS_TOKEN, response.accessToken);
                        this.props.onLogin();
                    }).catch(error => {
                        if (error.status === 401) {
                            notification.error({
                                message: 'Polling App',
                                description: 'Your Username or Password is incorrect. Please try again!'
                            });
                        } else {
                            notification.error({
                                message: 'Polling App',
                                description: error.message || 'Sorry! Something went wrong. Please try again!'
                            });
                        }
                    });
            }
        });
    }

    render() {
        const { getFieldDecorator } = this.props.form;
        return (
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('usernameOrEmail', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                    })(
                        <Input
                            prefix={<Icon type="user" />}
                            size="default"
                            name="username"
                            placeholder="Username" />
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                        <Input
                            prefix={<Icon type="lock" />}
                            size="default"
                            name="password"
                            type="password"
                            placeholder="Password" />
                    )}
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    {/* Or <Link to="/signup">register now!</Link> */}
                </FormItem>
            </Form>
        );
    }
}


