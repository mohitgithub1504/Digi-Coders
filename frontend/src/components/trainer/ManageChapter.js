import { useFormik } from 'formik';
import React, { useState } from 'react'
import * as Yup from 'yup';
import Swal from 'sweetalert2';

const ManageChapter = () => {

    const [currentTrainer, setCurrentTrainer] = useState(JSON.parse(sessionStorage.getItem('trainer')));

    // const ManageChapterSchema = Yup.object().shape({
    //     name: Yup.string()
    //         .min(2, 'Too Short!')
    //         .max(50, 'Too Long!')
    //         .required('Required'),
    // });

    const managechapterForm = useFormik({
        initialValues: {
            trainer: currentTrainer._id,
            title: '',
            description: '',
            category: '',
            icon: ''
        },
        onSubmit: async (values, { setSubmitting }) => {
            console.log(values);

            const res = await fetch('http://localhost:5000/chapter/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            console.log(res.status);

            if (res.status === 200) {
                Swal.fire({
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            }
        },
        // validationSchema: ManageChapterSchema,

    });

    return (
        <div className="container my-5 py-5 z-depth-1">
            {/*Section: Content*/}
            <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                    {/*Grid column*/}
                    <div className="col-md-6">
                        {/* Default form contact */}
                        <form className="text-center" action="#!" onSubmit={managechapterForm.handleSubmit}>
                            <h3 className="font-weight-bold mb-4">Manage Chapter</h3>
                            {/* Name */}
                            <input
                                type="text"
                                id="title"
                                className="form-control mb-4"
                                placeholder="Title"
                                value={managechapterForm.values.title}
                                onChange={managechapterForm.handleChange}
                            />
                            <input
                                type="text"
                                id="category"
                                className="form-control mb-4"
                                placeholder="Category"
                                value={managechapterForm.values.category}
                                onChange={managechapterForm.handleChange}
                            />
                            {/* <input
                                type="file"
                                id="icon"
                                className="form-control mb-4"
                                placeholder="Chapter Icone"
                                value={managechapterForm.values.icon}
                                onChange={managechapterForm.handleChange}
                            /> */}
                            {/* Description */}
                            <div className="form-group">
                                <textarea
                                    className="form-control rounded-0"
                                    id="description"
                                    rows={3}
                                    placeholder="Description.."
                                    defaultValue={""}
                                    value={managechapterForm.values.description}
                                    onChange={managechapterForm.handleChange}
                                />

                            </div>
                            {/* Send button */}
                            <button className="btn btn-primary btn-block mt-5" type="submit">
                                SUBMIT
                            </button>
                        </form>
                        {/* Default form contact */}
                    </div>
                    {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </section>
            {/*Section: Content*/}
        </div>

    )
}

export default ManageChapter;