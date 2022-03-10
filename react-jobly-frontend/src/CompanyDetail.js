import { useParams } from "react-router-dom";

/**
 * 
 * @returns 
 */
function CompanyDetail(){

    console.log("CompanyDetail");

    const params = useParams();

    return (
        <p>Welcome to {params.handle} IncorPEARated, creators of Pear Programming</p>
    );
}


export default CompanyDetail;

//TODO: add docstring