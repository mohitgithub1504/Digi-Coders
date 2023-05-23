import React from 'react'

const Course = () => {
    return (
        <div>
            <>
                {/*Page Header*/}
                <header className='mb-10'>
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
                                    <h1 className="fw-bold mb-3">Our Courses</h1>
                                    <p className='paragraph'>
                                        "Give Your Child the Gift of Coding with Our Exciting and
                                        Engaging Courses! Our Curriculum is Designed to Help Kids
                                        Develop Strong Problem-Solving and Logical Reasoning Skills,
                                        While Building a Foundation for a Lifetime of Learning."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background image */}
                </header>
                {/*Page Header*/}
            </>

            {/* Our Course*/}
            <div className='mb-10'>
                <div data-draggable="true" style={{ position: "relative" }}>
                    {/**/}
                    {/**/}
                    <section draggable="false" className="container" data-v-271253ee="">
                        <section>
                            <div className="row text-center gx-lg-5 mb-6">
                                {/* First column */}
                                <div className="col-lg-4 col-md-12 mb-lg-0 hover-zoom">
                                    <div className="card">
                                        <div
                                            class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-6"
                                            data-mdb-ripple-color="light"
                                        >
                                            <img
                                                src="/images/course1.jpg"
                                                className="img-fluid"
                                            />
                                            <a href="/user/browsechapters">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-3">
                                                Age 6+
                                            </h6>
                                            <h4 className="card-tittle mb-3">
                                                <strong>Game Development</strong>
                                            </h4>
                                            <ul className="list-unstyled d-flex justify-content-center text-warning">
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm" />
                                                </li>
                                            </ul>

                                            {/* Divider here */}
                                            <hr class="hr hr-blurry"></hr>

                                            <a href="/user/browsechapters" className="btn btn-primary">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* First column */}
                                {/* Second column */}
                                <div className="col-lg-4 col-md-12 mb-lg-0 hover-zoom">
                                    <div className="card">
                                        <div
                                            class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-6"
                                            data-mdb-ripple-color="light"
                                        >
                                            <img
                                                src="/images/course2.jpg"
                                                className="img-fluid"
                                            />
                                            <a href="/user/browsechapters">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-3">
                                                Age 6+
                                            </h6>
                                            <h4 className="card-tittle fw-bold mb-3">
                                                <strong>Web Development</strong>
                                            </h4>
                                            <ul className="list-unstyled d-flex justify-content-center text-warning">
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm" />
                                                </li>
                                            </ul>

                                            {/* Divider here */}
                                            <hr class="hr hr-blurry"></hr>

                                            <a href="/user/browsechapters" className="btn btn-primary">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Second column */}
                                {/* Third column */}
                                <div className="col-lg-4 col-md-12 mb-lg-0 hover-zoom">
                                    <div className="card">
                                        <div
                                            class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-6"
                                            data-mdb-ripple-color="light"
                                        >
                                            <img
                                                src="/images/course3.jpg"
                                                className="img-fluid"
                                            />
                                            <a href="/main/chapter">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-3">
                                                Age 6+
                                            </h6>
                                            <h4 className="card-tittle fw-bold mb-3">
                                                <strong>App Development</strong>
                                            </h4>
                                            <ul className="list-unstyled d-flex justify-content-center text-warning">
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm" />
                                                </li>
                                            </ul>

                                            {/* Divider here */}
                                            <hr class="hr hr-blurry"></hr>

                                            <a href="#!" className="btn btn-primary">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Third column */}
                            </div>

                            <div className="row text-center gx-lg-5">
                                {/* First column */}
                                <div className="col-lg-4 col-md-12 mb-lg-0 hover-zoom">
                                    <div className="card">
                                        <div
                                            class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-6"
                                            data-mdb-ripple-color="light"
                                        >
                                            <img
                                                src="/images/course4.jpg"
                                                className="img-fluid"
                                            />
                                            <a href="/main/chapter">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-3">
                                                Age 6+
                                            </h6>
                                            <h4 className="card-tittle fw-bold mb-3">
                                                <strong>Artificial Intelligence</strong>
                                            </h4>
                                            <ul className="list-unstyled d-flex justify-content-center text-warning">
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm" />
                                                </li>
                                            </ul>

                                            {/* Divider here */}
                                            <hr class="hr hr-blurry"></hr>

                                            <a href="#!" className="btn btn-primary">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* First column */}
                                {/* Second column */}
                                <div className="col-lg-4 col-md-12 mb-lg-0 hover-zoom">
                                    <div className="card">
                                        <div
                                            class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-6"
                                            data-mdb-ripple-color="light"
                                        >
                                            <img
                                                src="/images/course5.jpg"
                                                className="img-fluid"
                                            />
                                            <a href="/main/chapter">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-3">
                                                Age 6+
                                            </h6>
                                            <h4 className="card-tittle fw-bold mb-3">
                                                <strong>Internet Of Things</strong>
                                            </h4>
                                            <ul className="list-unstyled d-flex justify-content-center text-warning">
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm" />
                                                </li>
                                            </ul>

                                            {/* Divider here */}
                                            <hr class="hr hr-blurry"></hr>

                                            <a href="#!" className="btn btn-primary">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Second column */}
                                {/* Third column */}
                                <div className="col-lg-4 col-md-12 mb-lg-0 hover-zoom">
                                    <div className="card">
                                        <div
                                            class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-6"
                                            data-mdb-ripple-color="light"
                                        >
                                            <img
                                                src="/images/course6.jpg"
                                                className="img-fluid"
                                            />
                                            <a href="/main/chapter">
                                                <div
                                                    className="mask"
                                                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                />
                                            </a>
                                        </div>
                                        <div className="card-body">
                                            <h6 className="mb-3">
                                                Age 6+
                                            </h6>
                                            <h4 className="card-tittle fw-bold mb-3">
                                                <strong>Python</strong>
                                            </h4>
                                            <ul className="list-unstyled d-flex justify-content-center text-warning">
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="fas fa-star fa-sm" />
                                                </li>
                                                <li>
                                                    <i className="far fa-star fa-sm" />
                                                </li>
                                            </ul>

                                            {/* Divider here */}
                                            <hr class="hr hr-blurry"></hr>

                                            <a href="#!" className="btn btn-primary">
                                                Read more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                {/* Third column */}
                            </div>
                        </section>
                    </section>
                    {/**/}
                </div>
            </div>
            {/* Our Course*/}
        </div>
    )
}

export default Course