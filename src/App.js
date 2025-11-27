import './App.css';
import React from 'react';
import {useFormik} from "formik";
import {signupSchema} from "./yup";
import { Button , Input, Form} from 'antd';

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
    <form onSubmit={formik.handleSubmit}>
        <div className="form-group">
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
            ) : null}
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
        </div>
        <Button color="purple" variant="solid" htmlType="submit" disabled={formik.isSubmitting}
                className="mt-5">Submit</Button>
    </form>
    </div>
  );
}

export default App;
