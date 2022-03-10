function CompanyCard({company}){
    console.log("CompanyList", "company: ", company);
    return (
        <div>
            <ul>
                <li>Name: {company.name}</li>
                <li>Description: {company.decription}</li>
                <li><img src={company.logoUrl} alt={`${company.name}'s logo`} /></li>
            </ul>
        </div>
    )
}

export default CompanyCard;