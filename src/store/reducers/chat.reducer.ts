import { Chatroom } from "../../../entities/Chatroom";
import { ADD_CHATROOM, FETCH_CHATROOMS } from "../actions/chat.actions";

interface ReduxState {
    chatrooms: Chatroom[]
    counter: number
    name: string
}

const initialState: ReduxState = {
    chatrooms: [],
    counter: 0,
    name: "Patrick"
}

interface ReduxAction {
    type: string,
    payload?: boolean | number | string | Chatroom
}

const chatReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch (action.type) {
        
        case ADD_CHATROOM:
            console.log(action.payload);
            const chatroom = action.payload as Chatroom
            //state.chatrooms.push(chatroom) // mutating state. Not allowed
            return { ...state, chatrooms: [...state.chatrooms, chatroom] }

            case FETCH_CHATROOMS:
            // create a new state object with the action.payload assigned to the chatrooms array.
            return { ...state, chatrooms: action.payload }

        default:
            return state;
    }
};

export default chatReducer;