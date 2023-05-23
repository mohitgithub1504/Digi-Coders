import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";

const TrainerSignup = () => {

  const trainersignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is Required'),
    skills: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Skills is Required'),
    certificate: Yup.string()
      .min(5, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Certificate is Required'),
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup
      .string()
      .required('Please Enter your password'),
  });

  const trainersignupForm = useFormik({
    initialValues: {
      name: '',
      skills: '',
      certificate: '',
      email: '',
      password: '',
      avatar: '',
      createdAt: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);


      const res = await fetch('http://localhost:5000/trainer/add', {
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
    validationSchema: trainersignupSchema,


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
                        backgroundPosition: "90% 50%",
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
                              href="/main/trainerlogin"
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
                            marginTop: "20%",
                            marginLeft: "15%",
                          }}
                        />
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="card-body p-md-5">
                        <div className="text-center mb-5">
                          <h3 className="my-5" style={{ marginLeft: "8%" }}>
                            Trainer Signup
                          </h3>
                        </div>
                        <form
                          className="mx-1 mx-md-4 text-black"
                          onSubmit={trainersignupForm.handleSubmit}
                        >
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                              <input
                                type="text"
                                id="name"
                                className="form-control"
                                placeholder='Name'
                                value={trainersignupForm.values.name}
                                onChange={trainersignupForm.handleChange}
                              />
                              <span className='text-danger'>{trainersignupForm.errors.name}</span>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                              <input
                                type="email"
                                id="email"
                                autoComplete='off'
                                className="form-control"
                                placeholder='Email'
                                value={trainersignupForm.values.email}
                                onChange={trainersignupForm.handleChange}
                              />
                              <span className='text-danger' >{trainersignupForm.errors.email}</span>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                              <input
                                type="password"
                                id="password"
                                autoComplete='off'
                                className="form-control"
                                placeholder='Password'
                                value={trainersignupForm.values.password}
                                onChange={trainersignupForm.handleChange}
                              />
                              <span className='text-danger'>{trainersignupForm.errors.password}</span>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-gear fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                              <input
                                type="text"
                                id="skills"
                                autoComplete='off'
                                className="form-control"
                                Placeholder='Skills'
                                value={trainersignupForm.values.skills}
                                onChange={trainersignupForm.handleChange}
                              />
                              <span className='text-danger'>{trainersignupForm.errors.skills}</span>
                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-award fa-lg me-3 fa-fw" />
                            <div className="flex-fill mb-0">
                            <input
                            type="text"
                            id="certificate"
                            autoComplete='off'
                            className="form-control"
                            placeholder='Certificate'
                            value={trainersignupForm.values.certificate}
                            onChange={trainersignupForm.handleChange}
                          />
                          <span className='text-danger'>{trainersignupForm.errors.certificate}</span>
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

export default TrainerSignup