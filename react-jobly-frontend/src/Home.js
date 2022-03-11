import UserContext from "./userContext";
import {useContext} from "react";

/** Home Component: renders Jobly homepage
 * 
 * Props: none
 * State: none
 * 
 * Routes -> Home
 */

//REVIEW: is there a cleaner way to call user context so we don't have to do user.
function Home() {
    const {user} =  useContext(UserContext);
    console.log(user);
    return (
        <p>Sup {user.currUser.firstName} I am the home page. How you like me now?</p>
    )
}

//TODO: remember with UserContext the currUser obj is stored in the context obj as the value of the key "user"

export default Home;