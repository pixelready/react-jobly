import {useState, useEffect} from "react";
import JoblyApi from "./api.js";
import CompanyCardList from "./CompanyCardList";
import SearchBar from "./SearchBar.js";

/** CompanyList Component
 * 
 * Requests list of all companies on load, 
 * handles search callback to update list
 * 
 * Props: none
 * State: [companies, setCompanies] 
 * 
 *   
 * Routes -> CompanyList -> {SearchBar, CompanyCardList}
 */

function CompanyList(){
    
    const [companies, setCompanies] = useState(null);

    console.log("CompanyList", "State:", companies);

    useEffect(
        function getAllCompaniesOnLoad(){
            async function getAllCompanies(){
                const companiesResponse = await JoblyApi.getCompanies();
                setCompanies(companies => companiesResponse);
            }
            getAllCompanies();
        },
        []
    );

    if (companies === null){
        return <h1>Loading...</h1>
    };

    async function handleSearch({query}){
        const companiesResponse = await JoblyApi.getCompanies(query);
        setCompanies(companies => companiesResponse);
    }

    return (
        <div>
            {companies.length > 0 &&
            <div>
                <SearchBar handleSearch={handleSearch }/>
                <CompanyCardList companies={companies} />
            </div>
            }
            {} //TODO: add empty list state
        </div>
        
    );
}


export default CompanyList;