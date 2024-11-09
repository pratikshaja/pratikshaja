import React,{useMemo, useState} from 'react'

function HookEx(){
    const [count, setCount]=useState(0);
    const [item ,setItem]=useState(10);
    const multicountMemo = useMemo(function multiCount(){
        console.log("multicount");
        return count * 4 ;
        
    })
    return(
      <div>
        <h2>useMemo Hook in reactjs</h2>
        <h3>{count}</h3>
        <h3>{item}</h3>
        <h3>{multicountMemo}</h3>

        <button onClick={()=>setCount(count + 1)}>Update count</button>
        <button onClick={()=>setItem(item*10)}>Update Item</button>
      </div>
    );
}
export default HookEx;