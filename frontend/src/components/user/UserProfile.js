import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';
import { motion } from "framer-motion";
import app_config from '../../config';
// import { useParams } from 'react-router-dom';


const UserProfile = () => {
    // const { id } = useParams();

    // const [userDetails, setuserDetails] = useState(null);

    const { apiUrl } = app_config;
    const userprofileSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is Required'),
        skills: Yup.string()
            .required('Skills is Required'),
        certificate: Yup.string()
            .required('Certificate is Required'),
        email: Yup.string().email('Invalid email').required('Email is Required'),
    });

    const userprofileForm = useFormik({
        initialValues: {
            name: '',
            skills: '',
            certificate: '',
            email: '',
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);


            const res = await fetch(apiUrl + '/user/add', {
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
                    title: "Congratulations",
                    text: "Profile Updated Successfully",
                    icon: 'success',
                    showConfirmButton: false,
                    timer: 1500
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
        validationSchema: userprofileSchema,
    });
    // const fetchuserData = async () => {
    //     const res = await fetch(apiUrl + "/user/getbyid/" + id);
    //     console.log(res.status);
    //     const data = await res.json();
    //     console.log(data);
    //     setuserDetails(data);
    // };

    // useEffect(() => {
    //     fetchuserData();
    // }, []);
    // const displayuserDetails = () => {
    //     if (userDetails !== null) {
            return (
                <motion.div
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0.5, x: -300 }}
                    transition={{ type: "spring" }}
                    className="vid-manage-bg"
                    style={{
                        backgroundImage: `url('/images/bg-animation-img2.jpg`
                    }}
                >
                    {/*Student Signup Form*/}
                    <section className="form"
                    >
                        <div className="">
                            <div className="row g-0">
                                <div className="col-lg-6 curve">
                                    <div className="pt-5" style={{ marginLeft: "285px", }}>
                                        <h2 className="my-1">My Profile</h2>
                                    </div>

                                    <div className="py-2">
                                        <div className="d-flex">
                                            <div className="flex-fill mb-2" style={{ marginLeft: '15rem', marginTop: '5rem' }}>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <h5 className="fw-bold mx-3">
                                                            <strong>ID - </strong>
                                                        </h5>
                                                    </div>
                                                    <div class="col-8">
                                                        <p className="text-dark">Hello</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <h5 className="fw-bold mx-3">
                                                            <strong>Name - </strong>
                                                        </h5>
                                                    </div>
                                                    <div class="col-8">
                                                        <p className="text-dark">hello</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <h5 className="fw-bold mx-3">
                                                            <strong>Email - </strong>
                                                        </h5>
                                                    </div>
                                                    <div class="col-8">
                                                        <p className="text-dark">hello</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-4">
                                                        <h5 className="fw-bold mx-3">
                                                            <strong>Course - </strong>
                                                        </h5>
                                                    </div>
                                                    <div class="col-8">
                                                        <p className="text-dark">hello</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="card-body p-md-5 mx-md-5">
                                        <div className="text-center mb-5">
                                            <h3 className="my-5" style={{ marginLeft: "5%" }}>
                                                Update Profile
                                            </h3>
                                        </div>
                                        <form
                                            className="mx-md-5 text-black"
                                            onSubmit={userprofileForm.handleSubmit}
                                        >
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                <div className="flex-fill mb-0">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        className="form-control form-control-lg"
                                                        placeholder='Name'
                                                        value={userprofileForm.values.name}
                                                        onChange={userprofileForm.handleChange}
                                                    />
                                                    <span className='text-danger'>{userprofileForm.errors.name}</span>
                                                </div>
                                            </div>
                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                                                <div className="flex-fill mb-0">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        autoComplete='off'
                                                        className="form-control form-control-lg"
                                                        placeholder='Email'
                                                        value={userprofileForm.values.email}
                                                        onChange={userprofileForm.handleChange}
                                                    />
                                                    <span className='text-danger' >{userprofileForm.errors.email}</span>
                                                </div>
                                            </div>
                                            <div className="pt-1 mx-4 pb-1 ">
                                                <button
                                                    className="btn btn-primary btn-block mb-5"
                                                    type="submit"
                                                    style={{ borderRadius: "10px" }}
                                                >
                                                    Update Profile
                                                </button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/*Student Signup Form*/}
                </motion.div>
            )
        }

 
export default UserProfile