import { useFormik } from 'formik'
import React from 'react';


const Signup = () => {

  
  return (
    <>
      <div data-draggable="true" style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section draggable="false" className="container pt-5" data-v-271253ee="">
          <section className="heading mb-10 text-center">
            <h2 className="fw-bold mb-5">
              <span>Choose your account type</span>
            </h2>

            <div className='signup-link'>
              <p className="text-center fw-bold mb-8">
                Already have an account?{" "}
                <a href="/main/login" className="fw-bold text-body">
                  <u>Login here</u>
                </a>
              </p>
            </div>

            <div className="row gx-lg-5 mb-8 d-flex justify-content-center">
              {/* First column */}
              <div className="col-lg-4">
                <div class="hover-zoom">
                  <a href="/main/studentsignup">
                    <img
                      src="/icons/student_icon.jpg"
                      className="card-signup w-100 mb-n5 shadow-5-strong"
                      style={{ maxWidth: 100 }}
                      alt="Avatar"
                    />
                  </a>
                  <div
                    className="card-signup p-4 shadow-3"
                    style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                  >
                    <div className="signup-name">
                      <a href="/main/studentsignup">
                        <p className="h5 fw-bold mt-5">Student</p>
                      </a>
                    </div>
                    {/* Divider here */}
                    <hr class="hr hr-blurry"></hr>
                  </div>
                </div>
              </div>
              {/* First column */}

              {/* second column */}
              <div className="col-lg-4">
                <div class="hover-zoom">
                  <a href="/main/trainersignup">
                    <img
                      src="/icons/teacher_icon.jpg"
                      className="card-signup w-100 mb-n5 shadow-5-strong"
                      style={{ maxWidth: 100 }}
                      alt="Avatar"
                    />
                  </a>
                  <div
                    className="card-signup p-4 shadow-3"
                    style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                  >
                    <div className="signup-name">
                      <a href="/main/trainersignup">
                        <p className="h5 fw-bold mt-5">Teacher</p>
                      </a>
                    </div>

                    {/* Divider here */}
                    <hr class="hr hr-blurry"></hr>
                  </div>

                </div>
              </div>

              {/* second column */}
            </div>

          </section>
        </section>
        {/**/}
      </div>
    </>

  )
}

export default Signup