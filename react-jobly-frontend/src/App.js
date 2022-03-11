import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Nav from "./Nav";
import Routes from "./Routes";
import UserContext from "./userContext";
import JoblyApi from "./api";

/** App component
 * Renders <Nav /> and <Routes />
 * 
 * Props: none
 * State: [currUser, setCurrUser]
 * 
 * App -> {Nav, Routes}
 */
function App() {
  console.log("App");

  const initialUserState = {isLoggedIn: false};

  const [currUser, setCurrUser] = useState(initialUserState);

  async function login(formData){
    //take the formData and pass into JoblyApi.loginUser, (returns username)
    const username = await JoblyApi.loginUser(formData);
    //await the response, get username
    const user = await JoblyApi.getUser(username);
    //make second req, calling getUser (using username) to get the user data obj
    setCurrUser(user);
    //update currUser state
  }

  //TODO: define login callback function to pass to login page, also make one
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{user: currUser}}>
            <Nav />
            <Routes />
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
