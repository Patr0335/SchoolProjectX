import { User } from "../../../entities/User";
import { LOGINUSER } from "../actions/login.actions";

interface ReduxState {
  email: string | undefined
}

const initialState: ReduxState = {
  email: undefined, // ''
};

interface ReduxAction {
  type: string;
  payload?: boolean | number | string | User;
}
const loginReducer = (
  state: ReduxState = initialState,
  action: ReduxAction
) => {
  // const user = {email: 'fakjsdflh', photoUrl: 'afdds' } as User
  switch (action.type) {
    case LOGINUSER:
      const email = action.payload;
      return { ...state, email: email };

    default:
      return state;
  }
};

export default loginReducer;
