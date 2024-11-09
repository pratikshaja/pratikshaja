import React,{forwardRef} from 'react'
function ForwardRefDemo(props,ref){
    return(
        <div>
            <h2>Forward Ref</h2>
            <input type="text" ref={ref} />
            <hr />
        </div>
    )
}
export default forwardRef(ForwardRefDemo);