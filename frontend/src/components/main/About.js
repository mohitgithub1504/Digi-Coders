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
                            backgroundImage: "url(/images/background-img1.jpg)",
                            height: 230,
                            backgroundSize: "cover",
                            backgroundPosition: "50% 15%",
                            position: "relative"
                        }}
                    >
                        <div
                            className="mask text-white"
                            style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
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



        </div>
    )
}

export default About