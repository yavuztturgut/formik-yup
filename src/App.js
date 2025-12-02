import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React , {useState} from 'react';
import {useFormik} from "formik";
import {signupSchema} from "./yup";
import { Button , Input, Form, Modal} from 'antd';
import {Row, Col, Container} from 'reactstrap';

function App() {
    let nextId = 1;
    const [users, setUsers] = useState([]);
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
            console.log(typeof values);
            action.resetForm()
            setUsers(prevUsers => [
                ...prevUsers,
                // Listede benzersiz anahtar (key) için id eklenir
                { ...values, id: nextId++ }
            ]);
            closeModal();
        }
    })

    const [isModalOpen, setIsModalOpen] = useState(true);
    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openModal = () => {
        setIsModalOpen(true);
    };

  return (
    <div className="App">

        <Button onClick={openModal}>Register</Button>
        <ul className="list">
            {users.map(user => (
                <li key={user.key}>
                        <p>{user.email} </p>
                        <p> {user.age}</p>
                </li>
            ))}
        </ul>

        <Modal
            title="Register"
            open={isModalOpen}
            onCancel={closeModal}
            footer={null} >
            <Container>
                <Form onFinish={formik.handleSubmit}>
                    <div className="form-group">
                <Row>
                    <Col sm="6">
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
                    <Col sm="6">
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
                            <Col sm="4">
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
                            <Col sm="4">
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
                            <Col sm="4">
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
