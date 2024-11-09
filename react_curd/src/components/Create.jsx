import React from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from 'yup';

function Create() {
    const navigate = useNavigate();

    const [value, setValue]= useState({
      
      name :'',
      email:'',
      phone:''
  });

    const schema = yup.object().shape({
      name: yup.string().required("Name is required"),
      email: yup.string().email("Invalid email").required("Email is required"),
      phone: yup.number().typeError("Phone must be a number").required("Phone is required"),
    });

    const handleSubmit = (values) => {
        axios.post('http://localhost:3000/userinfo', values)
        .then(res => {
            console.log(res);
            navigate('/');
        })
        .catch(err => console.log(err));
    };

    return (
      <>
        <div className="d-flex w-100 justify-content-center align-items-center">
          <div className="w-50 border bg-white shadow px-5 pt-3 pb-5 rounded">
            <h1>Add new User</h1>
            <Formik
              initialValues={{ name: '', email: '', phone: '' }}
              validationSchema={schema}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange }) => (
                <Form>
                  <div className="mb-2">
                    <label htmlFor="name">Name:</label>
                    <Field
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      value={values.name}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="name" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="email">Email:</label>
                    <Field
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      value={values.email}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="email" component="div" className="text-danger" />
                  </div>
                  <div className="mb-2">
                    <label htmlFor="phone">Phone</label>
                    <Field
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Phone"
                      value={values.phone}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="phone" component="div" className="text-danger" />
                  </div>
                  <button type="submit" className="btn btn-success me-2">Submit</button>
                  <Link to="/" className="btn btn-primary">Back</Link>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </>
    );
}

export default Create;
