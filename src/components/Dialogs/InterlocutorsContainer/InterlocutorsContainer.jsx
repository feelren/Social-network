import { connect } from "react-redux";
import Interlocutors from "./Interlocutors/Interlocutors";
import { setUsersAC } from "../../../redux/users-reducer";



let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        // usersElements: state.dialogs.namesData.map((item) => <User id={item.id} name={item.name} src={item.src} />)
    };
};

let mapDispatchToProps = dispatch => {
    return {
        setUsers(users) {
            dispatch(setUsersAC(users))
        },
    }
}

const InterlocutorsContainer = connect(mapStateToProps, mapDispatchToProps)(Interlocutors);




export default InterlocutorsContainer;
