import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';

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
    // .matches(
    //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
    //   "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    // ),
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
    validationSchema: trainersignupSchema,


  });



  return (
    <section className="h-100 bg-light">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <div className="card card-registration my-4">
              <div className="row g-0">
                <div className="col-xl-6 d-xl-block trainer-bg-img"
                  style={{ backgroundImage: `url(/images/registerimg.jpg)`, backgroundSize: "cover", backgroundPosition: "center", borderRadius: "0.5rem 0 0 0.5rem", }}
                >
                  <div className="align-items-center mb-3 mt-5 pb-1">
                    <img src="/logo/logo-white.png" alt="error"
                      style={{ height: "50px" }}
                    />
                  </div>
                  <h3 className='text-white'
                    style={{
                      color: '#fff', textAlign: 'center', justifyContent: 'center',
                      fontSize: '50px', fontWeight: '600', letterSpacing: '1px',
                      marginTop: '100px'
                    }}>Grow with Digi Coder </h3>
                  <p style={{ textAlign: 'center', justifyContent: 'center', color: '#fff' }}>
                    Already have an account?
                    <a href="/main/login" style={{ color: '#84c7fa', fontWeight: '900', fontSize: '20px', letterSpacing: '1px' }}>Login</a>
                  </p>

                  {/* add here logo and some content */}

                </div>
                <div className="col-xl-6">
                  <div className="card-body p-md-5 text-black">
                    <h3 className="mb-3 text-uppercase"
                      style={{ textAlign: 'center', fontWeight: '900', fontSize: '35px' }}
                    >
                      Trainer Registration
                    </h3>
                    <form onSubmit={trainersignupForm.handleSubmit}>
                      <div className="row">
                        <div className="mb-4">
                          <div className="">
                            <input
                              type="text"
                              id="firstname"
                              name='name'
                              autoComplete='off'
                              className="form-control form-control-lg"
                              placeholder='Full Name'
                              value={trainersignupForm.values.name}
                              onChange={trainersignupForm.handleChange}
                            />
                            <span className='text-danger'>{trainersignupForm.errors.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="trainerskills"
                          name='skills'
                          className="form-control form-control-lg"
                          Placeholder='Enter Skills'
                          value={trainersignupForm.values.skills}
                          onChange={trainersignupForm.handleChange}
                        />
                        <span className='text-danger'>{trainersignupForm.errors.skills}</span>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="certificate"
                          className="form-control form-control-lg"
                          placeholder='Certificate'
                          value={trainersignupForm.values.certificate}
                          onChange={trainersignupForm.handleChange}
                        />
                        <span className='text-danger'>{trainersignupForm.errors.certificate}</span>
                      </div>

                      <div className="mb-4">
                        <input
                          type="email"
                          id="email"
                          value={trainersignupForm.values.email}
                          onChange={trainersignupForm.handleChange}
                          autoComplete='off'
                          className="form-control form-control-lg"
                          placeholder='Enter Your Email'
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          id="password"
                          value={trainersignupForm.values.password}
                          onChange={trainersignupForm.handleChange}
                          autoComplete='off'
                          className="form-control form-control-lg"
                          placeholder='Enter Password'
                        />
                        <span className='text-danger'>{trainersignupForm.errors.password}</span>
                      </div>


                      <div className="d-flex justify-content-end pt-3">
                        <button type="submit" className="btn btn-warning btn-lg m-3 ms-2">
                          Submit form
                        </button>
                        <button type="button" className="btn btn-warning btn-lg m-3">
                          Reset
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
    </section >

  )
}

export default TrainerSignup