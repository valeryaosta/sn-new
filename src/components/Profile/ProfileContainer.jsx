import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";


// wrapper function, which is identical in principle to withRouter (because of using router v6)
function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{location, navigate, params}}
            />
        );
    }

    return ComponentWithRouterProp;
}


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Navigate to='/login' replace/>
        }

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(ProfileContainer));