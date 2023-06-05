import React, { useState } from 'react'
import app_config from '../../config';
import { NavLink } from 'react-router-dom';

const TrainerProfile = () => {

    const { apiUrl } = app_config;

    const [selImage, setSelImage] = useState(null);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const uploadFile = (e) => {
        const file = e.target.files[0];
        const fd = new FormData();
        setSelImage(file);
        fd.append('myfile', file);
        fetch(apiUrl + '/util/uploadfile', {
            method: 'POST',
            body: fd
        }).then((res) => {
            if (res.status === 200) {
                console.log('file uploaded');
            }
        });
    };


    return (
        <div>

            <div className="container my-5">
                <div className="row d-flex flex-row align-items-center">

                    <div className="col-md-7 col-lg-4 mb-5 mb-lg-0">
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="account" role="tabpanel">
                                <div className="card">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">User Profile</h5>
                                        <NavLink to={''} style={{ color: "#ff0000", fontWeight: "bolder" }}>
                                            <i className="fas fa-trash-can fa-lg mx-2" style={{ color: "#ff0000" }} />
                                            Delete Account
                                        </NavLink>
                                    </div>

                                    <div className="card-body">
                                        
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
                                            

                                                <div className="mb-4">
                                                    <div className="text-center">
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
                                <div className="card mt-5">
                                    <div className="card-header">
                                        <h5 className="card-title mb-0">Update Profile</h5>
                                    </div>
                                    <div className="card-body">
                                        <form
                                            className="mx-md-5 text-black"
                                        //   onSubmit={trainersignupForm.handleSubmit}
                                        >
                                            <div className="form-group has-icon mb-4">
                                                <i className="fas fa-user fa-lg form-control-icon" />
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    className="form-control form-control-lg"
                                                    placeholder="Name"
                                                //   value={trainersignupForm.values.name}
                                                //   onChange={trainersignupForm.handleChange}
                                                />
                                                {/* <span className='text-danger'>{trainersignupForm.errors.name}</span> */}
                                            </div>

                                            <div className="form-group has-icon mb-4">
                                                <i className="fas fa-envelope fa-lg form-control-icon" />
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    autoComplete="off"
                                                    className="form-control form-control-lg"
                                                    placeholder="Email"
                                                //   value={trainersignupForm.values.email}
                                                //   onChange={trainersignupForm.handleChange}
                                                />
                                                {/* <span className='text-danger' >{trainersignupForm.errors.email}</span> */}
                                            </div>

                                            <div className="form-group has-icon mb-4">
                                                <i className="fas fa-key fa-lg form-control-icon" />
                                                <div class="d-grid d-md-flex justify-content-md-end">
                                                    <span
                                                        className='form-control-eye'
                                                        onClick={handleShow}
                                                    >
                                                        {show ? <i class="far fa-eye" /> : <i class="far fa-eye-slash" />}
                                                    </span>
                                                </div>
                                                <input
                                                    type={show ? "text" : "password"}
                                                    id="password"
                                                    name="password"
                                                    autoComplete="off"
                                                    className="form-control form-control-lg"
                                                    placeholder="Password"
                                                //   value={trainersignupForm.values.password}
                                                //   onChange={trainersignupForm.handleChange}
                                                />
                                                {/* <span className='text-danger'>{trainersignupForm.errors.password}</span> */}
                                            </div>
                                            <div className="form-group has-icon mb-4">
                                                <i className="fas fa-mobile-screen-button fa-lg form-control-icon" />
                                                <input
                                                    type="text"
                                                    id="mobile_no"
                                                    name="mobile_no"
                                                    className="form-control form-control-lg"
                                                    placeholder="Mobile Number"
                                                //   value={trainersignupForm.values.mobile_no}
                                                //   onChange={trainersignupForm.handleChange}

                                                />
                                                {/* <span className='text-danger'>{studentsignupForm.errors.name}</span> */}
                                            </div>

                                            <div className="form-group has-icon mb-4">
                                                <i className="fas fa-gear fa-lg form-control-icon" />
                                                <input
                                                    type="text"
                                                    id="skills"
                                                    autoComplete='off'
                                                    className="form-control form-control-lg"
                                                    Placeholder='Skills'
                                                // value={trainersignupForm.values.skills}
                                                // onChange={trainersignupForm.handleChange}
                                                />
                                                {/* <span className='text-danger'>{trainersignupForm.errors.skills}</span> */}
                                            </div>

                                            <div className="form-group has-icon mb-4">
                                                <i className="fas fa-award fa-lg form-control-icon" />
                                                <input
                                                    type="text"
                                                    id="certificate"
                                                    autoComplete='off'
                                                    className="form-control form-control-lg"
                                                    placeholder='Certificate'
                                                // value={trainersignupForm.values.certificate}
                                                // onChange={trainersignupForm.handleChange}
                                                />
                                                {/* <span className='text-danger'>{trainersignupForm.errors.certificate}</span> */}
                                            </div>


                                            <div className='d-flex flex-row align-items-center mx-1 mb-4'>
                                                <label htmlFor="chapter-img" className="btn btn-primary">
                                                    {' '}
                                                    <i class="fas fa-upload"></i> Upload Image
                                                </label>
                                                <span className='text-warning mx-3'>
                                                    {selImage ? selImage.name : 'No Image Selected'}
                                                </span>
                                                <input type="file" id="chapter-img" hidden onChange={uploadFile} />
                                            </div>

                                            <div className="pt-1 pb-1 ">
                                                <button
                                                    className="btn btn-primary btn-block mb-5"
                                                    type="submit"
                                                    style={{ borderRadius: "10px", marginLeft: "0px" }}
                                                >
                                                    Signup &nbsp;
                                                    <i className="fas fa-arrow-right-to-bracket" />
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


        </div>
    )
}

export default TrainerProfile