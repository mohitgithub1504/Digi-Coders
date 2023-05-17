import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';

const StudentLogin = () => {

    const studentLogin = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Email is Required'),
        password: Yup.string()
            .required('No password provided.')
            .max(15, 'Password is too long - should be 20 chars maximum.').required('Password is required')
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
        <div>

            {/* <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
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
                                                        autoComplete='off'
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
            </section> */}




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
                                            backgroundImage: 'url("/images/bg-img-9.jpg")',
                                            height: 668,
                                            backgroundSize: "cover",
                                            backgroundPosition: "90% 50%",
                                            position: "relative",
                                            borderRadius: "1rem 0 0 1rem",
                                        }}>
                                        <div
                                            className="mask"
                                            style={{
                                                backgroundColor: "rgba(92, 97, 115, 0.5)",
                                                borderRadius: "1rem 0 0 1rem",
                                            }}
                                        >
                                            <div className="py-4  mx-md-4 "
                                                style={{ color: "#fff", marginTop: "25%", }}>

                                                {/* <h3 className="text-center" style={{color:"#69d1fa"}}>Welcome Back....</h3> */}
                                                <p className="text-center" style={{ fontSize: "40px", fontWeight: "bold",color:"#69d1fa" }}>
                                                    Welcome back
                                                </p>
                                                <p className="text-center" style={{ fontSize: "40px", fontWeight: "bold", }}>
                                                    Hello, Friends
                                                </p>
                                                <p className="text-center">
                                                    Fill up personal information and start journey with us.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6 mt-1">

                                        <div className="card-body mx-md-4 ">
                                            <div className="text-center mb-5" >
                                                <img
                                                    src="\logo\logo.png"
                                                    style={{ width: 185 }}
                                                    alt="logo"
                                                />
                                            </div>
                                            <div className="text-center mb-5 font-weight-bold">
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
                                            <form className="mx-1 mx-md-4 text-black" onSubmit={StudentLogin.handleSubmit}>
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
                                                <div className="text-center m-4">
                                                    <p className='text-dark' style={{ letterSpacing: '0px' }}>
                                                        Not a member? <a href="/main/StudentSignup">Register</a>
                                                    </p>
                                                    <p className='text-dark' style={{ letterSpacing: '0px' }}>or sign up with:</p>
                                                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: "#dcf2fc" }}>
                                                        <i className="fab fa-facebook-f" />
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: "#dcf2fc" }}>
                                                        <i className="fab fa-google" />
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: "#dcf2fc" }}>
                                                        <i className="fab fa-twitter" />
                                                    </button>
                                                    <button type="button" className="btn btn-link btn-floating mx-1" style={{ backgroundColor: "#dcf2fc" }}>
                                                        <i className="fab fa-github" />
                                                    </button>
                                                </div>
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