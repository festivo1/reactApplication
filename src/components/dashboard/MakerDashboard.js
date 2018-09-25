import React, { Component } from "react";

import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../../constants';
import logo from '../../assets/images/logo.png';
import bankLogo from "../../assets/images/bfi-logo.png";
import { Form, Input, Button, Icon, notification } from 'antd';
import { MenuItem, Nav, Navbar, NavItem, NavDropdown } from "react-bootstrap";
import { Header, Footer } from "../user/login/Login";
class MakerDashboard extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <div className="main_container" id="main_container"> */}
                    <MainNavBar />
                    <GreetingAndDateNavBar />
                    <ScreeningRequestStat/>
                </div>
            // </div>
        );
    }
}
export default MakerDashboard;

class MainNavBar extends React.Component {
    render() {
        return (
            <div>
                <Navbar>

                    <Nav pullLeft>
                        <NavDropdown eventKey={1} title="Screening" id="basic-nav-dropdown">
                            <MenuItem eventKey={1.1}><a className="content-links"
                                href="${pageContext.request.contextPath}/screeningn/requestForm"><b>Send
Request (Natural person)</b></a></MenuItem>
                            <MenuItem eventKey={1.2}>  <a className="content-links"
                                href="${pageContext.request.contextPath}/screeningl/requestForm"><b>Send
Request (Legal person)</b></a></MenuItem>

                            <hr style={{ margin: '4px' }} />

                            <MenuItem eventKey={1.3}><a className="content-links"
                                href="${pageContext.request.contextPath}/screening/migratedKYCListForm"><b>Screen
Migrated KYC</b></a></MenuItem>

                            <hr style={{ margin: '4px' }} />

                            <MenuItem eventKey={1.4}>  <a className="content-links"
                                href="${pageContext.request.contextPath}/screening/replyListForm"><b>View
Replies - Natural</b></a></MenuItem>
                            <MenuItem eventKey={1.5}> <a className="content-links"
                                href="${pageContext.request.contextPath}/screeningl/replyListForm"><b>View
Replies - Legal</b></a></MenuItem>

                            <hr style={{ margin: '4px' }} />

                            <MenuItem eventKey={1.6}> <a className="content-links"
                                href="${pageContext.request.contextPath}/upload/mt103prt"><b>Upload
SWIFT Print File(.prt)</b></a></MenuItem>
                            <MenuItem eventKey={1.7}><a className="content-links"
                                href="${pageContext.request.contextPath}/upload/virtual-account"><b>Upload
Virtual Account (excel)</b></a></MenuItem>
                        </NavDropdown>

                        <NavDropdown eventKey={2} title="KYC" id="basic-nav-dropdown">

                            <MenuItem eventKey={2.1}><a className="content-links"
                                href="${pageContext.request.contextPath}/kyc/requestListForm"><b>View
                KYC Requests</b></a></MenuItem>
                            <MenuItem eventKey={2.2}><a className="content-links"
                                href="${pageContext.request.contextPath}/kyc/refreshListForm"><b>KYC
                Refresh</b></a></MenuItem>

                        </NavDropdown>
                        <NavDropdown eventKey={3} title="Lists" id="basic-nav-dropdown">
                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/lists/hrpSearchForm"><b>PEP
                Search</b></a></MenuItem>

                            <hr style={{ margin: '4px' }} />

                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/kycSearchForm"><b>KYC
                Search - Natural</b></a></MenuItem>
                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/kyclSearchForm"><b>KYC
                Search - Legal</b></a></MenuItem>
                            <hr style={{ margin: '4px' }} />

                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/sanctionLists/un/individualSearchForm"><b>UN
                Designated Individual Search</b></a></MenuItem>

                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/sanctionLists/un/entitySearchForm"><b>UN
                Designated Entity Search</b></a></MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={4} title="Report" id="basic-nav-dropdown">
                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/report/kycGap/status-form"><b>KYC
                Status</b></a></MenuItem>
                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/report/str/cust-form"><b>Suspicious
                Transaction</b></a></MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={5} title="Settings" id="basic-nav-dropdown">
                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/settings/changePassword"><b>Change
                Password</b></a></MenuItem>
                            <MenuItem><a className="content-links"
                                href="${pageContext.request.contextPath}/view/natclientcode"><b>Update Client Code Before KYC</b></a></MenuItem>
                        </NavDropdown>
                        <NavDropdown eventKey={6} title="Notifications" id="basic-nav-dropdown">
                            <ul id="menu1" className="dropdown-menu list-unstyled msg_list"
                                role="menu">

                                <li>
                                    <div className="text-center">
                                        <a> <strong>Close</strong> <i className="fa fa-angle-right"></i>
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </NavDropdown>
                    </Nav>
                    <Nav pullRight>
                        <NavItem eventKey={7}><a className='btn btn-primary pull-right' href="#"
                            disabled style={{ color: '#f3f2f3' }}>Maker user logged in:Maker1
            {/* ${user.username}@${user.solId} */}
                        </a></NavItem>
                        <NavItem eventKey={8}><a className='btn btn-danger pull-right clear-active' href="">
                            {/* <c:url value=" /logout" /> */}
                            <i className="fa fa-sing-out"
                                aria-hidden="true">
                            </i>Logout
        </a></NavItem>

                    </Nav>

                </Navbar>


            </div>
        );
    }
}

