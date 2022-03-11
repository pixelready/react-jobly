import { useContext } from "react";
import { Redirect, Switch, Route } from "react-router-dom"; 

import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import UserContext from "./userContext";
import Profile from "./Profile";


/** Routes Component
 * 
 * parses URL params to match endpoints and output page components
 * 
 * Props: none
 * State: none
 * 
 * App -> Routes
 */

function Routes ({login, register}) {
    console.log("Routes");
    const {user} =  useContext(UserContext);
    console.log("useContext user: ", user);

    return (
        <div className="routes">
            { user.isLoggedIn === false &&
                <Switch>
                     <Route exact path="/">
                         <Home />
                     </Route>
                     <Route exact path="/login">
                         <Login login={login} />
                     </Route>
                     <Route exact path="/register">
                         <Register register={register} />
                     </Route>
                     <Redirect to="/login" />
                 </Switch>
            }

            { user.isLoggedIn === true &&
                <Switch>
                    <Route exact path="/jobs">
                        <JobList />
                    </Route>
                    <Route exact path="/companies">
                        <CompanyList />
                    </Route>
                    <Route exact path="/companies/:handle">
                        <CompanyDetail />
                    </Route>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route>
                        <Profile />
                    </Route>
                    <Redirect to="/" />
                </Switch>
            }
        </div>
    );
}


export default Routes;