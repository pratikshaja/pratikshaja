import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

export default function Inputbox({ schema = [], onSubmit }) {
    const [formData, setFormData] = useState({});
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked  } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Submit function
    const handleSubmit = (e) => {
        e.preventDefault();
        if (handleValidation()) {
            onSubmit(formData);
        }
    };

    // Validation function
    const handleValidation = () => {
        let errors = {};
        let formIsValid = true;

        schema.forEach((section) => {
            if (section.fields) {
                section.fields.forEach((field) => {
                    if (field.required && !formData[field.name]) {
                        formIsValid = false;
                        errors[field.name] = 'This field is required';
                    }
                });
            }
        });

        setFormErrors(errors);
        return formIsValid;
    };
    const renderField = (field) => {
        return (
            <Form.Control
                type={field.type || 'text'}
                name={field.name}
                placeholder={field.placeholder}
                onChange={handleChange}
                value={formData[field.name] || ''}
            />
        );
    };

    return (
        <div className="container">
            <Form onSubmit={handleSubmit}>
                {Array.isArray(schema) && schema.length > 0 ? (
                    schema.map((section, sectionIndex) => (
                        <div key={sectionIndex}>
                            <h3>{section.Title}</h3>
                            <Row>
                                <Col className='mb-4'>
                                    <Button variant="primary" type="submit" className='me-3'>
                                        Save
                                    </Button>
                                    <Button variant="secondary" type="reset" >
                                        Cancel
                                    </Button>
                                </Col>
                            </Row>
                            <Row>
                                {section.fields &&
                                    section.fields.map((field, fieldIndex) => (
                                        <Col md={4} sm={12} key={fieldIndex}>
                                            <Form.Group className="mb-3">
                                                <Form.Label>{field.label}</Form.Label>
                                                {renderField(field)}
                                                {formErrors[field.name] && (
                                                    <div className="text-danger">
                                                        {formErrors[field.name]}
                                                    </div>
                                                )}
                                            </Form.Group>
                                        </Col>
                                    ))}
                            </Row>
                        </div>
                    ))
                ) : (
                    <p>No form data is available.</p>
                )}
            </Form>
        </div>
    );
}
