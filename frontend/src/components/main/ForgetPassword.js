import React from 'react'

const ForgetPassword = () => {
    return (
        <section className="my-5">
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card shadow-5-strong">
                            <div className="card-body p-5 text-center mx-5">
                                <form>
                                    <h3 className="mb-2">Forget password</h3>
                                    <p className='text-center'>Create New Password</p>
                                    <div className="mb-4">
                                        <input
                                            type="email"
                                            id="email"
                                            name="user_id"
                                            autoComplete='off'
                                            className="form-control"
                                            placeholder='User id'
                                        />
                                    </div>
                                    <div className=" mb-4 ">
                                        <input
                                            type="password"
                                            id="password"
                                            name="Newpassword"
                                            autoComplete="false"
                                            className="form-control "
                                            placeholder='Create new password'
                                        />
                                    </div>
                                    <div className=" mb-4">
                                        <input
                                            type="password"
                                            id="password"
                                            name="confirmpassword"
                                            autoComplete="false"
                                            className="form-control "
                                            placeholder='Confirm your password'
                                        />
                                    </div>
                                    <div>
                                        <button type="button" class="btn btn-primary btn-lg btn-block mx-auto"
                                        style={{borderRadius:'5px'}}
                                        >
                                            Change
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}

export default ForgetPassword