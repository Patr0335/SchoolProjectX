import { firebaseSignupSuccess } from "../../../entities/firebaseSignupSuccess";
import { User } from "../../../entities/User";

export const SIGNUP = "SIGNUP"

export const signup = (email : string, password : string) => {
    const APIKEY = "AIzaSyA6XSf9jSzsuraq2v8_vmlhZaz2cGp3GJA"
    const url = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + APIKEY

   return async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
       const response = await fetch(url, {

           method: 'POST',
           headers: {
               'Content-Type': 'application/json'
           },
           body: JSON.stringify({ //javascript to json
               //key value pairs of data you want to send to server
               // ...
               email, //email: email
               password,
               returnSecureToken: true //returns ID and refresh token. ALWAYS USE TRUE
           })
       });
 
       if (!response.ok) {
           //There was a problem.. error handling time, BUT I WONT LOL
           console.log("response problem");

       } else {
           const data: firebaseSignupSuccess = await response.json(); // json to javascript
           console.log("Data from the server ", data);

           dispatch({type: SIGNUP, payload: {email: data.email, idToken: data.idToken}})
       }
   };
};