import React from 'react'

const About = () => {
    return (
        <div>
            <>
                {/*Page Header*/}
                <header className='mb-3'>
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
                                    <h1 className="fw-bold mb-3">About Us</h1>
                                    <p className='paragraph'>
                                        "Welcome to Digi Coders, where we believe that learning
                                        to code should be fun and exciting! Our team of expert
                                        educators and innovative teaching methods ensure that
                                        kids not only gain essential coding skills but also have
                                        a blast while doing it."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Background image */}
                </header>
                {/*Page Header*/}
            </>

            <div className="container my-5">
                {/* Section */}
                <section>
                    <h6 className="font-weight-bold text-center grey-text text-uppercase small mb-4">
                        Services
                    </h6>
                    <h3 className="font-weight-bold text-center dark-grey-text pb-2">
                        Our Services
                    </h3>
                    <hr className="w-header my-4" />
                    <p className="lead text-center text-muted pt-2 mb-5">
                        Join thousands of satisfied customers using our template globally.
                    </p>
                    <div className="row">
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card text-center bg-info text-white">
                                <div className="card-body">
                                    <p className="mt-4 pt-2">
                                        <i className="far fa-object-ungroup fa-4x" />
                                    </p>
                                    <h5 className="font-weight-normal my-4 py-2">
                                        <a className="text-white" href="#">
                                            Web Design
                                        </a>
                                    </h5>
                                    <p className="mb-4">
                                        He polite be object change. Consider no overcame yourself sociable
                                        children.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card text-center">
                                <div className="card-body">
                                    <p className="mt-4 pt-2">
                                        <i className="fas fa-mobile-alt fa-4x grey-text" />
                                    </p>
                                    <h5 className="font-weight-normal my-4 py-2">
                                        <a className="dark-grey-text" href="#">
                                            Mobile App
                                        </a>
                                    </h5>
                                    <p className="text-muted mb-4">
                                        He polite be object change. Consider no overcame yourself sociable
                                        children.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 mb-lg-0 mb-4">
                            <div className="card text-center bg-dark text-white">
                                <div className="card-body">
                                    <p className="mt-4 pt-2">
                                        <i className="fas fa-chart-line fa-4x" />
                                    </p>
                                    <h5 className="font-weight-normal my-4 py-2">
                                        <a className="text-white" href="#">
                                            Digital Marketing
                                        </a>
                                    </h5>
                                    <p className="mb-4">
                                        He polite be object change. Consider no overcame yourself sociable
                                        children.
                                    </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </section>
                {/* Section */}
            </div>





            <div className="container my-5 py-5 z-depth-1">
  {/*Section: Content*/}
  <section className="px-md-5 mx-md-5 text-center dark-grey-text">
    {/*Grid row*/}
    <div className="row d-flex justify-content-center">
      {/*Grid column*/}
      <div className="col-xl-6 col-md-8">
        <h3 className="font-weight-bold">Call to action</h3>
        <p className="text-muted">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id quam
          sapiente molestiae numquam quas, voluptates omnis nulla ea odio.
        </p>
        <a className="btn btn-info btn-md ml-0 mb-5" href="#" role="button">
          Start now
          <i className="fa fa-magic ml-2" />
        </a>
      </div>
      {/*Grid column*/}
    </div>
    {/*Grid row*/}
    {/*Grid row*/}
    <div className="row">
      {/*First column*/}
      <div className="col-lg-3 col-md-6">
        <i className="fas fa-gem fa-3x blue-text" />
        <p className="font-weight-bold my-3">Feature One</p>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/*/First column*/}
      {/*Second column*/}
      <div className="col-lg-3 col-md-6">
        <i className="fas fa-chart-area fa-3x teal-text" />
        <p className="font-weight-bold my-3">Feature Two</p>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/*/Second column*/}
      {/*Third column*/}
      <div className="col-lg-3 col-md-6">
        <i className="fas fa-cogs fa-3x indigo-text" />
        <p className="font-weight-bold my-3">Feature Three</p>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/*/Third column*/}
      {/*Fourth column*/}
      <div className="col-lg-3 col-md-6">
        <i className="fas fa-cloud-upload-alt fa-3x deep-purple-text" />
        <p className="font-weight-bold my-3">Feature Four</p>
        <p className="text-muted">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
      {/*/Fourth column*/}
    </div>
    {/*/Grid row*/}
  </section>
  {/*Section: Content*/}
</div>



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

        </div>
    )
}

export default About