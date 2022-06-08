import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {useLocation, useNavigate, useParams} from "react-router-dom";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";


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
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {


        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status ? state.profilePage.status : 'enter your status..',
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withRouter,
)(ProfileContainer)