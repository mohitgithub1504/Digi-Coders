import { useFormik } from 'formik'
import React from 'react';
import Swal from 'sweetalert2';
import * as Yup from 'yup';

const TrainerSignup = () => {

  const TrainerSignupSchema = Yup.object().shape({
    name: Yup.string()
      .min(4, 'Too Short!')
      .max(20, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email').required('Required'),
    password: Yup.string()
      .required('Please Enter your password')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const TrainerSignup = useFormik({
    initialValues: {
      name: '',
      skills: '',
      certifications: '',
      email: '',
      password: '',
      avatar: '',
      createdAt: '',
    },

    onSubmit: async (values, { setSubmitting }) => {
      //setSubmitting(true);
      console.log(values);

      const res = await fetch('http://localhost:5000/user/add', {
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
          title: "Well done !!",
          text: "You have successfully registered"
        });
      }
    },
    validationSchema: TrainerSignupSchema
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
                      style={{ textAlign: 'center', fontWeight: '900' }}
                    >
                      Student registration form
                    </h3>
                    <form action="" onSubmit={TrainerSignup.handleSubmit}>
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
                              value={TrainerSignup.values.name}
                              onChange={TrainerSignup.handleChange}
                            />
                            <span className='text-danger'>{TrainerSignup.errors.name}</span>
                          </div>
                        </div>
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="skills"
                          className="form-control form-control-lg"
                          Placeholder='Enter Skills'
                        />
                      </div>
                      <div className="mb-4">
                        <input
                          type="text"
                          id="certificate"
                          className="form-control form-control-lg"
                          placeholder='Certificate'
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="email"
                          id="email"
                          autoComplete='off'
                          className="form-control form-control-lg"
                          placeholder='Enter Your Email'
                          value={TrainerSignup.values.email}
                          onChange={TrainerSignup.handleChange}
                        />
                        <span className='text-danger'>{TrainerSignup.errors.email}</span>
                      </div>
                      <div className="mb-4">
                        <input
                          type="password"
                          id="password"
                          autoComplete='off'
                          className="form-control form-control-lg"
                          placeholder='Enter Password'
                          value={TrainerSignup.values.password}
                          onChange={TrainerSignup.handleChange}
                        />
                        <span className='text-danger'>{TrainerSignup.errors.password}</span>
                      </div>
                      <div className="mb-4">
                        <input
                          type="file"
                          id="image"
                          className="form-control form-control-lg"
                          placeholder='Upload Image'
                        />
                      </div>

                      <div className="mb-4">
                        <input
                          type="datetime"
                          id="datetime"
                          className="form-control form-control-lg"
                          placeholder='Created Date'
                        />
                      </div>

                      <div className="d-flex justify-content-end pt-3">
                        <button type="button" className="btn btn-primary btn-lg m-3 ms-2" disabled={TrainerSignup.isSubmitting}>
                        { TrainerSignup.isSubmitting ? <span className='spinner-border spinner-border-sm'></span> : ''}
                          Submit form
                        </button>
                        <button type="button" className="btn btn-primary btn-lg m-3">
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