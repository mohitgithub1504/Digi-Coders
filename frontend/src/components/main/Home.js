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
                <span>Why coding is important for kids?</span>
              </h2>
            </div>
            <div className='sub-heading'>
              <h4 className="mb-6 text-center">
                <span>Coding : the language of the future</span>
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
                  <span>Our Courses</span>
                </h2>
              </div>
              <div className='sub-heading'>
                <h4 className="mb-8 text-center">
                  <span>Discover a world of coding with our courses!</span>
                </h4>
              </div>
              <div className="row text-center gx-lg-5 mb-6">
                {/* First column */}
                <div className="col-lg-4 col-md-12 mb-lg-0">
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
                <div className="col-lg-4 col-md-12 mb-lg-0">
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
                <div className="col-lg-4 col-md-12 mb-lg-0">
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
                        <strong>Android Development</strong>
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
                <div className="col-lg-4 col-md-12 mb-lg-0">
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
                <div className="col-lg-4 col-md-12 mb-lg-0">
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
                        <strong>Roblox</strong>
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
                <div className="col-lg-4 col-md-12 mb-lg-0">
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

      {/* Startyour coding journey*/}
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
                              <h1 className="my-md-5 mb-5 px-5 display-3">
                                {" "}
                                <span>Start your coding journey today and make your dreams a reality!</span> <br />{" "}
                                {/* <span className="">and</span> <br />{" "}
                                <span className="">make your dreams a reality!&nbsp;</span>{" "} */}
                              </h1>{" "}
                              <a
                                className="btn btn-primary py-3 px-5 mb-2 mb-md-0 me-md-4"
                                href="#!"
                                role="button"
                                aria-controls="#picker-editor"
                              >
                                Get Started
                              </a>{" "}
                              <a
                                className="btn btn-primary py-3 px-5 mb-2 mb-md-0 me-md-2"
                                href="#!"
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
                    <svg viewBox="0 0 2880 48" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M 0 48 L 1437.5 48 L 2880 48 L 2880 0 L 2160 0 C 1453.324 60.118 726.013 4.51 720 0 L 0 0 L 0 48 Z"
                        fill="currentColor"
                      />
                    </svg>{" "}
                  </div>{" "}
                  {/* Background image */}
                </section>
              </section>
              {/**/}
            </div>
          </div>
        </div>
      </>
      {/*Grow With Us*/}

      {/* Why Coding Is Important */}
      <div data-draggable="true" style={{ position: "relative" }}>
        {/**/}
        {/**/}
        <section
          draggable="false"
          className="container"
          data-v-271253ee=""
        >
          <section className="heading mb-10">
            <h2 className="fw-bold mb-5 text-center">Why coding is important for kids?</h2>
            <div className="row gx-lg-5 mb-5 align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                {" "}
                <img
                  src="/images/img4.jpg"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />{" "}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">Prepares Them for the Future</h3>
                <div className="mb-2 text-danger small">
                  {" "}
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  />
                  <span>People</span>{" "}
                </div>
                <p className="text-muted align-items-justify">
                  In today's digital age, coding is becoming an essential skill
                  for many jobs. By learning to code at a young age, kids are
                  better prepared for the future and have a competitive edge in
                  the job market.
                </p>
                <p className="text-muted align-items-justify">
                  Coding is a skill that is becoming increasingly important in the
                  modern world. It is used in a wide range of industries, including
                  technology, finance, healthcare, and more. As the world becomes more
                  digital, the demand for individuals who can code is increasing, and
                  this trend is only going to continue in the future.
                </p>{" "}
                <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="row gx-lg-5 mb-5 flex-lg-row-reverse align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                {" "}
                <img
                  src="/images/img7.jpg"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />{" "}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">Enhances Logical Thinking</h3>
                <div className="mb-2 text-primary small">
                  {" "}
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  />
                  <span>Adventure</span>{" "}
                </div>
                <p className="text-muted align-items-justify">
                  Coding helps kids to develop logical thinking skills. They learn
                  to organize their thoughts and break down complex problems into
                  simpler components. This skill is useful not only in coding but
                  also in other areas of life.
                </p>{" "}
                <p className="text-muted align-items-justify">
                  When kids learn to code, they are introduced to a new way of thinking
                  that involves breaking down complex problems into smaller, more
                  manageable components. They learn to analyze situations, identify
                  patterns, and formulate solutions to problems. This logical thinking
                  skill is crucial in many aspects of life, such as problem-solving,
                  decision-making, and critical thinking.
                </p>{" "}
                <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
            <div className="row gx-lg-5 mb-5 align-items-center">
              <div className="col-md-6 mb-4 mb-md-0">
                {" "}
                <img
                  src="/images/img3.jpg"
                  className="w-100 shadow-4-strong rounded-4 mb-4"
                  alt=""
                  aria-controls="#picker-editor"
                />{" "}
              </div>
              <div className="col-md-6 mb-4 mb-md-0">
                <h3 className="fw-bold">Develops Problem-Solving Skills</h3>
                <div className="mb-2 text-warning small">
                  {" "}
                  <i
                    className="fas fa-users me-2"
                    aria-controls="#picker-editor"
                  />
                  <span>People</span>{" "}
                </div>
                <p className="text-muted align-items-justify">
                  Learning to code helps kids to develop problem-solving skills,
                  as they have to break down a problem into smaller components
                  and then find a way to solve them using code. This skill is
                  useful in various aspects of life and can be helpful in many
                  future careers.
                </p>{" "}
                <p className="text-muted align-items-justify">
                  Problem-solving is a critical skill in today's world, and coding
                  can help kids to develop it. As they work on coding projects, they
                  encounter various problems, and they have to come up with solutions
                  on their own. This process enhances their ability to identify
                  problems, analyze them, and create solutions. In the long run,
                  this skill can help them to navigate complex challenges in both
                  their personal and professional lives. Moreover, problem-solving
                  skills can be beneficial in many careers, such as software
                  development, engineering, and business analysis.
                </p>{" "}
                <a
                  className="btn btn-primary"
                  href="#"
                  role="button"
                  aria-controls="#picker-editor"
                >
                  Read more
                </a>
              </div>
            </div>
          </section>
        </section>
        {/**/}
      </div>
      {/* Why Coding Is Important */}

