import UserContext from "./userContext";
import {useContext} from "react";

/** Home Component: renders Jobly homepage
 * 
 * Props: none
 * State: none
 * 
 * Routes -> Home
 */


function Home() {
    const {user} =  useContext(UserContext);
    console.log(user);
    return (
        <p>Sup {user.firstName} I am the home page. How you like me now?</p>
    )
}

export default Home;