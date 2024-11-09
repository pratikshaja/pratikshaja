import React from "react";
export default class Studentclass extends React.Component{
    render (){
        // console.log(this.props)
        return(
            <div>
                <h4 className="heading">props in class component</h4>
                {/* <h2>Student Name :{this.props.name}</h2> */}
            </div>
        );
    }

}
