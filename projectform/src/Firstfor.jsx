import { FormLabel } from "react-bootstrap";
import { Formik,Form,Field, ErrorMessage } from 'formik';
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import style from './custom.module.css'
import *  as Yup from 'yup'


//initial values of fields

const initialValues ={
  customer : '',
  company : '',
  task:'',
  vendor:'',
  lead:'',
  phone:'',
  subsidiary:'',
  prospect:'',
  project:'',
  department:'',
  partner :'',
  template:'',
  location:'',
  tcase:'',
  projecttask:'',
  tclass:'',
  issue:'',
  resource:'',
  othername:'',
  tevent:'',
  genericresource:'',
}
// onsubmit function
const onSubmit = values =>{
  console.log("Form values", values);
  }
  

const validationSchema =Yup.object({
  customer:Yup.string().required('Required'),
  company: Yup.string().required("required"),
  task: Yup.string().required("required"),
  vendor:Yup.string().required("required"),
  lead:Yup.string().required("required"),
  phone:Yup.string().required("required"),
  subsidiary:Yup.string().required("required"),
  prospect:Yup.string().required("required"),
  project:Yup.string().required("required"),
  department:Yup.string().required("required"),
  partner :Yup.string().required("required"),
  template:Yup.string().required("required"),
  location:Yup.string().required("required"),
  tcase:Yup.string().required("required"),
  projecttask:Yup.string().required("required"),
  tclass:Yup.string().required("required"),
  issue:Yup.string().required("required"),
  resource:Yup.string().required("required"),
  othername:Yup.string().required("required"),
  tevent:Yup.string().required("required"),
  genericresource:Yup.string().required("required"),
})

function Firstfor() {
  console.log("visited fields",Formik.touched)
  return (
    <>
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <h2 className="text-center">Rename Records</h2>
        <div className="row">
          <div className="col">
            <Button variant="primary" type="submit" className={style.btn}>
              Save
            </Button>
            <Button variant="secondary" className={style.btn}>
              Cancel
            </Button>
          </div>
        </div>
        {/* first row */}
        <Row className="mb-2 mt-3 justify-content-between">
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Customer</FormLabel>
            <span className={style.star}>*</span>
            <Field
              size="sm"
              type="text"
              id="customer"
              name="customer"
            >{(props)=>{
              const {field,form,meta}=(props);
              console.log("render props",props);
              return(
              
                <div><input id='customer' {...field} className="form-control "  placeholder="Customer"/>
              {meta.touched && meta.error ? <div className="errors">{meta.error}</div>:null}</div>
              )   
            }}</Field>
                        <ErrorMessage name="customer" component="div" className="errors" />

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Company</FormLabel>
            <span className={style.star}>*</span>
            <Field
              size="sm"
              type="text"
              placeholder="Company"
              id="company"
              name="company"
              className="form-control"
            />
            <ErrorMessage name="company" >
              {
              (errMsg)=>(
                  <div className='errors'>{errMsg}</div>
              )
              }
            </ErrorMessage>
          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Task</FormLabel>
            <span className={style.star}>*</span>
            <Field
              size="sm"
              type="text"
              placeholder="Task"
              id="task"
              name="task"
              className="form-control"
            />
            <ErrorMessage name="task" component="div" className="errors" />
          </Col>
        </Row>
        {/* Additional rows can be added similarly */}
      </Form>
    </Formik>
    </>
  );
}



export default Firstfor;
