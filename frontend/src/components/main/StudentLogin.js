import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';

const StudentLogin = () => {

    const studentLogin = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string()
            .required('Required')
    });

    const StudentLogin = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);


            const res = await fetch('http://localhost:5000/user/add', {
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
                    text: "login successfully",
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
        <section className="h-100 form mb-1">
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-xl-10">
                        <div className="card shadow-4-strong rounded-left" >
                            <div className="row g-0" style={{
                                borderRadius: "1rem 0 0 1rem",
                            }}>
                                <div className="col-lg-6"
                                    style={{
                                        backgroundImage: 'url("/images/bg-img-7.jpg")',
                                        height: 668,
                                        backgroundSize: "cover",
                                        backgroundPosition: "90% 50%",
                                        position: "relative",
                                    }}>
                                    <div
                                        className="mask"
                                        style={{
                                            backgroundColor: "rgba(92, 97, 115, 0.6)",
                                        }}
                                    >
                                        <div className="py-4  mx-md-4 "
                                            style={{ color: "#fff", marginTop: "25%", }}>
                                            <p className="text-center m-0" style={{ fontSize: "40px", fontWeight: "bold", color: "#69d1fa" }}>
                                                Welcome back
                                            </p>
                                            <p className="text-center m-0" style={{ fontSize: "40px", fontWeight: "bold", }}>
                                                Hello, Friends
                                            </p>
                                            <p className="text-center m-0">
                                                Fill up personal information and start journey with us.
                                            </p>
                                        </div>
                                        <div className="text-center m-4" style={{ color: '#fff' }}>
                                            <p className='text-light' style={{ letterSpacing: '0px' }}>
                                                Not a member? <a href="/main/StudentSignup"
                                                    style={{ color: '#53e0fc', fontWeight: 'bold' }}
                                                >Register</a>
                                            </p>
                                            <p className='text-light' style={{ letterSpacing: '0px' }}>or sign up with:</p>
                                            <button type="button" className="btn btn-floating text-white mx-1">
                                                <a href="" className="me-4 text-reset">
                                                    <i className="fab fa-facebook-f" />
                                                </a>
                                            </button>
                                            <button type="button" className="btn btn-floating text-white mx-1">
                                                <a href="" className="me-4 text-reset">
                                                    <i className="fab fa-twitter" />
                                                </a>
                                            </button>
                                            <button type="button" className="btn btn-floating text-white mx-1">
                                                <a href="" className="me-4 text-reset">
                                                    <i className="fab fa-google" />
                                                </a>
                                            </button>
                                            <button type="button" className="btn btn-floating text-white mx-1">
                                                <a href="" className="me-4 text-reset">
                                                    <i className="fab fa-instagram" />
                                                </a>
                                            </button>
                                            <button type="button" className="btn btn-floating text-white mx-1">
                                                <a href="" className="me-4 text-reset">
                                                    <i className="fab fa-linkedin" />
                                                </a>
                                            </button>
                                            <button type="button" className="btn btn-floating text-white mx-1">
                                                <a href="" className="me-4 text-reset">
                                                    <i className="fab fa-github" />
                                                </a>
                                            </button>

                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 mt-1">

                                    <div className="card-body mx-md-4 my-5">

                                        <div className="text-center mb-5 font-weight-bold my-5">
                                            <h4 className="text-capitalize mb-0">
                                                Sign in to Account
                                            </h4>
                                            <hr className='hr mt-1'
                                                style={{
                                                    border: '3px solid #0289b0',
                                                    alignItems: 'center',
                                                    width: '25%',
                                                    marginLeft: "38%"
                                                }} />

                                        </div>
                                        <form className="mx-1 mx-md-4 text-black mt-5" onSubmit={StudentLogin.handleSubmit}>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                <div className="flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        name='email'
                                                        autoComplete='off'
                                                        className="form-control form-control-lg"
                                                        placeholder="User Id"
                                                        value={StudentLogin.values.email}
                                                        onChange={StudentLogin.handleChange}
                                                    />
                                                    <span className='text-danger'>{StudentLogin.errors.email}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                <div className="flex-fill mb-0">
                                                    <input
                                                        type="password"
                                                        id="password"
                                                        name='password'
                                                        autoComplete='off'
                                                        className="form-control form-control-lg"
                                                        placeholder="Password"
                                                        value={StudentLogin.values.password}
                                                        onChange={StudentLogin.handleChange}
                                                    />
                                                    <span className='text-danger'>{StudentLogin.errors.password}</span>
                                                </div>
                                            </div>

                                            <div className="pt-1 mx-4 mb-2 pb-1 ">
                                                <button
                                                    className="btn btn-primary btn-block mb-3"
                                                    type="submit"
                                                    style={{ borderRadius: "10px" }}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <a className="text-primary mb-3" href="#!">
                                                Forgot password?
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
    )
}

export default StudentLogin