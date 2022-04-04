import { User } from "../../../entities/User";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";

export const LOGINUSER = "LOGINUSER";

export const loginUser = (email: string, password: string) => {
  const auth = getAuth();
  return async (
    dispatch: (arg0: { type: string; payload: string }) => void
  ) => {
    const x = await signInWithEmailAndPassword(auth, email, password);
    console.log(x);
    dispatch({ type: LOGINUSER, payload: x.user.email ?? "No Email" });
  };
  //     const APIKEY = "AIzaSyA6XSf9jSzsuraq2v8_vmlhZaz2cGp3GJA"
  //     const url = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + APIKEY

  //    return async (dispatch: (arg0: { type: string; payload: string; }) => void) => {
  //        const response = await fetch(url, {

  //            method: 'POST',
  //            headers: {
  //                'Content-Type': 'application/json'
  //            },
  //            body: JSON.stringify({ //javascript to json
  //                //key value pairs of data you want to send to server
  //                // ...
  //                email, //email: email
  //                password,
  //                returnSecureToken: true //returns ID and refresh token. ALWAYS USE TRUE
  //            })
  //        });

  //        if (!response.ok) {
  //            //There was a problem.. error handling time, BUT I WONT LOL
  //            console.log("response problem");

  //        } else {
  //            const data = await response.json(); // json to javascript
  //            console.log("Data from the server ", data);

  //            dispatch({type: LOGINUSER, payload: data})
  //        }
  //    };
};
