import { connect } from "react-redux";
import Interlocutors from "./Interlocutors/Interlocutors";
import { setUsers } from "../../../redux/users-reducer";



let mapStateToProps = (state) => {
    return {
        usersData: state.users.usersData,
        // usersElements: state.dialogs.namesData.map((item) => <User id={item.id} name={item.name} src={item.src} />)
    };
};

const InterlocutorsContainer = connect(mapStateToProps, { setUsers })(Interlocutors);




export default InterlocutorsContainer;
