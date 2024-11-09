import{useParams,Link} from 'react-router-dom'
function Country(){
    const params = useParams();
    const {name} = params
    // console.log(name)

    return(
        <div>

            <h1>This is {name} Country</h1>
            <li><Link to="/country/India">India</Link></li>
            <li><Link to="/country/USA">USA</Link></li>
            <li><Link to="/country/Paris">Paris</Link></li>

        </div>
    )
}
export default Country;
