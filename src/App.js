import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {useFormik} from "formik";
import {signupSchema} from "./yup";
import { Button , Input, Form, Modal} from 'antd';
import {Row, Col, Container} from 'reactstrap';

function App() {
    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
            age: "",
        },
        validationSchema: signupSchema,
        onSubmit:(values,action) => {
            console.log(values);
             action.resetForm()
        }
    })
  return (
    <div className="App">
        <Modal
            title="Register"
            open={true}
            footer={null} >
            <Container>
                <Form onFinish={formik.handleSubmit}>
                    <div className="form-group">
                <Row>
                    <Col>
                        <label htmlFor="username">Username</label>
                        <Input
                            id="username"
                            name="username"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} // Alanın ziyaret edilip edilmediğini Formik'e bildirir
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="error">{formik.errors.username}</div>
                        ) : <div>
                        </div>}
                    </Col>
                    <Col>
                        <label htmlFor="email">E-Mail</label>
                        <Input
                            id="email"
                            name="email"
                            type="text"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur} //
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="error">{formik.errors.email}</div>
                        ) : null}
                    </Col>
                </Row>
                        <Row>
                            <Col>
                                <label htmlFor="password">Password</label>
                                <Input
                                    id="password"
                                    name="password"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} //
                                    value={formik.values.password}
                                />
                                {formik.touched.password && formik.errors.password ? (
                                    <div className="error">{formik.errors.password}</div>
                                ) : null}
                            </Col>
                            <Col>
                                <label htmlFor="confirmPassword">Confirm Password</label>
                                <Input
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    type="password"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} //
                                    value={formik.values.confirmPassword}
                                />
                                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                                    <div className="error">{formik.errors.confirmPassword}</div>
                                ) : null}
                            </Col>
                            <Col>
                                <label htmlFor="age">Age</label>
                                <Input
                                    id="age"
                                    name="age"
                                    type="number"
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur} //
                                    value={formik.values.age}
                                />
                                {formik.touched.age && formik.errors.age ? (
                                    <div className="error">{formik.errors.age}</div>
                                ) : null}
                            </Col>
                        </Row>
                <Button className="btn-submit" color="purple" variant="solid" htmlType="submit"
                        disabled={formik.isSubmitting}>Submit</Button>
                    </div>
                </Form>
            </Container>
        </Modal>
    </div>
  );
}

export default App;
