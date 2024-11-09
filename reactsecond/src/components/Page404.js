import { Link } from "react-router-dom";

function Page404(){
    return(
        <div>
            <h1>Page Not Found </h1>
            <h2>404</h2>
            <Link to="/home">Back to Home page</Link>
        </div>
    )
}
export default Page404;