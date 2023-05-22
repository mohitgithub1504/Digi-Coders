import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Swal from "sweetalert2";
import app_config from "../../config";

const ManageChapter = () => {
  const { apiUrl } = app_config;

  const itemPerPage = 5;

  const [currentPage, setCurrentPage] = useState(1);

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
        <div className="container" style={{ backgroundColor: "#aedff3" }}>
          {/*Section: Content*/}
          <section className="d-md-flex justify-content-md-end p-4">
            {/* <h3 className="font-weight-bold text-white text-uppercase">
            Chapter Manager
          </h3> */}
            <button
              type="button"
              className="btn btn-primary btn-rounded"
              data-mdb-toggle="modal"
              data-mdb-target="#staticBackdrop1"
            >
              <i className="fas fa-plus me-2" />
              Add New Chapters
            </button>
          </section>
          {/*Section: Content*/}
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

                  <label htmlFor="chapter-img" className="btn btn-dark">
                    {" "}
                    <i class="fas fa-upload"></i> Upload Chapter Image
                  </label>
                  <input
                    type="file"
                    id="chapter-img"
                    hidden
                    onChange={uploadFile}
                  />
                  {/* Send button */}
                  <button
                    className="btn btn-primary btn-block mt-5"
                    type="submit"
                  >
                    SUBMIT
                  </button>
                </form>
                {/* Default form contact */}
              </div>
            </div>
          </div>
        </div>
        {/* Modal */}

        <table
          id="dtBasicExample"
          class="table table-striped table-bordered table-sm table-info border-light text-center"
          cellspacing="0"
          width="100%"
        >
          <thead className="table-dark border-light text-center">
            <tr>
              <th class="th-sm">Title</th>
              <th class="th-sm">Icon</th>
              <th class="th-sm">Category</th>
              <th class="th-sm">Description</th>
              <th class="th-sm">Created_at</th>
              <th class="th-sm">Updated_at</th>
              <th class="th-sm" colSpan={2}>
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {chapterList
              .slice(
                itemPerPage * (currentPage - 1),
                itemPerPage * currentPage + itemPerPage
              )
              .map((chapter) => (
                <tr>
                  <td className="align-middle">{chapter.title}</td>
                  <td className="align-middle">{chapter.icon}</td>
                  <td className="align-middle">{chapter.category}</td>
                  <td className="align-middle">{chapter.description}</td>
                  <td className="align-middle">{chapter.created_at}</td>
                  <td className="align-middle">{chapter.updated_at}</td>
                  <td className="align-middle">
                    <button type="button" class="table-btn info">
                      <i className="fas fa-pen" />
                    </button>
                  </td>
                  <td className="align-middle">
                    <button type="button" class="table-btn danger">
                      <i className="far fa-trash-can" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <div className="container" style={{ backgroundColor: "#fff" }}>
          {/*Section: Content*/}
          <section className="d-md-flex justify-content-md-end">
            <nav aria-label="...">
              <ul className="pagination mt-3">
                <li className="page-item me-2">
                  <a className="page-link">
                    <i className="fas fa-angles-left" />
                  </a>
                </li>
                {Array(Math.ceil(chapterList.length / itemPerPage))
                  .fill(1)
                  .map((item, index) => (
                    <li
                      className={`page-item ${
                        currentPage === index + 1 ? "active" : ""
                      }`}
                      aria-current="page"
                    >
                      <a
                        className="page-link"
                        type="button"
                        onClick={(e) => setCurrentPage(index + 1)}
                      >
                        {index + 1}{" "}
                        <span className="visually-hidden">(current)</span>
                      </a>
                    </li>
                  ))}
                {Math.ceil(chapterList.length / itemPerPage) - currentPage >
                  0 && (
                  <li className="page-item">
                    <a
                      className="page-link"
                      type="button"
                      onClick={(e) => setCurrentPage(currentPage + 1)}
                    >
                      <i className="fas fa-angles-right" />
                    </a>
                  </li>
                )}
              </ul>
            </nav>
          </section>
          {/*Section: Content*/}
        </div>
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
          className="bg-image mb-5"
          style={{
            backgroundImage: "url(/images/background-img3.webp)",
            height: 230,
            backgroundSize: "cover",
            backgroundPosition: "50% 65%",
            position: "relative",
          }}
        >
          <div
            className="mask text-white"
            style={{ backgroundColor: "rgba(35, 37, 45, 0.6)" }}
          >
            <div className="container d-flex align-items-center justify-content-center h-100">
              <div className="page-heading">
                <h1 className="fw-bold mb-3">Manage Chapters</h1>
                {/* <p className='paragraph'>
                  "We'd love to hear from you! Drop us a line and let's start
                  a conversation about how we can help you and your child learn
                  to code."
                </p> */}
              </div>
            </div>
          </div>
        </div>
        {/* Background image */}
      </header>
      {/*Page Header*/}

      <section>
        <div className="container py-5">{displayChapters()}</div>
      </section>
    </>
  );
};

export default ManageChapter;
