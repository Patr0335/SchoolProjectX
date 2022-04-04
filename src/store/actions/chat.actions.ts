import { Chatroom } from "../../../entities/Chatroom";



export const ADD_CHATROOM = 'ADD_CHATROOM';

export const addChatroom = (chatroom: Chatroom) => {
    return { type: 'ADD_CHATROOM', payload: chatroom }
}