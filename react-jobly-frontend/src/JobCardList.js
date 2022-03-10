import JobCard from "./JobCard";

function JobCardList({jobs}){
    return (
        <div>
            <ul>
                {jobs.map(job => <JobCard key={job.id} job={job} />)}
            </ul>
        </div>
    )
}

export default JobCardList;