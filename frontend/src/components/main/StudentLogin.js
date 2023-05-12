import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';

const StudentLogin = () => {

    const studentLogin = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string()
            .required('No password provided.')
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    });

    const StudentLogin = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);


            const res = await fetch('http://localhost:5000/trainer/add', {
                method: 'POST',
                body: JSON.stringify(values),  // this is used to convert js data in json formate
                headers: {
                    'Content-Type': 'application/json' // this used to inform the data in send in the form of json
                }
            });

            console.log(res.status);
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Well Done",
                    text: "You have success full Register ",
                });
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            }
        },
        validationSchema: studentLogin,


    });

    return (
        <div>

            <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col col-xl-10">
                            <div className="card" style={{ borderRadius: "1rem" }}>
                                <div className="row g-0">
                                    <div className="col-md-6 col-lg-5 d-none d-md-block">
                                        <img
                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                                            alt="login form"
                                            className="img-fluid"
                                            style={{ borderRadius: "1rem 0 0 1rem" }}
                                        />
                                    </div>
                                    <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                        <div className="card-body p-4 p-lg-5 text-black">
                                            <form onSubmit={StudentLogin.handleSubmit}>
                                                <div className="d-flex align-items-center mb-3 pb-1">
                                                    <i
                                                        className="fas fa-cubes fa-2x me-3"
                                                        style={{ color: "#ff6219" }}
                                                    />
                                                    <span className="h1 fw-bold mb-0">Logo</span>
                                                </div>
                                                <h5
                                                    className="fw-normal mb-3 pb-3"
                                                    style={{ letterSpacing: 1 }}
                                                >
                                                    Sign into your account
                                                </h5>
                                                <div className="mb-4">
                                                    <input
                                                        type="email"
                                                        name='email'
                                                        id="form2Example17"
                                                        className="form-control form-control-lg"
                                                        placeholder='Email Address'
                                                        value={StudentLogin.values.email}
                                                        onChange={StudentLogin.handleChange}
                                                    />
                                                    <span className='text-danger'>{StudentLogin.errors.email}</span>
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="password"
                                                        name='password'
                                                        id="form2Example27"
                                                        className="form-control form-control-lg"
                                                        placeholder='Password'
                                                        value={StudentLogin.values.password}
                                                        onChange={StudentLogin.handleChange}
                                                    />
                                                    <span className='text-danger'>{StudentLogin.errors.email}</span>
                                                </div>
                                                <div className="pt-1 mb-4">
                                                    <button
                                                        className="btn btn-dark btn-lg btn-block"
                                                        type="button"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                                <a className="small text-muted" href="#!">
                                                    Forgot password?
                                                </a>
                                                <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                                                    Don't have an account?{" "}
                                                    <a href="#!" style={{ color: "#393f81" }}>
                                                        Register here
                                                    </a>
                                                </p>
                                                <a href="#!" className="small text-muted">
                                                    Terms of use.
                                                </a>
                                                <a href="#!" className="small text-muted">
                                                    Privacy policy
                                                </a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default StudentLogin