import React from 'react'

const Home = () => {
  return (

    <div>

      {/* Header */}
      <>
        <header>
          {/* Background image */}
          <div
            className="p-5 mb-10 text-center bg-image"
            style={{
              backgroundImage: 'url("/images/banner.gif")',
              height: 600,
              backgroundSize: "cover",
              backgroundPosition: "50% 40%",
              backgroundColor: "rgba(0, 0, 0, 0)"
            }}
          >
          </div>
          {/* Background image */}
        </header>
      </>
      {/* Header */}

      {/* coding for kids */}
      <>
        <div className="container mb-8">
          {/* Section */}
          <section>
            <div className='heading'>
              <h2 className="mt-5 mb-3 text-center display-3">
                <span>Services we Provide</span>
              </h2>
            </div>
            <div className='sub-heading'>
              <h4 className="mb-8 text-center">
                <span>Let us unlock your coding potential</span>
              </h4>
            </div>
            {/* Grid row */}
            <div className="row">
              {/* Grid column - 1 */}
              <div className="col-lg-4 mb-lg-0">
                <div className="card rounded-7 text-center text-white" style={{ backgroundColor: '#29c1fe' }}>
                  <div className="card-body">
                    <p className="mt-4 pt-2">
                      <i className="far fa-clock fa-4x" />
                    </p>
                    <h5 className="font-weight-normal text-white my-4 py-2">
                      Prepare Them For Future
                    </h5>
                    <p className="mb-4">
                      In today's digital age, coding is becoming an essential skill for many jobs.
                      By learning to code at a young age, kids are better prepared for the future
                      and have a competitive edge in the job market.
                    </p>
                  </div>
                </div>
              </div>
              {/* Grid column -1 */}
              {/* Grid column - 2 */}
              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card rounded-7 text-center">
                  <div className="card-body">
                    <p className="mt-4 pt-2">
                      <i className="fas fa-gears fa-4x grey-text" />
                    </p>
                    <div className='card-heading'>
                      <h5 className="font-weight-normal my-4 py-2">
                        Enhances Logical Thinking
                      </h5>
                    </div>
                    <p className="text-muted mb-4">
                      Coding helps kids to develop logical thinking skills. They learn to organize
                      their thoughts and break down complex problems into simpler components. This
                      skill is useful not only in coding but also in other areas of life.
                    </p>
                  </div>
                </div>
              </div>
              {/* Grid column - 2 */}
              {/* Grid column - 3 */}
              <div className="col-lg-4 mb-lg-0 mb-4">
                <div className="card rounded-7 text-center text-white" style={{ backgroundColor: '#000' }}>
                  <div className="card-body">
                    <p className="mt-4 pt-2">
                      <i className="far fa-lightbulb fa-4x" />
                    </p>
                    <h5 className="font-weight-normal text-white my-4 py-2">
                      Develops Problem-Solving Skills
                    </h5>
                    <p className="mb-4">
                      Learning to code helps kids to develop problem-solving skills, as they have
                      to break down a problem into smaller components and then find a way to solve
                      them using code.
                    </p>
                  </div>
                </div>
              </div>
              {/* Grid column - 3 */}
            </div>
            {/* Grid row */}
          </section>
          {/* Section */}
        </div>
      </>
      {/* coding for kids */}

      {/* About Us */}
      <>
        <div className='mb-7'>
          <div style={{ display: "none" }} />
          <div>
            <div data-draggable="true" style={{ position: "relative" }}>
              {/**/}
              {/**/}
              <section
                draggable="false"
                className="overflow-hidden pt-0"
                data-v-271253ee=""
              >
                <section>
                  {" "}
                  {/* Jumbotron */}
                  <div className="py-2 text-center" style={{ backgroundColor: '#f6feff' }}>
                    <div className="container pb-md-5">
                      <div className="row d-flex justify-content-center">
                        <div className="header-text col-lg-10">
                          <div className='heading'>
                            <h2 className="mt-5 mb-3 display-3">
                              <span>Why Choose Us?</span>
                            </h2>
                          </div>
                          <div className='sub-heading'>
                            <h4 className="mb-6">
                              <span>Innovative Learning Approach</span>
                            </h4>
                          </div>
                          <div className='content'>
                            <p className="mb-6">
                              <span>At Digi Coders, we believe that every child has the potential
                                to become a creator, innovator, and problem-solver. That's why
                                we've created a fun and engaging platform for young coders to
                                learn, create and explore the world of coding. Our program is
                                designed to empower kids to unleash their creativity, build
                                their own projects, and develop essential coding skills that
                                will set them up for success in the future. With our experienced
                                instructors, innovative curriculum, and supportive community,
                                we're here to help kids discover their passion for coding and
                                bring their ideas to life.</span>
                            </p>
                          </div>
                          <a
                            className="btn btn-primary py-3 px-5 mb-5 mb-md-3 me-md-2"
                            href="/main/signup"
                            role="button"
                            aria-controls="#picker-editor"
                          >
                            Get Started
                          </a>{" "}
                          <a
                            className="btn btn-primary py-3 px-5 mb-5 mb-md-3 me-md-2"
                            href="/main/about"
                            role="button"
                            aria-controls="#picker-editor"
                          >
                            Learn more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* Jumbotron */}
                </section>
              </section>
              {/**/}
            </div>
          </div>
        </div>
      </>
      {/* About Us */}

      {/* Our Course*/}
      <div className='mb-10'>
        <div data-draggable="true" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container" data-v-271253ee="">
            <section>
              <div className='heading'>
                <h2 className="mb-3 text-center display-3">
                  <span>Our Popular Courses</span>
                </h2>
              </div>
              <div className='sub-heading'>
                <h4 className="mb-8 text-center">
                  <span>Discover a world of coding with our courses</span>
                </h4>
              </div>
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
                        src="/images/course2.jpg"
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

      {/* Start your coding journey*/}
      <>
        <div className='mb-10'>
          <div style={{ display: "none" }} />
          <div>
            <div data-draggable="true" style={{ position: "relative" }}>
              {/**/}
              {/**/}
              <section
                draggable="false"
                className="overflow-hidden pt-0"
                data-v-271253ee=""
              >
                <section className="overflow-hidden">
                  {" "}
                  {/* Background image */}
                  <div
                    className="px-4 py-5 px-md-5 text-center bg-image"
                    style={{
                      backgroundImage: 'url("/images/background-img1.jpg")',
                      height: 450,
                      backgroundSize: "cover",
                      backgroundPosition: "50% 50%",
                      backgroundAttachment: "fixed",
                      position: "relative"
                    }}
                    aria-controls="#picker-editor"
                  >
                    <div
                      className="mask"
                      style={{ backgroundColor: "rgba(35, 37, 45, 0.6)" }}
                    >
                      <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                          <div className="col-lg-10">
                            <div className="content pb-5">
                              <h1 className="mt-5 mb-6 display-3">
                                {" "}
                                <span>Start your coding journey today and make your dreams a reality!</span> <br />{" "}
                                {/* <span className="">and</span> <br />{" "}
                                <span className="">make your dreams a reality!&nbsp;</span>{" "} */}
                              </h1>{" "}
                              <a
                                className="btn btn-primary py-3 px-5 mb-5 mb-md-3 me-md-2"
                                href="/main/signup"
                                role="button"
                                aria-controls="#picker-editor"
                              >
                                Get Started
                              </a>{" "}
                              <a
                                className="btn btn-primary py-3 px-5 mb-5 mb-md-3 me-md-2"
                                href="/main/about"
                                role="button"
                                aria-controls="#picker-editor"
                              >
                                Learn more
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className=""
                    style={{
                      height: 30,
                      marginTop: "-30px",
                      transform: "scale(2)",
                      transformOrigin: "top center",
                      color: "#fff"
                    }}
                  >
                  </div>{" "}
                  {/* Background image */}
                </section>
              </section>
              {/**/}
            </div>
          </div>
        </div>
      </>
      {/* Start your coding journey*/}

      {/* Why Coding Is Important */}
      <div className='mb-10'>
        <div data-draggable="true" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section
            draggable="false"
            className="container"
            data-v-271253ee=""
          >
            <section>
              <div className='heading'>
                <h2 className="mb-3 text-center display-3">
                  <span>Why Kids Should Learn to Code</span>
                </h2>
              </div>
              <div className='sub-heading'>
                <h4 className="mb-8 text-center">
                  <span>Coding : the language of the future</span>
                </h4>
              </div>

              {/* row - 1 */}
              <div className="row gx-lg-5 mb-5 align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  {" "}
                  <img
                    src="/images/img4.jpg"
                    className="w-100 shadow-4-strong rounded-7 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <div className="content col-md-6 mb-4 mb-md-0">
                  <h4 className="fw-bold mb-3">
                    <strong>Prepares Them for the Future</strong>
                  </h4>
                  <p className="align-items-justify mb-4">
                    In today's digital age, coding is becoming an essential skill
                    for many jobs. By learning to code at a young age, kids are
                    better prepared for the future and have a competitive edge in
                    the job market.
                  </p>
                  <a
                    className="btn btn-primary"
                    href="/main/about"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* row - 1 */}

              {/* row - 2 */}
              <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  {" "}
                  <img
                    src="/images/img7.jpg"
                    className="w-100 shadow-4-strong rounded-7 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <div className="content col-md-6 mb-4 mb-md-0">
                  <h4 className="fw-bold mb-3">
                    <strong>Enhances Logical Thinking</strong>
                  </h4>
                  <p className="align-items-justify mb-4">
                    Coding helps kids to develop logical thinking skills. They learn
                    to organize their thoughts and break down complex problems into
                    simpler components. This skill is useful not only in coding but
                    also in other areas of life.
                  </p>{" "}
                  <a
                    className="btn btn-primary"
                    href="/main/about"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* row - 2 */}

              {/* row - 3 */}
              <div className="row gx-lg-5 mb-5 align-items-center">
                <div className="col-md-6 mb-4 mb-md-0">
                  {" "}
                  <img
                    src="/images/img3.jpg"
                    className="w-100 shadow-4-strong rounded-7 mb-4"
                    alt=""
                    aria-controls="#picker-editor"
                  />{" "}
                </div>
                <div className="content col-md-6 mb-4 mb-md-0">
                  <h4 className="fw-bold mb-3">
                    <strong>Develops Problem-Solving Skills</strong>
                  </h4>
                  <p className="align-items-justify mb-4">
                    Learning to code helps kids to develop problem-solving skills,
                    as they have to break down a problem into smaller components
                    and then find a way to solve them using code. This skill is
                    useful in various aspects of life.
                  </p>{" "}
                  <a
                    className="btn btn-primary"
                    href="/main/about"
                    role="button"
                    aria-controls="#picker-editor"
                  >
                    Read more
                  </a>
                </div>
              </div>
              {/* row - 3 */}

            </section>
          </section>
          {/**/}
        </div>
      </div>
      {/* Why Coding Is Important */}

      {/* Testimonials */}
      <>
        <div className='mb-10'>
          <div class="" data-draggable="true"
            style={{
              backgroundImage: 'url("/images/background-img2.jpeg")',
              backgroundAttachment: "fixed",
              position: "relative",
              height: 750,
              backgroundSize: "cover",
              backgroundPosition: "50% 50%"
            }}
            aria-controls="#picker-editor"
          >
            <div
              className="mask"
              style={{ backgroundColor: "rgba(35, 37, 45, 0.6)" }}
            >
              {/**/}
              {/**/}
              <section draggable="false" className="container pt-5" data-v-271253ee="" >

                {/* Section: Testimonials */}
                <section>
                  <div className='main-heading'>
                    <h2 className="mb-3 text-center display-3">
                      <span>Testimonials</span>
                    </h2>
                  </div>
                  <div className='sub-heading'>
                    <h4 className="mb-8 text-center">
                      <span>What Client Says</span>
                    </h4>
                  </div>
                  <div className="card-body">
                    <div className="row text-center gx-lg-5">
                      {/* First column */}
                      <div className="col-lg-4 mb-5 mb-lg-0 hover-zoom">
                        <div>
                          <div
                            className="rounded-7 p-4 shadow-3"
                            style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                          >
                            <h6 className="text-muted fw-bold mt-4 mb-2">Parent</h6>
                            <div className="name">
                              <p className="h5 fw-bold mb-1">Gauri Parulkar</p>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-2">
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

                            <i className="fa-solid fa-quote-left fa-sm" style={{ color: '#29c1fe' }}></i>
                            <p className="pb-4 mb-4">
                              I'm so glad we found this website for our child. It's been amazing
                              to watch their coding skills grow and develop, and they have so much
                              fun with the interactive challenges. <br /> Highly recommend!
                            </p>
                          </div>
                          <img
                            src="/images/review1.jpg"
                            className="w-100 rounded-circle mt-n5 shadow-5-strong"
                            style={{ maxWidth: 100 }}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      {/* First column */}
                      {/* Second column */}
                      <div className="col-lg-4 mb-5 mb-lg-0 hover-zoom">
                        <div>
                          <div
                            className="rounded-7 p-4 shadow-3"
                            style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                          >
                            <h6 className="text-muted fw-bold mt-4 mb-2">Student</h6>
                            <div className="name">
                              <p className="h5 mb-1 fw-bold">Akash Vukoti</p>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-2">
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

                            <i className="fa-solid fa-quote-left fa-sm" style={{ color: '#29c1fe' }}></i>
                            <p className="pb-4 mb-4">
                              I was intimidated by coding at first, but this website made it so
                              much easier and fun! The interactive challenges and games helped
                              me to understand coding concepts better, and I feel more confident
                              in my abilities now.
                            </p>
                          </div>
                          <img
                            src="/images/review2.jpg"
                            className="w-100 rounded-circle mt-n5 shadow-5-strong"
                            style={{ maxWidth: 100 }}
                            alt="Avatar"
                          />
                        </div>
                      </div>
                      {/* Second column */}
                      {/* Third column */}
                      <div className="col-lg-4 mb-5 mb-lg-0 hover-zoom">
                        <div>
                          <div
                            className="rounded-7 p-4 shadow-3"
                            style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                          >
                            <h6 className="text-muted fw-bold mt-4 mb-2">Parent</h6>
                            <div className="name">
                              <p className="h5 mb-1 fw-bold">Abhijeet Gawande</p>
                            </div>
                            <ul className="list-unstyled d-flex justify-content-center text-warning mb-2">
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

                            <i className="fa-solid fa-quote-left fa-sm" style={{ color: '#29c1fe' }}></i>
                            <p className="pb-4 mb-4">
                              As a parent, I love seeing my child engaged and excited about
                              learning, and this website has done just that. They love the
                              game-based approach to coding and I'm amazed at how much they've
                              learned in such a short time.
                            </p>
                          </div>
                          <img
                            src="/images/review3.jpg"
                            className="w-100 rounded-circle mt-n5 shadow-5-strong"
                            style={{ maxWidth: 100 }}
                            alt="Avatar"
                          />
                        </div>
                      </div>

                      {/* Third column */}
                    </div>
                  </div>
                </section>
              </section>
              {/**/}
            </div>
          </div>
        </div>
      </>
      {/* Testimonials */}

      {/* Team Members */}
      <>
        <div className="mb-10">
          <div data-draggable="true" style={{ position: "relative" }}>
            {/**/}
            {/**/}
            <section draggable="false" className="container" data-v-271253ee="">
              <section className="">
                <div className='heading'>
                  <h2 className="mb-3 text-center display-3">
                    <span>Meet Our Team</span>
                  </h2>
                </div>
                <div className='sub-heading'>
                  <h4 className="mb-10 text-center">
                    <span>Faces behind our success</span>
                  </h4>
                </div>
                <div className="row text-center gx-lg-5">
                  <div className="col-lg-4 mb-10 mb-lg-0 hover-zoom">
                    <div className="card rounded-7 shadow-2-strong h-100">
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: "-75px" }}
                      >
                        {" "}
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/6.jpg"
                          className="rounded-circle shadow-5-strong"
                          alt=""
                          style={{ width: 150, height: 150 }}
                          aria-controls="#picker-editor"
                        />{" "}
                      </div>
                      <div className="card-body">
                        <h4 className="card-tittle fw-bold mb-3">
                          <strong>Prince Prajapati</strong>
                        </h4>
                        <h6 className="mb-3">Frontend Developer</h6>
                        {/* icons */}
                        <div>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-instagram" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-linkedin" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-github" />
                            </a>
                          </button>
                        </div>
                        {/* icons */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-10 mb-lg-0 hover-zoom">
                    <div className="card rounded-7 shadow-2-strong h-100">
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: "-75px" }}
                      >
                        {" "}
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                          className="rounded-circle shadow-5-strong"
                          alt=""
                          style={{ width: 150, height: 150 }}
                          aria-controls="#picker-editor"
                        />{" "}
                      </div>
                      <div className="card-body">
                        <h4 className="card-tittle fw-bold mb-3">
                          <strong>Mohit Mishra</strong>
                        </h4>
                        <h6 className="mb-3">Frontend Developer</h6>
                        {/* icons */}
                        <div>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-instagram" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-linkedin" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-github" />
                            </a>
                          </button>
                        </div>
                        {/* icons */}
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 mb-10 mb-lg-0 hover-zoom">
                    <div className="card rounded-7 shadow-2-strong h-100">
                      <div
                        className="d-flex justify-content-center"
                        style={{ marginTop: "-75px" }}
                      >
                        {" "}
                        <img
                          src="https://mdbootstrap.com/img/new/avatars/15.jpg"
                          className="rounded-circle shadow-5-strong"
                          alt=""
                          style={{ width: 150, height: 150 }}
                          aria-controls="#picker-editor"
                        />{" "}
                      </div>
                      <div className="card-body">
                        <h4 className="card-tittle fw-bold mb-3">
                          <strong>Rishabh Agnihotri</strong>
                        </h4>
                        <h6 className="mb-3">Frontend Developer</h6>
                        {/* icons */}
                        <div>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-facebook-f" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-instagram" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-linkedin" />
                            </a>
                          </button>
                          <button type="button" className="btn btn-floating text-white mx-1">
                            <a href="" className="me-4 text-reset">
                              <i className="fab fa-github" />
                            </a>
                          </button>
                        </div>
                        {/* icons */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </section>
            {/**/}
          </div>
        </div>
      </>
      {/* Team Members */}

      {/* FAQ */}
      <>
        <div className="container mb-8">
          {/*Section: Content*/}
          <section>
            <div className='heading'>
              <h2 className="mb-3 text-center display-3">
                <span>FAQ</span>
              </h2>
            </div>
            <div className='sub-heading'>
              <h4 className="mb-8 text-center">
                <span>Frequently Asked Questions</span>
              </h4>
            </div>
            <div className="accordion" id="basicAccordion">
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    Why should kids learn to code?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    Kids should learn to code because it helps develop problem-solving skills,
                    enhances creativity, boosts logical thinking, and prepares them for a
                    tech-driven future. Additionally, coding teaches persistence, collaboration,
                    and attention to detail, and opens up career opportunities in a wide range of
                    fields.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    My child is a beginner, is previous coding experience required?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    No, previous coding experience is not required for our courses. We welcome
                    children of all skill levels, including beginners. Our courses are designed
                    to start with the basics and gradually increase in difficulty to ensure that
                    every child can learn and progress at their own pace.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What is the recommended age for my child to start coding?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    The recommended age for a child to start coding varies, but generally,
                    children as young as 5 or 6 can start with basic block-based programming.
                    As they progress, they can move on to more advanced languages and projects.
                    However, it's never too late to start learning how to code, and people of all
                    ages can benefit from the skills and knowledge it provides.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What courses does Digi Coders offer?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    Digi Coders offers block-based coding courses for kids. Some of the courses
                    they offer include Python programming, Web Development, App Development,
                    Game Development, A.I. and IOT. These courses are designed to make coding fun
                    and interactive for kids while teaching them important coding concepts and skills.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    Is the coding course schedule flexible?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    Yes! You can work the classes around your child’s schedule by selecting any time
                    and any day that works for you.
                  </div>
                </div>
              </div>
              <div className="accordion-item rounded-7 shadow-4-strong">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button rounded-7 collapsed"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#basicAccordionCollapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    What kind of device does my child need to start learning to code?
                  </button>
                </h2>
                <div
                  id="basicAccordionCollapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-mdb-parent="#basicAccordion"
                  style={{}}
                >
                  <div className="accordion-body">
                    All that is needed to learn coding with Digi Coders is a laptop/computer with a
                    webcam and a stable internet connection.
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
      {/* FAQ */}

    </div>

  )
}

export default Home