import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile,updateStatus} from "../../redux/profilePageReducer";
import {compose} from "redux";
import {withRouter2} from "../../hoc/WithRouter";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.userId
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId){
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <Profile
                {...this.props}
                profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus}/>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId : state.auth.userId,
    isAuth: state.auth.isAuth,
})


export const ProfileContainer = compose(
    connect(mapStateToProps,
        {
            getUserProfile,
            getStatus,
            updateStatus,
        }),
    withRouter2,
    withAuthRedirect
)(ProfileAPIContainer)
