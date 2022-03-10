import {useState, useEffect} from "react";
import JoblyApi from "./api.js";
import JobCardList from "./JobCardList";
import SearchBar from "./SearchBar";

/** JobList Component
 * 
 * Requests list of all jobs on load, 
 * handles search callback to update list
 * 
 * Props: handleSearch, fn passed to SearchBar, 
    takes search params and makes axios req to API, 
    parses JSON and passes list(arr) of matching jobs(objs) to the JobList 
 * State: [jobs, setJobs] 
    # will have key that is the job id as it exists in db, from axios req
 */

function JobList(){

    const [jobs, setJobs] = useState(null);
    
    console.log("JobList");

    useEffect(
        function getAllJobsOnLoad(){
            async function getAllJobs(){
                const jobsResponse = await JoblyApi.getJobs();
                setJobs(jobs => jobsResponse);
            }
            getAllJobs();
        },
        []
    );

    if (jobs === null){
        return <h1>Loading...</h1>
    };

    return (
        <div className="JobList">
            {jobs !== null && 
                <div>
                    <SearchBar handleSearch={}/>
                    <JobCardList jobs={jobs} />
                </div>
            }
        </div>
    )
}


export default JobList;