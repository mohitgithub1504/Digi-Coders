import React, { useState } from 'react'
import app_config from '../../config';
import { NavLink } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const UserProfile = () => {

    const { apiUrl } = app_config;

    const [selImage, setSelImage] = useState(null);

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(!show);

    const userprofile = Yup.object().shape({
        name: Yup.string().required('Name is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
        phone: Yup.string().required('Phone Number is Required'),
    });

    const UserProfile = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
    },
    onSubmit: async (values, { setSubmitting }) => {
        console.log(values);
        const res = await fetch(apiUrl + "/user/updateprofile", {
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
                text: "Profile Updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
        } else {
            Swal.fire({
                icon: "error",
                title: "Success!",
                text: "Profile Updated successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
    }
});






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
            <div className="container-xl px-5 my-5">
                <div className="row d-flex justify-content-center ">
                    <div className="col-lg-4 mx-2" style={{ width: "36.5%" }}>
                        <div className="card">
                            <div className="card-body">
                                <div className="d-flex flex-column align-items-center text-center">
                                    <div
                                        class="bg-image profile-picture-container hover-overlay ripple"
                                        data-mdb-ripple-color="light"
                                    >
                                        <img
                                            src="https://bootdey.com/img/Content/avatar/avatar6.png"
                                            alt="Admin"
                                            className="rounded-circle p-1 bg-primary"
                                            style={{ width: "180px", backgroundSize: "cover" }}
                                        />
                                        <div className="camera-icon">
                                            <i className="fas fa-camera fa-lg" />
                                        </div>
                                        <NavLink to="">
                                            <div
                                                className="mask"
                                                data-mdb-toggle="modal"
                                                data-mdb-target="#staticBackdrop4"
                                                style={{ borderRadius: "50%", backgroundColor: "rgb(0 0 0 / 30%)" }}
                                            />
                                        </NavLink>
                                        {/* Modal */}
                                        <div
                                            className="modal fade"
                                            id="staticBackdrop4"
                                            tabIndex={-1}
                                            aria-labelledby="exampleModalLabel4"
                                            aria-hidden="true"
                                        >
                                            <div className="modal-dialog modal-lg d-flex justify-content-center">
                                                <div className="modal-content w-75">
                                                    <div className="modal-header">
                                                        <h3 className="modal-title text-uppercase" id="exampleModalLabel4">
                                                            Update Profile Picture
                                                        </h3>
                                                        <button
                                                            type="button"
                                                            className="btn-close"
                                                            data-mdb-dismiss="modal"
                                                            aria-label="Close"
                                                        />
                                                    </div>
                                                    <div className="modal-body">
                                                        <form>
                                                            <div className='d-flex flex-row align-items-center justify-content-center mb-3'>
                                                                <label htmlFor="chapter-img" className="btn mx-2" style={{ backgroundColor: "#ec0000" }}>
                                                                    {' '}
                                                                    <i class="fas fa-upload"></i> Upload Image
                                                                </label>
                                                                <span className='text-secondary mx-2'>
                                                                    {selImage ? selImage.name : 'No Image Selected'}
                                                                </span>
                                                                <input type="file" id="chapter-img" hidden onChange={uploadFile} />
                                                            </div>
                                                            <div className="modal-footer">
                                                                <button
                                                                    type="button"
                                                                    className="btn btn-primary"
                                                                    data-mdb-dismiss="modal"
                                                                    style={{ borderRadius: "10px", marginLeft: "0px" }}
                                                                >
                                                                    Close
                                                                </button>
                                                                <button
                                                                    className="btn btn-primary"
                                                                    type="submit"
                                                                    style={{ borderRadius: "10px", marginLeft: "10px" }}
                                                                >
                                                                    Save
                                                                    {/* <i className="fas fa-arrow-right-to-bracket" /> */}
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Modal */}
                                    </div>
                                    <div className="mt-3">
                                        <h4>Mohit Mishra</h4>
                                        <p className="text-secondary">Full Stack Developer</p>
                                    </div>
                                </div>
                                <hr className="my-4" />
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            Name
                                        </h6>
                                        <span className="text-secondary">Mohit Mishra</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            Email
                                        </h6>
                                        <span className="text-secondary">mohit@gmail.com</span>
                                    </li>
                                    <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                                        <h6 className="mb-0">
                                            Mobile No.
                                        </h6>
                                        <span className="text-secondary">+91 9260964544</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-xl-7 mx-2">
                        {/* Account details card*/}
                        <div className="card mb-4">
                            <div className="card-header text-center fw-bold text-uppercase mb-4" style={{ fontSize: "30px", letterSpacing: "2px" }}>
                                Update Your Profile
                            </div>
                            <div className="card-body">
                                <form
                                    className="mx-md-5 text-black"
                                    onSubmit={UserProfile.handleSubmit}
                                >
                                    <div className="form-group has-icon mb-4">
                                        <i className="fas fa-user fa-lg form-control-icon" />
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control form-control-lg"
                                            placeholder="Name"
                                            value={UserProfile.values.name}
                                            onChange={UserProfile.handleChange}/>
                                             <span className='text-danger'>{UserProfile.errors.name}</span>
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
                                            value={UserProfile.values.email}
                                            onChange={UserProfile.handleChange}
                                        />
                                        <span className='text-danger' >{UserProfile.errors.email}</span>
                                    </div>

                                    <div className="form-group has-icon mb-4">
                                        <i className="fas fa-key fa-lg form-control-icon" />
                                        <div class="d-grid d-md-flex justify-content-md-end">
                                            <span
                                                className='form-control-eye'
                                                onClick={handleShow}
                                            >
                                                {show ? <i class="far fa-eye" style={{ color: "#c5c5c5" }} /> : <i class="far fa-eye-slash" style={{ color: "#c5c5c5" }} />}
                                            </span>
                                        </div>
                                        <input
                                            type={show ? "text" : "password"}
                                            id="password"
                                            name="password"
                                            autoComplete="off"
                                            className="form-control form-control-lg"
                                            placeholder="Password"
                                          value={UserProfile.values.password}
                                          onChange={UserProfile.handleChange}
                                        />
                                        <span className='text-danger'>{UserProfile.errors.password}</span>
                                    </div>
                                    <div className="form-group has-icon mb-4">
                                        <i className="fas fa-mobile-screen-button fa-lg form-control-icon" />
                                        <input
                                            type="text"
                                            id="mobile_no"
                                            name="mobile_no"
                                            className="form-control form-control-lg"
                                            placeholder="Mobile Number"
                                          value={UserProfile.values.mobile_no}
                                          onChange={UserProfile.handleChange}
                                        /> 
                                        <span className='text-danger'>{UserProfile.errors.name}</span>
                                    </div>

                                    {/* <div className='d-flex flex-row align-items-center mx-1 mb-4'>
                                        <label htmlFor="chapter-img" className="btn btn-primary">
                                            {' '}
                                            <i class="fas fa-upload"></i> Upload Image
                                        </label>
                                        <span className='text-warning mx-3'>
                                            {selImage ? selImage.name : 'No Image Selected'}
                                        </span>
                                        <input type="file" id="chapter-img" hidden onChange={uploadFile} />
                                    </div> */}

                                    <div className="pt-1 pb-1 ">
                                        <button
                                            className="btn btn-primary btn-block mb-4"
                                            type="submit"
                                            style={{ borderRadius: "10px", marginLeft: "0px" }}
                                        >
                                            Update &nbsp;
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
    )
}

export default UserProfile