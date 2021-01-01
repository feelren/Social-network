import ChatsList from "./ChatsList/ChatsList";
import { connect } from "react-redux";



let mapStateToProps = state => {
    return {
        chats: state.dialogs.chatsData,
    }
}

const ChatsContainer = connect(mapStateToProps, null)(ChatsList)


export default ChatsContainer;
