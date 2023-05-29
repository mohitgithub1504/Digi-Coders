import React from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import { useFormik } from "formik";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import app_config from "../../config";
import { useUserContext } from "../../context/UserContext";

const StudentLogin = () => {

  const navigate = useNavigate();
  const { apiUrl } = app_config;
  const {setLoggedIn} = useUserContext();

  const studentLogin = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is Required"),
    password: Yup.string().required("Required"),
  });

  const StudentLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values, { setSubmitting }) => {
      console.log(values);

      const res = await fetch(apiUrl +"/user/authenticate", {
        method: "POST",
        body: JSON.stringify(values), // this is used to convert js data in json formate
        headers: {
          "Content-Type": "application/json", // this used to inform the data in send in the form of json
        },
      });

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Well Done!!",
          text: "login successfully",
          showConfirmButton: false,
          timer: 1500
        });
        
        const data = await res.json();
        sessionStorage.setItem("user", JSON.stringify(data));
        setLoggedIn(true);
        console.log(data);
        navigate('/main/course');

      } else {
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
    <motion.div
      initial={{ opacity: 0, x: 300 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0.5, x: -300 }}
      transition={{ type: "spring" }}
      className="vid-manage-bg"
      // style={{
      //   backgroundImage: `url('/images/bg-animation-img2.jpg`
      // }}
    >
      {/*Student Login Form*/}
      <section className="form">
        <div className="">
          <div className="row g-0">
            <div className="col-lg-6 curve">
              <div className="pt-5" style={{ marginLeft: "285px", }}>
                <h2 className="my-1">New Here?</h2>
              </div>

              <div className="py-2" style={{ marginLeft: "100px" }}>
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
                    <NavLink to="/main/studentsignup" className="btn btn-primary">
                      Sign Up
                    </NavLink>
                  </div>
                </div>
                <img
                  src="/images/login.svg"
                  className="image"
                  alt=""
                  style={{
                    height: 400,
                    marginTop: "10%",
                    marginLeft: "-5%",
                  }}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-5">
                <div className="text-center mb-5">
                  <h3 className="my-5" style={{ marginLeft: "5%" }}>
                    Student Login
                  </h3>
                </div>
                <form
                  className="mx-md-5 text-black"
                  onSubmit={StudentLogin.handleSubmit}
                >
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                    <div className="flex-fill mb-0">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        autoComplete="off"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        value={StudentLogin.values.email}
                        onChange={StudentLogin.handleChange}
                      />
                      <span className="text-danger">
                        {StudentLogin.errors.email}
                      </span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <i className="fas fa-lock fa-lg me-3 fa-fw" />
                    <div className="flex-fill mb-0">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        autoComplete="off"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        value={StudentLogin.values.password}
                        onChange={StudentLogin.handleChange}
                      />
                      <span className="text-danger">
                        {StudentLogin.errors.password}
                      </span>
                    </div>
                  </div>
                  <div className="mb-4">
                    <NavLink
                      className="nav-link"
                      to="/main/resetpassword"
                      style={{ marginLeft: "38%" }}
                    >
                      Forget password?
                    </NavLink>
                  </div>
                  <div className="pt-1 mx-4 pb-1 ">
                    <button
                      className="btn btn-primary btn-block mb-5"
                      type="submit"
                      style={{ borderRadius: "10px" }}
                    >
                      Login &nbsp;
                      <i className="fas fa-arrow-right-to-bracket" />
                    </button>

                    <div>
                      <div className="mb-4" style={{ marginLeft: "40%" }}>
                        <h6>or sign in with :</h6>
                      </div>
                      <div className="" style={{ marginLeft: "34%" }}>
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

                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*Student Login Form*/}
    </motion.div>
  );
};

export default StudentLogin;
