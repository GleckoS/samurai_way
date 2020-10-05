import {AddMessage} from "../../../redux/MessagesReducer";
import Messages from "./Messages";
import {connect} from "react-redux";

let stateConnect = (state) => {

    return {
        MessagesData: state.Messages.MessagesData,
    }
}

let MessagesContainer = connect(stateConnect, {AddMessage})(Messages)

export default MessagesContainer