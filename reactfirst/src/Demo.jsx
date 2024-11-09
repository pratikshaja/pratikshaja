import React ,{ useState } from "react";

function Demo(){
    const [data, setData] = useState(null)
    const [print,setPrint] = useState(false)
    function getdata(val){
        console.log(val.target.value)
        setData(val.target.value)
        setPrint(false)
    }
    return(
        <div>
            <h1 className="heading">Get Input from box !</h1>
            {
                print ?
                <h3>{data}</h3> :
                null
            }
            <input type="text" onChange={getdata}></input>
            <button onClick={() => setPrint(true)}>Print</button>
            <hr />
        </div>
    );
}

export default Demo ;