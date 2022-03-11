
import { Redirect, Switch, Route } from "react-router-dom"; 

import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";

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

    return (
        <div className="routes">
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
                <Route exact path="/login">
                    {/* TODO: after successful login, redirect to /companies */}
                    <Login login={login} />
                </Route>
                <Route exact path="/register">
                    <Register register={register} />
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    );
}


export default Routes;