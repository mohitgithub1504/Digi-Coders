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
                      <div className="mb-4">
                        <div className="">
                          <input
                            type="text"
                            id="firstname"
                            className="form-control form-control-lg"
                            placeholder='Full Name'
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="text"
                        id="address"
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
                      />
                    </div>
                    <div className="mb-4">
                      <input
                        type="password"
                        id="password"
                        autoComplete='off'
                        className="form-control form-control-lg"
                        placeholder='Enter Password'
                      />
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