import React from 'react';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
const Register = () => {
    const handleSubmit = () => {
        alert("Clicked");
    };
    return (
        <div className='login-register-container'>
            <form className="form-signin">
                <img className="mb-4" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" width="72" height="72" />
                <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                <Formik initialValues={{
                    name: '',
                    email: '',
                    password: '',
                    password_confirmation: ''
                }}
                    onSubmit={handleSubmit}
                    validationSchema={
                        Yup.object().shape({
                            email: Yup.string().email('Email format is incorrect').required('Email required'),
                            name: Yup.string().required('Name and Surname Required'),
                            password: Yup.string().required('Password Required'),
                            password_confirmation: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords do not match')
                        })
                    }
                >
                    {({
                        values,
                        handleChange,
                        handleSubmit,
                        handleBlur,
                        errors,
                        isValid,
                        isSubmitting,
                        touched
                    }) => (
                        <div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Name and Surname" value={values.name} onBlur={handleBlur} onChange={handleChange('name')}/> {errors.name && touched.name && <p>{errors.name}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="email" className="form-control" placeholder="Email address" value={values.email} onBlur={handleBlur}  onChange={handleChange('email')}/> {errors.email && touched.email && <p>{errors.email}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="password" className="form-control" placeholder="Password" value={values.password} onBlur={handleBlur}  onChange={handleChange('password')}/> {errors.password && touched.password && <p>{errors.password}</p>}
                            </div>
                            <div className="form-group mt-2">
                                <input type="password" className="form-control" placeholder="Again Password" value={values.password_confirmation} onBlur={handleBlur}  onChange={handleChange('password_confirmation')}/> {errors.password_confirmation && touched.password_confirmation && <p>{errors.password_confirmation}</p>}
                            </div>
                            <button className="btn btn-lg btn-primary btn-block" onClick={handleSubmit} onBlur={handleBlur}  disabled={!isValid || isSubmitting}>Register</button>
                        </div>
                    )}
                </Formik>
                <Link to='/Login' className='mt-2' style={{ display: "block", textDecoration: 'none', color: 'grey' }}>Login ?</Link>
                <p className="mt-5 mb-3 text-muted">© 2017-2018</p>
            </form>
        </div>
    )
};
export default Register;