class GreetingAndDateNavBar extends React.Component {
    render() {
        return (<nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="x_title">
                    {/* <h2>Greetings, ${user.username}!</h2> */}
                    <div className="clearfix"></div>
                    <div id="date-display"></div>
                </div>

                Greetings, Maker1!
                <br></br>
                Date:
                {/* <script>
                                                    $("#bfi-logo").html("${bfiName}");
                                                    var today = new Date();
                                                    var year = today.getFullYear();
                                                    var month = today.getMonth() + 1;
                                                    var day = today.getDate();
                                                    var dayOfWeek = [ "Sunday", "Monday",
                                                            "Tuesday", "Wednesday",
                                                            "Thursday", "Friday",
                                                            "Saturday" ][today.getDay()];
                                                    $("#date-display").html(
                                                    "<b>Today is: " + dayOfWeek
                                                            + " " + day + "-"
                                                            + month + "-" + year
                                                            + "</b>");
                                        </script> */}
            </div>
        </nav>);
    }
}

class ScreeningRequestStat extends React.Component {
    render() {
        return (
            <div className="right_col" id="right-col" role="main">
                <div className="">
                    <div className="row" id="page-content">
                        <div className="col-md-12 col-sm-12 col-xs-12"
                            id="user-activity-base-div">
                            <div className="x_panel">

                                {/* <!-- DASHBOARD CONTENT --> */}
                                <div className="x_content">

                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2>Natural Screening Request Statistics</h2>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="x_content">
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="chart-container" style={{ width: '30vw' }}>
                                                        <canvas id="myPieChart2"></canvas>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="chart-container"
                                                        style={{ position: 'relative', height: '25vh', width: '25vw' }}>
                                                        <div className="legend" id="myPieChart2Legend"
                                                            style={{ float: 'left', paddingTop: '30px' }}></div>
                                                        <div style={{ clear: 'both' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-sm-6 col-xs-12">
                                        <div className="x_panel">
                                            <div className="x_title">
                                                <h2>Legal Screening Request Statistics</h2>
                                                <div className="clearfix"></div>
                                            </div>
                                            <div className="x_content">
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="chart-container"
                                                        style={{ position: 'relative', width: "30vw" }}>
                                                        <canvas id="myPieChart1"></canvas>
                                                    </div>
                                                </div>
                                                <div className="col-md-6 col-sm-6 col-xs-12">
                                                    <div className="chart-container"
                                                        style={{ position: 'relative', height: '25vh', width: '25vw' }}>
                                                        <div className="legend" id="myPieChart1Legend"
                                                            style={{ float: 'left', paddingTop: '30px' }}></div>
                                                        <div style={{ clear: 'both' }}></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- /CONTENT --> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>

        );
    }
}

class NaturalScreeningRequestStat extends React.Component {

}
class LegalScreeningRequestStat extends React.Component {

}