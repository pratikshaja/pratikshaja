function User(props){
    const name ="pratiksha"
    return(
        <div>
            <h1>Lifting the state</h1>
            {/* <h3>Hello !!{props.data}</h3> */}
            <button onClick={()=>props.alert(name)}>Click</button>
        </div>
    )
}
export default User;