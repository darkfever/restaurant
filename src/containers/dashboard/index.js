import { Layout, Menu, Button } from 'antd'
import { Link, Route } from 'react-router-dom';
import Kitchen from '../admin/kitchen';
import Restaurant from '../admin/restaurant';
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as authActions from '../../actions/authActions'
import { withRouter } from 'react-router-dom'
import Order from '../admin/order'
import Review from '../admin/review'
import User from '../admin/user'
import '../dashboard/dashboard.css'

const { Header, Content, Footer, Sider } = Layout;

function Dashboard(props){

    return (
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="logo" />
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1">
                        <Link to={'/dashboard/kitchens'}>Kitchens</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to={'/dashboard/restaurants'}>Restaurants</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to={'/dashboard/orders'}>Orders</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to={'/dashboard/reviews'}>Reviews</Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to={'/dashboard/users'}>Users</Link>
                    </Menu.Item>
                    <center><Button type="default" onClick={() => props.authActions.signOut(props.history)}>Выход</Button></center>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{ padding: 0 }} />
                <Content style={{ margin: '24px 16px 0', height: '100vh' }}>
                    <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                        <Route exact path="/dashboard/kitchens" component={Kitchen} />
                        <Route exact path="/dashboard/restaurants" component={Restaurant} />
                        <Route exact path="/dashboard/orders" component={Order} />
                        <Route exact path="/dashboard/reviews" component={Review} />
                        <Route exact path="/dashboard/users" component={User} />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
}

const mapStateToProps = state => ({
    isLoading: state.authReducer.isLoading,
    isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = dispatch => ({
    authActions: bindActionCreators(authActions, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard))