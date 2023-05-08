import React from 'react'

const TrainerSignup = () => {

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
                    <a href="/main/login" style={{ color: '#84c7fa', fontWeight:'900', fontSize:'20px', letterSpacing:'1px' }}>Login</a>
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
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="">
                          <input
                            type="text"
                            id="firstname"
                            className="form-control form-control-lg"
                            placeholder='First Name'
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="">
                          <input
                            type="text"
                            id="lastname"
                            className="form-control form-control-lg"
                            placeholder='Last Name'
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="">
                          <input
                            type="text"
                            id="mothername"
                            className="form-control form-control-lg"
                            placeholder='Mother Name'
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="">
                          <input
                            type="text"
                            id="fathername"
                            className="form-control form-control-lg"
                            placeholder='Father Name'
                          />
                        </div>
                      </div>
                    </div>
                    <div className="e mb-4">
                      <input
                        type="text"
                        id="address"
                        className="form-control form-control-lg"
                        Placeholder='Enter Your Address'
                      />
                    </div>
                    <div className="d-md-flex justify-content-start align-items-center mb-4 py-2">
                      <h6 className="mb-0 me-4">Gender: </h6>
                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="femaleGender"
                          defaultValue="option1"
                        />Female
                      </div>
                      <div className="form-check form-check-inline mb-0 me-4">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="maleGender"
                          defaultValue="option2"
                        />Male
                      </div>
                      <div className="form-check form-check-inline mb-0">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="inlineRadioOptions"
                          id="otherGender"
                          defaultValue="option3"
                        />Other
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <select className="select form-control form-control-lg">
                          <option value={1}>State</option>
                          <option value={2}>Option 1</option>
                          <option value={3}>Option 2</option>
                          <option value={4}>Option 3</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-4">
                        <select className="select form-control form-control-lg">
                          <option value={1}>City</option>
                          <option value={2}>Option 1</option>
                          <option value={3}>Option 2</option>
                          <option value={4}>Option 3</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="date"
                        className="form-control form-control-lg"
                        placeholder='D.O.B'
                      />
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="" >
                          <input type="text" id="pincode" className="form-control form-control-lg"
                            placeholder='Pincode' />

                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="">
                          <input type="text" id="course" className="form-control form-control-lg"
                            placeholder='Course' />

                        </div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <input
                        type="email"
                        id="email"
                        className="form-control form-control-lg"
                        placeholder='Enter Your Email'
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        id="password"
                        className="form-control form-control-lg"
                        placeholder='Enter Password'
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        id="confirmpassword"
                        className="form-control form-control-lg"
                        placeholder='Confirm Password'
                      />
                    </div>

                    <div className="d-flex justify-content-end pt-3">
                      <button type="button" className="btn btn-warning btn-lg m-3 ms-2">
                        Submit form
                      </button>
                      <button type="button" className="btn btn-warning btn-lg m-3">
                        Reset
                      </button>
                    </div>
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