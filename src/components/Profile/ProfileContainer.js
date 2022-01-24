import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {addPost, getUserProfile, updateNewPostText} from "../../redux/profilePageReducer";
import {compose} from "redux";
import {withRouter2} from "../../hoc/WithRouter";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.userId
        if (!userId) {
            userId = '21501';
        }
        this.props.getUserProfile(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})


export const ProfileContainer = compose(
    connect(mapStateToProps,
        {
            addPost,
            getUserProfile,
            updateNewPostText,
        }),
    withRouter2,
    withAuthRedirect
)(ProfileAPIContainer)
