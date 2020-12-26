
import { connect } from "react-redux";
import { addMessageActionCreator, changeMessageTextActionCreator } from "../../../redux/dialogs-reducer";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


let mapStateToProps = state => {
    let newText = state.dialogs.newText;

    return {
        state: newText
    }
}

let mapDispatchToProps = dispatch => {
    return {
        addMessage() {
            dispatch(addMessageActionCreator())
        },
        changeMessageText(text) {
            dispatch(changeMessageTextActionCreator(text))
        }
    }
}

const AddMessageFormContainer = connect(mapStateToProps, mapDispatchToProps)(AddMessageForm);

export default AddMessageFormContainer;


