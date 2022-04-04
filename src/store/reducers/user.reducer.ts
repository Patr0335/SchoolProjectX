import { User } from "../../../entities/User";
import { SIGNUP } from "../actions/user.actions";

interface ReduxState {
    loggedInUser: User,
    idToken: string | undefined
}

const initialState: ReduxState = {
    loggedInUser: {} as User,
    idToken: undefined
}

const userReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case SIGNUP:
            // const user = new User(action.payload.email, '', '');
            // return {...state, loggedInUser: user}
            console.log("Successfully signed up, bitch");

        //const user = {email: 'fakjsdflh', photoUrl: 'afdds' } as User

        default:
            return state;
    }
};

export default userReducer;