import React  from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import { Button } from "react-bootstrap";

function Home(props){
    console.log("props", props)
    return(
        <>
        {/* <div className="image-wrapper-item">
                <img src="https://cdn-icons-png.flaticon.com/512/3523/3523865.png" className="cart-img"></img>
            </div>
            <h2 className="text-center">Home </h2>
        <div className="cart-wrapper display-flex ">
            <div className="image-wrapper-item">
                <img src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" className="mobile-img img-fluid w-50 h-50"></img>
            </div>
            <div className="text-wrapper-item">
                <span>I-Phone</span>            
            </div>
            <div className="text-wrapper-item">
                <span>Price: $ 10000</span>            
            </div>
            <div className="button-wrapper-item">
                <button variant="primary" className="btn-cart btn btn-danger">Add To Cart</button>
                            
            </div>
        </div> */}



<div className="image-wrapper-item">
    <span className="cart-count">{props.data.length}</span>
                <img src="https://cdn-icons-png.flaticon.com/512/3523/3523865.png" className="cart-img"></img>
            </div>
    <Card style={{ width: '18rem'  }}>
      <Card.Img variant="top" src="https://www.ineedamobile.com/wp-content/uploads/2019/03/iphone-x-600x598.png" />
      <Card.Body>
        <Card.Text>
        <span>I-Phone</span>
            

        </Card.Text>
        <Card.Text>
        <span>Price: $ 10000</span>            

        </Card.Text>
        <Button variant="success" className="me-2" onClick={()=>props.addToCartHandler({name:'I Phone',price: 100000 })}>Add To Cart</Button>
        <Button variant="danger" onClick={()=>props.removeToCartHandler()}>Remove To Cart</Button>

      </Card.Body>
    </Card>


        </>
    )
}
export default Home;