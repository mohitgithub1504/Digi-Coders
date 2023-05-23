import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";

const BrowseChapters = () => {
  const { apiUrl } = app_config;

  const [chapterList, setChapterList] = useState([]);
  const [masterList, setMasterList] = useState([]);
  const [selCategory, setSelCategory] = useState([]);
  const [selTrainer, setSelTrainer] = useState([]);

  const maxElements = 3;

  const [currentPage, setCurrentPage] = useState(1);

  const trainerList = [
    "Prince Prajapati",
    "Mohit Mishra",
    "Rishabh Agnihotri"
  ];

  const categoryList = ["HTML5", "Python", "CSS", "Web", "Animation", "JavaScript"];

  const fetchUserData = async () => {
    const res = await fetch("http://localhost:5000/chapter/getall");
    console.log(res.status);
    const data = await res.json();
    console.log(data);
    setChapterList(data);
    setMasterList(data);
  };

  const displayChapters = () => {
    return chapterList
      .slice(
        maxElements * (currentPage - 1),
        maxElements * (currentPage - 1) + maxElements
        // currentPage * maxElements,
        // currentPage * maxElements + maxElements
      )
      .map((chapter) => (
        <div className="card shadow-0 border-light rounded-3">
          <div className="card-body">
            <div className="row">
              <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                <div
                  class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-7"
                  data-mdb-ripple-color="light"
                >
                  <img
                    src={apiUrl + "/" + chapter.icon}
                    className="img-fluid"
                    alt=""
                  />
                  <a href="#!">
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                    />
                  </a>
                </div>
              </div>
              <div className="content col-md-6 col-lg-6 col-xl-6">
                <h5>{chapter.title}</h5>

                <div className="mt-1 mb-0 text-muted small">
                  <span>{chapter.category}</span>
                </div>
                <p className="text-truncate mb-4 mb-md-0">
                  {chapter.description}
                </p>
              </div>
              <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                <div className="d-flex flex-row align-items-center mb-1">
                  <h4 className="mb-1 me-1">$13.99</h4>
                  <span className="text-danger">
                    <s>$20.99</s>
                  </span>
                </div>
                <h6 className="text-success">Free shipping</h6>
                <div className="d-flex flex-column mt-4">
                  <NavLink
                    className="btn btn-primary"
                    to={"/user/chapterdetails/" + chapter._id}
                  >
                    View Details
                  </NavLink>
                  <button className="btn btn-primary mt-2" type="button">
                    Add to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ));
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const searchChapterByName = (e) => {
    const val = e.target.value;
    setChapterList(
      masterList.filter((chapter) => (chapter.title.toLowerCase().includes(val.toLowerCase())))
    )
  }
  const searchChapterByTrainer = (e) => {
    const val = e.target.value;
    setChapterList(
      masterList.filter((chapter) => (chapter.trainer.name.toLowerCase().includes(val.toLowerCase())))
    )
  }
  const searchChapterByCategory = (e) => {
    const val = e.target.value;
    setChapterList(
      masterList.filter((chapter) => (chapter.category.toLowerCase().includes(val.toLowerCase())))
    )
  }

  return (
    <div>
      <section className="bg-dark">
        <div
          id="intro"
          className="bg-image"
          style={{
            backgroundImage: "url(/images/background-img3.webp)",
            height: "25rem",
            backgroundSize: "cover",
            backgroundPosition: "50% 65%",
            position: "relative",
          }}
        >
          <div
            className="mask text-white"
            style={{ backgroundColor: "rgba(35, 37, 45, 0.7)" }}
          >
            <div className="container mb-5">
              <p className="display-3 fw-bold text-white text-center mt-4">
                DIGI CODERS
              </p>
              <p className="lead fw-normal text-white text-center px-5">
                DigiCoders is a platform for students to learn and explore new
                technologies. We provide a wide range of courses for students to
                choose from. We have courses for beginner students.
              </p>
              <div className="text-center w-50 mx-auto my-5 ">
                <input
                  type="search"
                  id=""
                  className="form-control"
                  onChange={searchChapterByName}
                  placeholder="Search Courses"
                  style={{
                    fontSize: "20px",
                    width: "100%",
                    borderRadius: "40px",
                    border: "3px solid #29c1fe",
                  }}
                />
              </div>
            </div>

            {/* Drop down Buttons */}
            <div className="d-flex justify-content-center">
              <div className="dropdown mx-2">
                <select onChange={searchChapterByCategory} className=" select form-control-lg" style={{ border: "3px solid #29c1fe" }}>
                  {
                    categoryList.map((category) => (
                      <option value={category}>{category}</option>

                    ))
                  }
                </select>
              </div>

              <div className="dropdown mx-2">
                <select onChange={searchChapterByName} className="select form-control-lg" style={{ border: "3px solid #29c1fe" }}>
                  {
                    trainerList.map((trainer) => (
                      <option value={trainer}>{trainer}</option>
                    ))
                  }
                </select>
              </div>

              <div className="dropdown mx-2">
                <select className="select form-control-lg" style={{ border: "3px solid #29c1fe" }}>
                  <option value="" >A to Z</option>
                </select>

              </div>
            </div>
          </div>
        </div>
      </section >

      <section>
        <div className="container py-5">{displayChapters()}</div>
      </section>
      <div className="container" style={{ backgroundColor: "#fff" }}>
        {/*Section: Content*/}
        <section className="d-md-flex justify-content-md-end">
          <nav aria-label="...">
            <ul className="pagination mt-3">
              <li className="page-item me-2">
                <a
                  className="page-link"
                  type="button"
                  onClick={(e) => setCurrentPage(currentPage - 1)}
                >
                  <i className="fas fa-angles-left" />
                </a>
              </li>
              {Array(Math.ceil(chapterList.length / maxElements))
                .fill(1)
                .map((item, index) => (
                  <li
                    className={`page-item ${currentPage === index + 1 ? "active" : ""
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
              {Math.ceil(chapterList.length / maxElements) - currentPage >
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
    </div >
  );
};

export default BrowseChapters;