import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {Navigate, useLocation, useNavigate, useParams} from "react-router-dom";
import {getUserProfile} from "../../redux/profile-reducer";
import WithAuthRedirect from "../../hoc/WithAuthRedirect";


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


        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}


const AuthRedirectComponent = WithAuthRedirect(ProfileContainer)

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
    }
}

export default connect(mapStateToProps, {getUserProfile})(withRouter(AuthRedirectComponent));