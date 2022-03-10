import {useState} from "react";


/** SearchBar:
 * 
 * a simple form, grabs the query someone passed in 
 * and calls handleSearch to make axios req 
 * for matching jobs to display, 
 * updates jobs state in Jobs
 * 
 */


function SearchBar(handleSearch){
    console.log("SearchBar reporting for duty!");

    const initialFormData = {};
    //REVIEW: initial form data choice

    const [formData, setFormData] = useState(initialFormData);

    function handleChange(evt){
        const { name, value } = evt.target;
        setFormData(fData =>({
            ...fData, 
           [name]: value, 
        }));
    }

    function handleSubmit(evt){
        evt.preventDefault();
        handleSearch(formData);
        setFormData(initialFormData);
    }

    
    return (
        <form className="SearchBar">
            <input type="text" placeholder="Enter search term" onChange={handleChange}></input>
            <button onClick={handleSubmit}>Submit</button>
        </form>
    );
}


export default SearchBar;