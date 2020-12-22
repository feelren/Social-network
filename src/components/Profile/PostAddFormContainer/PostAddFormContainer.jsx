import { connect } from "react-redux";
import { addPostActionCreator, changePostTextActionCreator } from "../../../redux/profile-reducer";
import PostAddForm from "./PostAddForm/PostAddForm";


let mapStateToProps = (state) => {
    let newText = state.profile.newText;

    return {
        state: newText
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost() {
            dispatch(addPostActionCreator())
        },

        changeText(text) {
            dispatch(changePostTextActionCreator(text))
        }
    };
}

const PostAddFormContainer = connect(mapStateToProps, mapDispatchToProps)(PostAddForm);

export default PostAddFormContainer;
