import { FormLabel } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import style from './custom.module.css'
import { useFormik } from 'formik';
import *  as Yup from 'yup'


//initial values of fileds

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
  //validation function
//   const validate=values=>{
//     let errors={}
//     const requiredfields=[
//       'customer',
//         'company',
//         'task',
//         'vendor',
//         'lead',
//         'phone',
//         'subsidiary',
//         'prospect',
//         'project',
//         'department',
//         'partner',
//         'template',
//         'location',
//         'tcase',
//         'projecttask',
//         'tclass',
//         'issue',
//         'resource',
//         'othername',
//         'tevent',
//         'genericresource',
//     ];
    
// requiredfields.forEach ((fields)=>{
// if(!values[fields])  {
//   errors [fields] ="Required"
// }
// })
//     return errors;
//   }

const validationSchema =Yup.object({
  customer:Yup.string().required('Required'),
  company: Yup.string().required("Required"),
  task: Yup.string().required("Required"),
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
  genericresource:Yup.string().required("required")
})

function Firstform(){
  const formik = useFormik({
   initialValues,
   onSubmit,
   validationSchema
 
  })
 // console.log("form errors",formik.errors)
 console.log("visited fields",formik.touched)
 
  
  return (
    <>
    <div className="container-fluid">
      
    <h2 className="text-center">Rename Records</h2>
    <Form  onSubmit={formik.handleSubmit}>
    <div className="row">
      <div className="col ">
      <Button variant="primary" type="submit" className={style.btn}>Save</Button>
      <Button variant="secondary" className={style.btn}>Cancel</Button>
      </div>
    </div>
        {/* first row */}
        <Row className='mb-2 mt-3 justify-content-between'>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Customer</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" type="text" placeholder="Customer"  id='customer' name='customer' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.customer}/>
            {formik.touched.customer && formik.errors.customer ? <div className='errors'>{formik.errors.customer}</div>:null }
          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Company</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" type="text" placeholder="Company" id='company' name='company' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.company} />
            {formik.touched.company &&  formik.errors.company ? <div className='errors'>{formik.errors.company}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Task</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" type="text" placeholder="Task" id='task' name='task' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.task}/>
            {formik.touched.task && formik.errors.task ? <div className='errors'>{formik.errors.task}</div>:null }

          </Col>
        </Row>
        {/* second row */}
        <Row className='mb-2 justify-content-between'>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Vendor</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Vendor" id="vendor" name="vendor" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.vendor}/>
            {formik.touched.vendor && formik.errors.vendor ? <div className='errors'>{formik.errors.vendor}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Lead</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder=" Lead" id="lead" name="lead" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lead} />
            {formik.touched.lead && formik.errors.lead ? <div className='errors'>{formik.errors.lead}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Phone call</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Phone call" id="phone" name="phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
            {formik.touched.phone && formik.errors.phone ? <div className='errors'>{formik.errors.phone}</div>:null }

          </Col>
        </Row>
        {/* third row */}
        <Row className='mb-2 justify-content-between'>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Subsidiary</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Subsidiary" id="subsidiary" name="subsidiary" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.subsidiary}/>
            {formik.touched.subsidiary && formik.errors.subsidiary ? <div className='errors'>{formik.errors.subsidiary}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Prospect</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder=" Prospect" id="prospect" name="prospect" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.prospect}/>
            {formik.touched.prospect && formik.errors.prospect ? <div className='errors'>{formik.errors.prospect}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Project</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Project" id="project" name="project" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.project} />
            {formik.touched.project && formik.errors.project ? <div className='errors'>{formik.errors.project}</div>:null }

          </Col>
        </Row>
        {/* fourth row */}
        <Row className='mb-2 justify-content-between'>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Department</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Department" id="department" name="department" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.department} />
            {formik.touched.department && formik.errors.department ? <div className='errors'>{formik.errors.department}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Partner</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder=" Partner" id="partner" name="partner"  onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.partner}/>
            {formik.touched.partner && formik.errors.partner ? <div className='errors'>{formik.errors.partner}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Project Template</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Project Template" id="template" name="template" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.template}/>
            {formik.touched.template && formik.errors.template ? <div className='errors'>{formik.errors.template}</div>:null }

          </Col>
        </Row>
        {/* fifth row */}
        <Row className='mb-2 justify-content-between'>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Location</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Location" id="location" name="location" onChange={formik.handleChange} onBlur={formik.handleBlur}  value={formik.values.location}/>
            {formik.touched.location && formik.errors.location ? <div className='errors'>{formik.errors.location}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Case</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder=" Case" id="tcase" name="tcase" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tcase} />
            {formik.touched.tcase && formik.errors.tcase ? <div className='errors'>{formik.errors.tcase}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Project Task</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="project task" id="projecttask" name="projecttask" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.projecttask} />
            {formik.touched.projecttask && formik.errors.projecttask ? <div className='errors'>{formik.errors.projecttask}</div>:null }

          </Col>
        </Row>
          {/* sixth row */}

        <Row className='mb-2 justify-content-between'>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Class</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Class" id="tclass" name="tclass" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tclass}/>
            {formik.touched.tclass && formik.errors.tclass ? <div className='errors'>{formik.errors.tclass}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Issue</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder=" Issue" id="issue" name="issue" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.issue}/>
            {formik.touched.issue && formik.errors.issue ? <div className='errors'>{formik.errors.issue}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Resource Allocation</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Resource Allocation" id="resource" name="resource" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.resource}/>
            {formik.touched.resource && formik.errors.resource ? <div className='errors'>{formik.errors.resource}</div>:null }

          </Col>
        </Row>
        {/* seventh row */}

        <Row className='mb-2 justify-content-between'>
          <Col md={3}>
            <FormLabel className="text-uppercase ">Name For Other Name</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="other name" id="othername" name="othername" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.othername}/>
            {formik.touched.othername && formik.errors.othername ? <div className='errors'>{formik.errors.othername}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel className="text-uppercase">Name For Event</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder=" Event" id="tevent" name="tevent" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.tevent}/>
            {formik.touched.tevent && formik.errors.tevent ? <div className='errors'>{formik.errors.tevent}</div>:null }

          </Col>
          <Col md={3}>
            <FormLabel  className="text-uppercase form-label">Name For Generic Resource</FormLabel>
            <span className={style.star}>*</span>
            <Form.Control size="sm" placeholder="Generic Resource" id="genericresource" name="genericresource" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.genresource} />
            {formik.touched.genericresource && formik.errors.genericresource ? <div className='errors'>{formik.errors.genericresource}</div>:null }

          </Col>
        </Row>
      </Form>
    </div>
     
    </>
  );
}

export default Firstform;
