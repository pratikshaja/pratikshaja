import React,{useState} from "react";

function Form(){
    const [username, setUserName]= useState("");
    const[useremail, setUserEmail] = useState("");
    const [gender, setGender] =useState("");
    const [terms, setTerms] =useState(false);

    function getFormData(e){
        console.log(username, useremail,gender,terms)
        e.preventDefault();
    }
    return(
        <div>
            <h3>Html Forms ReactJs</h3>
            <form onSubmit={getFormData}>
            Enter Your Name : <input type="text" value={username} onChange={(e)=>setUserName(e.target.value)}/><br></br><br></br>
            Enter Your Email : <input type="text" value={useremail} onChange={(e)=>setUserEmail(e.target.value)}/><br></br><br></br>
            <select name="" id="" onChange={(e) =>setGender(e.target.value)}>
                <option value="">Female</option>
                <option value="">Male</option>
                <option value="">Other</option>

            </select><br></br><br></br>
            <input type="checkbox"  onChange={(e)=>setTerms(e.target.checked)}/><span>Accepts Term And Conditions</span><br></br>
            <button>Submit</button>
            </form>
            <hr />
        </div>
    )
}

export default Form;