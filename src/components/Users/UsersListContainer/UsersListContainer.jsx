import React from 'react'
import { connect } from 'react-redux';
import { setUsers, setUsersTotalCount, toggleIsFetching, getUsersTC, unfollowTC, followTC, changePageTC } from '../../../redux/users-reducer';
import UsersList from './UsersList/UsersList';
import Preloader from '../../Preloader/Preloader';

class UsersListAPI extends React.Component {

    componentDidMount() {
        this.props.getUsersTC(this.props.currentPage, this.props.usersPerPage)
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <UsersList
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        currentPage={this.props.currentPage}
                        unfollowTC={this.props.unfollowTC}
                        followTC={this.props.followTC}
                        changePageTC={this.props.changePageTC}
                        isInProgress={this.props.isInProgress}
                        usersPerPage={this.props.usersPerPage}
                    />
                }
            </>
        )
    }
}


let mapStateToProps = state => {
    return {
        users: state.users.usersData,
        totalUsersCount: state.users.totalUsersCount,
        usersPerPage: state.users.usersPerPage,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        isInProgress: state.users.isInProgress
    };
}

let dispatchObject = {
    setUsers,
    toggleIsFetching,
    getUsersTC,
    changePageTC,
    unfollowTC,
    followTC
}


export default connect(mapStateToProps, dispatchObject)(UsersListAPI);

