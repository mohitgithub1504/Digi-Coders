import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import app_config from '../../config';

const StudentSignup = () => {

    const { apiUrl } = app_config;

    const StudentsignupSchema = Yup.object().shape({
        name: Yup.string()
            .min(2, 'Too Short!')
            .max(50, 'Too Long!')
            .required('Required'),
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Please Enter your password')
        // .matches(
        //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        // ),

    });

    const studentsignupForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            password: '',
            createdAt: '',
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);

            const res = await fetch(apiUrl +'/user/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);

            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Congratulations",
                    text: "Your account has been successfully created",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        },
        validationSchema: StudentsignupSchema,

    });

    return (
        <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0.5, x: -300 }}
            transition={{ type: "spring" }}
            className="vid-manage-bg"
        // style={{
        //   backgroundImage: `url('/images/bg-animation-img1.jpg`,
        //   height: 1000,
        //   backgroundSize: "cover",
        // }}
        >
            {/*Student Signup Form*/}
            <section className="h-100 form my-5 ">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-7 shadow-4-strong">
                                <div className="row g-0">
                                    <div
                                        className="col-lg-6 "
                                        style={{
                                            backgroundColor: "#aedff3",
                                            backgroundSize: "cover",
                                            position: "relative",
                                        }}
                                    >
                                        <div className="form px-3 pt-5 mx-md-4">
                                            <h2 className="my-1 text-center">One of us ?</h2>
                                        </div>

                                        <div className="form px-5 py-2">
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="flex-fill text-center mb-2">
                                                    <p>
                                                        Lorem ipsum, dolor sit amet consectetur adipisicing
                                                        elit. Recusandae eum consectetur fuga
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center">
                                                <div className="flex-fill text-center mb-2">
                                                    <a
                                                        href="/main/studentlogin"
                                                        class="btn btn-primary"
                                                        id="sign-up-button"
                                                        role="button"
                                                    >
                                                        Sign In
                                                    </a>
                                                </div>
                                            </div>
                                            <img
                                                src="/images/register.svg"
                                                className="image"
                                                alt=""
                                                style={{
                                                    height: 320,
                                                    marginLeft: "15%",
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5">
                                            <div className="text-center mb-5">
                                                <h3 className="my-5" style={{ marginLeft: "8%" }}>
                                                    Student Signup
                                                </h3>
                                            </div>
                                            <form
                                                className="mx-1 mx-md-4 text-black"
                                                onSubmit={studentsignupForm.handleSubmit}
                                            >
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                    <div className="flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="name"
                                                            className="form-control form-control-lg"
                                                            placeholder='Name'
                                                            value={studentsignupForm.values.name}
                                                            onChange={studentsignupForm.handleChange}
                                                        />
                                                        <span className='text-danger'>{studentsignupForm.errors.name}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                    <div className="flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            id="email"
                                                            autoComplete='off'
                                                            className="form-control form-control-lg"
                                                            placeholder='Email'
                                                            value={studentsignupForm.values.email}
                                                            onChange={studentsignupForm.handleChange}
                                                        />
                                                        <span className='text-danger' >{studentsignupForm.errors.email}</span>
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                    <div className="flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="password"
                                                            autoComplete='off'
                                                            className="form-control form-control-lg"
                                                            placeholder='Password'
                                                            value={studentsignupForm.values.password}
                                                            onChange={studentsignupForm.handleChange}
                                                        />
                                                        <span className='text-danger'>{studentsignupForm.errors.password}</span>
                                                    </div>
                                                </div>
                                                <div className="pt-1 mx-4 pb-1 ">
                                                    <button
                                                        className="btn btn-primary btn-block mb-6"
                                                        type="submit"
                                                        style={{ borderRadius: "10px" }}
                                                    >
                                                        Sign Up &nbsp;
                                                        <i className="fas fa-arrow-right-to-bracket" />
                                                    </button>
                                                    {/* Register buttons */}
                                                    <div>
                                                        <div className="mb-4" style={{ marginLeft: "35%" }}>
                                                            <h6>or sign up with :</h6>
                                                        </div>
                                                        <div className="" style={{ marginLeft: "28%" }}>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-floating mx-1"
                                                            >
                                                                <i className="fab fa-facebook-f" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-floating mx-1"
                                                            >
                                                                <i className="fab fa-google" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-floating mx-1"
                                                            >
                                                                <i className="fab fa-twitter" />
                                                            </button>
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary btn-floating mx-1"
                                                            >
                                                                <i className="fab fa-github" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    {/* Register buttons */}
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
            {/*Student Signup Form*/}
        </motion.div>
    )
}

export default StudentSignup