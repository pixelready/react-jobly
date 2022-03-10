function JobCard({job}){
    return (
        <li className="JobCard">
            <h3>{job.title}</h3>
            <p>Sell your soul to: {job.companyName}</p>
            <p>Salary: {job.salary}</p>
            <p>Equity: {job.equity}</p>
        </li>
    )
}

export default JobCard;