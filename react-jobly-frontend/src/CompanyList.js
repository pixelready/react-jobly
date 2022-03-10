import CompanyCard from "./CompanyCard";
import {useState, useEffect} from "react";
import JoblyApi from "./api.js";

/** CompanyList Component
 * 
 * Requests list of all companies on load, 
 * handles search callback to update list
 * 
 * Props: none
 * State: [companies, setCompanies] 
    # will have key that is the company id as it exists in db, from axios req
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

    if (!companies){
        return <h1>Loading...</h1>
    };

    return (
        <div>
            {companies !== null && 
            <div>
                {companies.map(c => <CompanyCard key={c.handle} company={c} />)}
            </div>
            }
        </div>
        
    );
}


export default CompanyList;