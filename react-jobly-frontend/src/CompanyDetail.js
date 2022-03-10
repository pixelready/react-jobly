import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";

/**
 * 
 * 
 */
function CompanyDetail(){
    const [company, setCompany] = useState(null);
    const params = useParams();

    console.log("CompanyDetail","state:", company, "params:", params);

    useEffect(
        function getCompanyDetailOnLoad(){
            async function getCompanyDetail(){
                const jobsResponse = await JoblyApi.getCompany(params.handle);
                setCompany(jobs => jobsResponse);
            }
            getCompanyDetail();
        },
        [params.handle]
    );

    if (company === null){
        return <h1>Loading...</h1>
    };

    return (
        <div>
            <p>Welcome to 😈 {company.name}</p>
            <p>{company.description}</p>
            <jobCardList jobs={company.jobs} />
        </div>
    );
}


export default CompanyDetail;