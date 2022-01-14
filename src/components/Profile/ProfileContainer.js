import React from 'react';
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {addPost, setUserProfile, updateNewPostText} from "../../redux/profilePageReducer";
import {compose} from "redux";
import {withRouter2} from "../../common/WithRouter";


class ProfileAPIContainer extends React.Component {

    componentDidMount() {

        let userId = this.props.userId
        if (!userId) {
            userId = '21501';
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }

}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})


export const ProfileContainer = compose(
    connect(mapStateToProps,
        {
            addPost,
            setUserProfile,
            updateNewPostText,
        }),
        withRouter2)(ProfileAPIContainer)
