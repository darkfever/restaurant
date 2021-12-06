import React from "react"
import { connect } from "react-redux"
import { Route, Redirect } from "react-router-dom"

const AdminRoute = ({ component: Component, auth, ...rest }) => <Route {...rest} render={
    props => auth.isAuth && auth.userRole === 'admin' ? <Component {...props} /> : <Redirect to="/signin" />
} />
const mapStateToProps = (state) => ({
    auth: state.authReducer
})
export default connect(mapStateToProps)(AdminRoute);