{/* Testimonials */}
<>
        <div class="py-1" data-draggable="true"
          style={{
            backgroundImage: 'url("/images/background-img2.jpeg")',
            backgroundAttachment: "fixed",
            position: "relative",
            height: 680,
            backgroundSize: "cover",
            backgroundPosition: "50% 50%"
          }}
          aria-controls="#picker-editor"
        >
          <div
            className="mask"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
          >
            {/**/}
            {/**/}
            <section draggable="false" className="container pt-5" data-v-271253ee="" >

              {/* Section: Testimonials */}
              <section className="main-heading mb-10 text-center">
                <h2 className="fw-bold mb-5">Testimonials</h2>
                <div className="row gx-lg-5">
                  {/* First column */}
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <div>
                      <div
                        className="rounded-7 p-4 shadow-3"
                        style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                      >
                        <p className="text-muted fw-bold mt-4 mb-2">Parent</p>
                        <div className="name">
                          <p className="h5 fw-bold mb-1">Harpreet Kaur</p>
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
                        className="w-100 rounded-7 mt-n5 shadow-5-strong"
                        style={{ maxWidth: 100 }}
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  {/* First column */}
                  {/* Second column */}
                  <div className="col-lg-4 mb-5 mb-lg-0">
                    <div>
                      <div
                        className="rounded-7 p-4 shadow-3"
                        style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                      >
                        <p className="text-muted fw-bold mt-4 mb-2">Student</p>
                        <div className="name">
                          <p className="h5 mb-1 fw-bold">Abhay Kumar</p>
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
                        className="w-100 rounded-7 mt-n5 shadow-5-strong"
                        style={{ maxWidth: 100 }}
                        alt="Avatar"
                      />
                    </div>
                  </div>
                  {/* Second column */}
                  {/* Third column */}
                  <div className="col-lg-4">
                    <div>
                      <div
                        className="rounded-7 p-4 shadow-3"
                        style={{ backgroundColor: "hsl(218, 62.2%, 95%)" }}
                      >
                        <p className="text-muted fw-bold mt-4 mb-2">Parent</p>
                        <div className="name">
                          <p className="h5 mb-1 fw-bold">Ram Chandra</p>
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
                        className="w-100 rounded-7 mt-n5 shadow-5-strong"
                        style={{ maxWidth: 100 }}
                        alt="Avatar"
                      />
                    </div>
                  </div>

                  {/* Third column */}
                </div>
              </section>
            </section>
            {/**/}
          </div>
        </div>
      </>
      {/* Testimonials */}

      {/* Team Members */}
      <>
        <div data-draggable="true" style={{ position: "relative" }}>
          {/**/}
          {/**/}
          <section draggable="false" className="container pt-5" data-v-271253ee="">
            <section className="heading mb-10 text-center">
              <h2 className="fw-bold mb-10">
                <span>Meet The team</span>
              </h2>
              <div className="row gx-lg-5">
                <div className="col-lg-4 mb-10 mb-lg-0">
                  <div className="card shadow-2-strong h-100">
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
                      <h5 className="fw-bold">Maria Smith</h5>
                      <p className="text-muted">Frontend Developer</p>
                      <ul className="list-unstyled mb-0">
                        {" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-github"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-twitter"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-linkedin-in"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-10 mb-lg-0">
                  <div className="card shadow-2-strong h-100">
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
                      <h5 className="fw-bold">Darren Randolph</h5>
                      <p className="text-muted">Marketing expert</p>
                      <ul className="list-unstyled mb-0">
                        {" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-github"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-twitter"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-linkedin-in"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 mb-10 mb-lg-0">
                  <div className="card shadow-2-strong h-100">
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
                      <h5 className="fw-bold">Ayat Black</h5>
                      <p className="text-muted">Web designer</p>
                      <ul className="list-unstyled mb-0">
                        {" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-facebook-f"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-twitter"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                        <a href="#!" className="px-1">
                          {" "}
                          <i
                            className="fab fa-linkedin-in"
                            aria-controls="#picker-editor"
                          />{" "}
                        </a>{" "}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
          {/**/}
        </div>
      </>
      {/* Team Members */}

      <div className="container my-5">
        {/*Section: Content*/}
        <section>
          <h6 className="font-weight-normal text-uppercase font-small grey-text mb-4 text-center">
            FAQ
          </h6>
          {/* Section heading */}
          <h3 className="font-weight-bold black-text mb-4 pb-2 text-center">
            Frequently Asked Questions
          </h3>
          <hr className="w-header" />
          {/* Section description */}
          <p className="lead text-muted mx-auto mt-4 pt-2 mb-5 text-center">
            Got a question? We've got answers. If you have some other questions, see
            our support center.
          </p>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4">
              <h5 className="font-weight-normal mb-3">
                Is this a secure site for purchases?
              </h5>
              <p className="text-muted">
                Absolutely! We work with top payment companies which guarantees your
                safety and security. All billing information is stored on our payment
                processing partner which has the most stringent level of certification
                available in the payments industry.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <h5 className="font-weight-normal mb-3">
                Can I cancel my subscription?
              </h5>
              <p className="text-muted">
                You can cancel your subscription anytime in your account. Once the
                subscription is cancelled, you will not be charged next month. You
                will continue to have access to your account until your current
                subscription expires.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <h5 className="font-weight-normal mb-3">
                How long are your contracts?
              </h5>
              <p className="text-muted">
                Currently, we only offer monthly subscription. You can upgrade or
                cancel your monthly account at any time with no further obligation.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <h5 className="font-weight-normal mb-3">
                Can I update my card details?
              </h5>
              <p className="text-muted">
                Yes. Go to the billing section of your dashboard and update your
                payment information.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <h5 className="font-weight-normal mb-3">Can I request refund?</h5>
              <p className="text-muted">
                Unfortunately, not. We do not issue full or partial refunds for any
                reason.
              </p>
            </div>
            <div className="col-md-6 col-lg-4 mb-4">
              <h5 className="font-weight-normal mb-3">
                Can I try your service for free?
              </h5>
              <p className="text-muted">
                Of course! We’re happy to offer a free plan to anyone who wants to try
                our service.
              </p>
            </div>
          </div>
        </section>
      </div>


    </div>

  )
}

export default Home