
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC } from '../../../redux/users-reducer';
import UsersList from './UsersList/UsersList';

let mapStateToProps = state => {
    return {
        users: state.users.usersData,
    };
}

let mapDispatchToProps = dispatch => {
    return {
        follow(id) {
            dispatch(followAC(id))
        },
        unfollow(id) {
            dispatch(unfollowAC(id))
        },
        setUsers(users) {
            dispatch(setUsersAC(users))
        },
    };
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersContainer;