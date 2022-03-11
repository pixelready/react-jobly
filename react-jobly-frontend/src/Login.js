import {useState} from "react";

function Login({login}) {
    const [formData, setFormData] = useState({username:"", password:""});

    function handleChange (evt){
        const {name, value} = evt.target;
        setFormData(fData => ({
            ...fData,
            [name]: value
        }));
    }

    return (
        <form onSubmit={login}>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={handleChange} value={formData.username} />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={handleChange} value={formData.password} />
            <button type="submit">Login</button>
        </form>
    )
}

export default Login;