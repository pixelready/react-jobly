import {useState, useContext} from "react";
import UserContext from "./userContext";

function Register({register}) {
    
    const {user} =  useContext(UserContext);
    const initialState = {
        username:user.user.username,
        firstName: user.user.firstName,
        lastName: user.user.lastName,
        email: user.user.email
    };

    const [formData, setFormData] = useState(initialState);

    function handleChange (evt){
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={() => register(formData)}>
            <label htmlFor="username">Username</label>
            <input disabled type="text" name="username" id="username" onChange={handleChange} value={user.user.username} />
            <label htmlFor="firstName">First Name</label>
            <input type="firstName" name="firstName" id="firstName" onChange={handleChange} value={formData.firstName} />
            <label htmlFor="lastName">Last Name</label>
            <input type="lastName" name="lastName" id="lastName" onChange={handleChange} value={formData.lastName} />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" onChange={handleChange} value={formData.email} />
            <button type="submit">Register</button>
        </form>
    )
}

export default Register;