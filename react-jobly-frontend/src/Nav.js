import {NavLink} from "react-router-dom"


/** Nav: Links to Home, Jobs, Companies
 *
 * no error handling, but there will be a redirect (bogus /jkjkkjk will take you back to /home)
 * present across pages/endpoints
 * 
 * Props: none
 * State: none
 */

function Nav (){


    return (
        <nav className="Nav">
            <NavLink exact to="/">
                Jobly
            </NavLink>
            <NavLink exact to="/companies">
                Companies
            </NavLink>
            <NavLink exact to="/jobs">
                Jobly
            </NavLink>
        </nav>
    )
}

export default Nav;