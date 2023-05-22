import { useFormik } from "formik";
import React, { useEffect, useState } from 'react';
import * as Yup from "yup";
import Swal from "sweetalert2";
import app_config from "../../config";

const ManageChapter = () => {

  const { apiUrl } = app_config;

  const [chapterList, setChapterList] = useState([]);

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/chapter/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setChapterList(data);
  };

  const displayChapters = () => {
    return (
      <div>
        <table id="dtBasicExample" class="table table-striped table-bordered table-sm" cellspacing="0" width="100%">
          <thead className="table-dark text-center">
            <tr>
              <th class="th-sm">Title</th>
              <th class="th-sm">Icon</th>
              <th class="th-sm">Category</th>
              <th class="th-sm">Description</th>
              <th class="th-sm">Created_at</th>
              <th class="th-sm">Updated_at</th>
              <th class="th-sm" colSpan={2}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              chapterList.map((chapter) => (
                <tr>
                  <td>{chapter.title}</td>
                  <td>{chapter.icon}</td>
                  <td>{chapter.category}</td>
                  <td>{chapter.description}</td>
                  <td>{chapter.created_at}</td>
                  <td>{chapter.updated_at}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="far fa-pen-to-square" />
                    </button>

                  </td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-link btn-rounded btn-sm fw-bold"
                      data-mdb-ripple-color="dark"
                    >
                      <i className="far fa-trash-can" />
                    </button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </div>
    );
  };

  useEffect(() => {
    fetchUserData();
  }, []);



  // const { apiUrl } = app_config;
  const [selImage, setSelImage] = useState(null);

  const [currentTrainer, setCurrentTrainer] = useState(
    JSON.parse(sessionStorage.getItem("trainer"))
  );

  // const ManageChapterSchema = Yup.object().shape({
  //     name: Yup.string()
  //         .min(2, 'Too Short!')
  //         .max(50, 'Too Long!')
  //         .required('Required'),
  // });

  const managechapterForm = useFormik({
    initialValues: {
      trainer: currentTrainer._id,
      title: "",
      description: "",
      category: "",
      icon: "",
    },

    onSubmit: async (values, { setSubmitting }) => {
      values.icon = selImage.name;
      console.log(values);

      const res = await fetch("http://localhost:5000/chapter/add", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(res.status);

      if (res.status === 200) {
        Swal.fire({
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    },
    // validationSchema: ManageChapterSchema,
  });

  const uploadFile = (e) => {
    const file = e.target.files[0];
    const fd = new FormData();
    setSelImage(file);
    fd.append("myfile", file);
    fetch(apiUrl + "/util/uploadfile", {
      method: "POST",
      body: fd,
    }).then((res) => {
      if (res.status === 200) {
        console.log("file uploaded");
      }
    });
  };

  return (
    <>
      {/*Page Header*/}
      <header>
        {/* Background image */}
        <div
          id="intro"
          className="bg-image"
          style={{
            backgroundImage: "url(/images/background-img3.webp)",
            height: 230,
            backgroundSize: "cover",
            backgroundPosition: "50% 65%",
            position: "relative"
          }}
        >
          <div
            className="mask text-white"
            style={{ backgroundColor: "rgba(35, 37, 45, 0.6)" }}
          >
            <div className="container d-flex align-items-center text-center h-100">
              <div className='page-heading'>
                <h1 className="fw-bold mb-3">Manage Chapters</h1>
                <p className='paragraph'>
                  "We'd love to hear from you! Drop us a line and let's start
                  a conversation about how we can help you and your child learn
                  to code."
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>
      {/*Page Header*/}



      <div className="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          type="button"
          className="btn btn-primary"
          data-mdb-toggle="modal"
          data-mdb-target="#staticBackdrop1"
        >
          Add
        </button>
      </div>


      {/* Modal */}
      <div
        className="modal fade"
        id="staticBackdrop1"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel1"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel1">
                Manage Chapter
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-4">
              <form
                className="text-center"
                action="#!"
                onSubmit={managechapterForm.handleSubmit}
              >
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
                    className="form-control rounded-0 mb-4"
                    id="description"
                    rows={3}
                    placeholder="Description.."
                    defaultValue={""}
                    value={managechapterForm.values.description}
                    onChange={managechapterForm.handleChange}
                  />
                </div>

                <label htmlFor="chapter-img" className="btn btn-dark"> <i class="fas fa-upload"></i> Upload Chapter Image</label>
                <input type="file" id="chapter-img" hidden onChange={uploadFile} />
                {/* Send button */}
                <button className="btn btn-primary btn-block mt-5" type="submit">
                  SUBMIT
                </button>
              </form>
              {/* Default form contact */}
            </div>
          </div>
        </div>
      </div>
      {/* Modal */}


      <section>
        <div className="container py-5">{displayChapters()}</div>
      </section>
    </>


  );
};

export default ManageChapter;
