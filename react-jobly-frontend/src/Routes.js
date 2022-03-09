
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom"; 




function Routes () {
    console.log("Routes");
    return (
        <div className="routes">
                <Switch>
                    <Route exact path="/jobs">
                        <p>I'm lookin at jobs dude</p>
                    </Route>
                    <Route exact path="/companies">
                        <p>Misery loves companies</p>
                    </Route>
                    <Route exact path="/">
                        <p>Home sweet 127.0.0.1</p>
                    </Route>
                    <Redirect to="/" />
                </Switch>
        </div>
    )
}

export default Routes;