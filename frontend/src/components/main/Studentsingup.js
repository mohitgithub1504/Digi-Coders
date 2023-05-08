import React from 'react'

const Studentsingup = () => {
    return (
        <section className="vh-auto" style={{ backgroundColor: "#a3e7f7" }}>
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: "1rem" }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img
                                        src="/images/Altloginimg.jpg"
                                        alt="login form"
                                        className="img-fluid"
                                        style={{ borderRadius: "1rem 0 0 1rem" }}
                                    />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <form>
                                            <div className="d-flex align-items-center mb-3 pb-1">
                                                <img src="/logo/logo.png" alt="error"
                                                    style={{ height: "50px" }}
                                                />
                                            </div>
                                            <h5
                                                className="mb-3 pb-3"
                                                style={{ letterSpacing: 1, textAlign: "center", fontSize: "30px" }}
                                            >
                                                Sign upto your account
                                            </h5>
                                            <div className=" mb-3">
                                                <input
                                                    type="text"
                                                    id="form2Example17"
                                                    className="form-control form-control-lg"
                                                    placeholder='Full Name'
                                                />
                                            </div>
                                            
                                            <div className=" mb-3">
                                                <input
                                                    type="email"
                                                    id="email"
                                                    autoComplete='off'
                                                    className="form-control form-control-lg"
                                                    placeholder='Email'
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="password"
                                                    id="password"
                                                    autoComplete='off'
                                                    className="form-control form-control-lg"
                                                    placeholder='Password'
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <input
                                                    type="date"
                                                    id="createdAt"
                                                    className="form-control form-control-lg"
                                                    placeholder='Created Date'
                                                />
                                            </div>

                                            <div className="mb-3">
                                                <input
                                                    type="file"
                                                    id="avatar"
                                                    className="form-control form-control-lg"
                                                    placeholder='Uploal Photo'
                                                />
                                            </div>
                                            <div className="pt-1 mb-2">
                                                <button
                                                    className="btn btn-dark btn-sm btn-block"
                                                    type="button"
                                                    style={{ fontSize:"20px" }}
                                                >
                                                    Login
                                                </button>
                                            </div>
                                            <a className="small text-muted" href="#!">
                                                Forgot password?
                                            </a>
                                            <p className="mb-1 pb-lg-1" style={{ color: "#393f81" }}>
                                                Don't have an account?{" "}
                                                <a href="/main/signup" style={{ color: "#393f81" }}>
                                                    Register here
                                                </a>
                                            </p>
                                            <a href="#!" className="small text-muted m-0 p-0">
                                                Terms of use.
                                            </a>
                                            <a href="#!" className="small text-muted m-0 p-0">
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
        </section>
    )
}

export default Studentsingup