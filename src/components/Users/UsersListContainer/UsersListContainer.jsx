
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setUsersTotalCountAC, changeCurrentPageAC, } from '../../../redux/users-reducer';
import UsersList from './UsersList/UsersList';

let mapStateToProps = state => {
    return {
        users: state.users.usersData,
        totalUsersCount: state.users.totalUsersCount,
        usersPerPage: state.users.usersPerPage,
        currentPage: state.users.currentPage,

    };
}

let mapDispatchToProps = dispatch => {
    return {
        setUsers(users) {
            dispatch(setUsersAC(users))
        },

        follow(id) {
            dispatch(followAC(id))
        },

        unfollow(id) {
            dispatch(unfollowAC(id))
        },

        setUsersTotalCount(count) {
            dispatch(setUsersTotalCountAC(count))
        },

        changeCurrentPage(pageMoveTo) {
            dispatch(changeCurrentPageAC(pageMoveTo))
        }
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersContainer;