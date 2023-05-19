import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { useFormik } from 'formik';
import React from 'react'

const TrainerLogin = () => {

  const trainerlogin = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is Required'),
    password: Yup.string()
      .required('Password Required.')
    // .min(8, 'Password is too short - should be 8 chars minimum.')
    // .max(15, 'Password is too long - should be 20 chars maximum.')
    // .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });
  const Trainerlogin = useFormik({
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
          text: "login successfully",
        });
        const data = await res.json();
        sessionStorage.setItem('trainer', JSON.stringify(data));
        console.log(data);
      }
      else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    validationSchema: trainerlogin,


  });




  return (
    // <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
    //   <div className="container py-5 h-100">
    //     <div className="row d-flex justify-content-center align-items-center h-100">
    //       <div className="col col-xl-10">
    //         <div className="card" style={{ borderRadius: "1rem" }}>
    //           <div className="row g-0">
    //             <div className="col-md-6 col-lg-5 d-none d-md-block">
    //               <img
    //                 src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
    //                 alt="login form"
    //                 className="img-fluid"
    //                 style={{ borderRadius: "1rem 0 0 1rem" }}
    //               />
    //             </div>
    //             <div className="col-md-6 col-lg-7 d-flex align-items-center">
    //               <div className="card-body p-4 p-lg-5 text-black">
    //                 <form onSubmit={Trainerlogin.handleSubmit}>
    //                   <div className="d-flex align-items-center mb-3 pb-1">
    //                     <i
    //                       className="fas fa-cubes fa-2x me-3"
    //                       style={{ color: "#ff6219" }}
    //                     />
    //                     <span className="h1 fw-bold mb-0">Logo</span>
    //                   </div>
    //                   <h5
    //                     className="fw-normal mb-3 pb-3"
    //                     style={{ letterSpacing: 1 }}
    //                   >
    //                     Sign into your account
    //                   </h5>
    //                   <div className="mb-4">
    //                     <input
    //                       type="email"
    //                       name='email'
    //                       id="form2Example17"
    //                       className="form-control form-control-lg"
    //                       placeholder='Email Address'
    //                       value={Trainerlogin.values.email}
    //                       onChange={Trainerlogin.handleChange}
    //                     />
    //                     <span className='text-danger'>{Trainerlogin.errors.email}</span>
    //                   </div>
    //                   <div className="mb-4">
    //                     <input
    //                       type="password"
    //                       name='password'
    //                       id="form2Example27"
    //                       className="form-control form-control-lg"
    //                       placeholder='Password'
    //                       value={Trainerlogin.values.password}
    //                       onChange={Trainerlogin.handleChange}
    //                     />
    //                     <span className='text-danger'>{Trainerlogin.errors.password}</span>
    //                   </div>
    //                   <div className="pt-1 mb-4">
    //                     <button
    //                       className="btn btn-dark btn-lg btn-block"
    //                       type="submit"
    //                     >
    //                       Login
    //                     </button>
    //                   </div>
    //                   <a className="small text-muted" href="#!">
    //                     Forgot password?
    //                   </a>
    //                   <p className="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
    //                     Don't have an account?{" "}
    //                     <a href="#!" style={{ color: "#393f81" }}>
    //                       Register here
    //                     </a>
    //                   </p>
    //                   <a href="#!" className="small text-muted">
    //                     Terms of use.
    //                   </a>
    //                   <a href="#!" className="small text-muted">
    //                     Privacy policy
    //                   </a>
    //                 </form>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </section>

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
                    backgroundImage: 'url("/images/bg-img-1.jpg")',
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
                        Hello, Trainer
                      </p>
                      <p className="text-center m-0 px-md-5">
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

                  <div className="card-body mx-md-4 mt-5">

                    <div className="text-center mb-5 font-weight-bold my-5">
                      <h4 className="text-capitalize mb-0" style={{color:'#000'}}>
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
                    <form className="mx-1 mx-md-4 text-black mt-5" onSubmit={Trainerlogin.handleSubmit}>
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
                            value={Trainerlogin.values.email}
                            onChange={Trainerlogin.handleChange}
                          />
                          <span className='text-danger'>{Trainerlogin.errors.email}</span>
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
                            value={Trainerlogin.values.password}
                            onChange={Trainerlogin.handleChange}
                          />
                          <span className='text-danger'>{Trainerlogin.errors.password}</span>
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
                      <div className='text-center'>
                        <a className="mb-3 text-center" href="#!">
                          Forgot password?
                        </a>
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
  )
}

export default TrainerLogin