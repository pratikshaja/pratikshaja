import React,{useState} from "react";

function Login(){
    const [userid , setUserid] = useState("");
    const [userpass, setUserPass]=useState("");
    let [useErr, setUserErr]=useState(false);
    let [passErr, setPassErr]=useState(false);

    function loginHandle(e){
        e.preventDefault();
        if(userid.length < 3 || userpass.length<8){
            alert("Invalid Username and Password")
        }
        else{
            alert("You can login now !!")
        }
    }
    function userHandler(e){
        let usernm = e.target.value;
        if(usernm.length<3){
            setUserErr(true)
        }
        else{
            setUserErr(false)
        }
        setUserid(usernm);
    }
    function passHandler(e){
        let passwrd = e.target.value;
        if(passwrd.length <8){
            setPassErr(true)
        }
        else{
            setPassErr(false)
        }
        setUserPass(passwrd);
    }
    return(
        <div>
            <h4>Login Form</h4>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="Enter Id" onChange={userHandler} />  {useErr ?<span>Invalid Username</span>:""}  <br></br><br></br>
                <input type="text" placeholder="Enter Your Password" onChange={passHandler}/> {passErr?<span>password must be 8 character</span>:""} <br></br><br></br>
                <button type="submit">Submit</button> <br></br>
            </form>
            <hr />
        </div>
    )
}

export default Login;