import React from 'react'

const UserProfile = () => {
    return (
        <div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-md-5 col-xl-4">
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title mb-0">Profile Settings</h5>
                            </div>
                            <div className="list-group list-group-flush" role="tablist">
                                <a
                                    className="list-group-item list-group-item-action active"
                                    data-toggle="list"
                                    href="#account"
                                    role="tab"
                                >
                                    User Profile
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    data-toggle="list"
                                    href="#password"
                                    role="tab"
                                >
                                    Change Password
                                </a>
                                <a
                                    className="list-group-item list-group-item-action"
                                    data-toggle="list"
                                    href="#"
                                    role="tab"
                                >
                                    Delete account
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-xl-8">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="account" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">User Profile</h5>
                                    </div>
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-4">
                                                <div className="text-center">
                                                    <img
                                                        alt="Andrew Jones"
                                                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                                        className="rounded-circle img-responsive mt-2"
                                                        width={128}
                                                        height={128}
                                                    />
                                                    <div className="mt-4">
                                                        <div className="">
                                                            <h3 className="">Mohit Mishra</h3>
                                                            <h5 className="text-danger">Male</h5>
                                                        </div>

                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-lg-8">

                                                <div className="card mb-4">
                                                    <div className="card-body">
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Name -</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">Johnatan Smith</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Email -</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">example@example.com</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Phone No. -</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">(097) 234-5678</p>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="row">
                                                            <div className="col-sm-3">
                                                                <p className="mb-0">Address -</p>
                                                            </div>
                                                            <div className="col-sm-9">
                                                                <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mt-5">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Update Profile</h5>
                                    </div>
                                    <div className="card-body">
                                        <form>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputFirstName">First name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputFirstName"
                                                        placeholder="First name"
                                                    />
                                                </div>
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputLastName">Last name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputLastName"
                                                        placeholder="Last name"
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputEmail4">Email</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="inputEmail4"
                                                    placeholder="Email"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress">Address</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputAddress"
                                                    placeholder="1234 Main St"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputAddress2">Address 2</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="inputAddress2"
                                                    placeholder="Apartment, studio, or floor"
                                                />
                                            </div>
                                            <div className="form-row">
                                                <div className="form-group col-md-6">
                                                    <label htmlFor="inputCity">City</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="inputCity"
                                                    />
                                                </div>
                                                <div className="form-group col-md-4">
                                                    <label htmlFor="inputState">State</label>
                                                    <select id="inputState" className="form-control">
                                                        <option selected="">Choose...</option>
                                                        <option>...</option>
                                                    </select>
                                                </div>
                                                <div className="form-group col-md-2">
                                                    <label htmlFor="inputZip">Zip</label>
                                                    <input type="text" className="form-control" id="inputZip" />
                                                </div>
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="password" role="tabpanel">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">Password</h5>
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="inputPasswordCurrent">Current password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="inputPasswordCurrent"
                                                />
                                                <small>
                                                    <a href="#">Forgot your password?</a>
                                                </small>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPasswordNew">New password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="inputPasswordNew"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="inputPasswordNew2">Verify password</label>
                                                <input
                                                    type="password"
                                                    className="form-control"
                                                    id="inputPasswordNew2"
                                                />
                                            </div>
                                            <button type="submit" className="btn btn-primary">
                                                Save changes
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default UserProfile