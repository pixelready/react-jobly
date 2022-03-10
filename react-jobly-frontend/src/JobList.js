

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
    
    console.log("JobList");

    return (
        <p>I'm lookin at jobs dude</p>
    )
}


export default JobList;