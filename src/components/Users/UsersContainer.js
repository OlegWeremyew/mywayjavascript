import React from 'react';
import {connect} from "react-redux";
import {
    setCurrentPage, toggleFollowingProgress, follow, unFollow, requestUsers,
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUserCount, getUsers
} from "../../redux/UsersSelectors";

class UsersAPIComponent extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.requestUsers(currentPage, pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props
        this.props.requestUsers(pageNumber, pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUserCount={this.props.totalUserCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}

                />
            </>

        )
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export const UsersContainer = compose(connect(mapStateToProps, {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        requestUsers,
    }),
)(UsersAPIComponent)
