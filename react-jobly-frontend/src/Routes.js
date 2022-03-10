
import { Redirect, Switch, Route } from "react-router-dom"; 

import CompanyDetail from "./CompanyDetail";
import CompanyList from "./CompanyList";
import JobList from "./JobList";

/** Routes Component
 * 
 * parses URL params to match endpoints and output page components
 * 
 * Props: none
 * State: none
 */

function Routes () {
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
                    <p>Home sweet 127.0.0.1</p>
                </Route>
                <Redirect to="/" />
            </Switch>
        </div>
    );
}

//TODO make home component

export default Routes;