import React from 'react'
const Contact = () => {
    return (
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
                                <h1 className="fw-bold mb-3">Contact Us</h1>
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
            <section className="h-100 gradient-form" style={{ backgroundColor: "#eee", textAlign: "center" }}>
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6 d-flex align-items-center .bg-danger.bg-gradient" style={{ background: '#4fd6f7' }}>
                                        <div className="text-dark px-1 py-1 p-md-5 mx-md-4">
                                            {/* <FontAwesomeIcon icon="fa-thin fa-envelope-open-text" /> */}
                                            <h1 className="mb-6 cont-title">Contact Us -</h1>
                                            <h4 className="mb-4">We are more than just a company</h4>
                                            <p className="small mb-0">
                                                Location

                                            </p>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="card-body p-md-5 mx-md-4">
                                            <div className="text-center mb-5">
                                                <img
                                                    src='/logo/logo.png'
                                                    style={{ width: '100%' }}
                                                    alt="logo"
                                                />
                                                <h4 className="mt-5 pb-1">Contact Digi Coders</h4>
                                            </div>
                                            <form>
                                                <div className="mb-4">
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        className="form-control"
                                                        placeholder="Enter Full Name"
                                                    />
                                                </div>
                                                <div className="mb-4">
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        className="form-control"
                                                        placeholder="Enter Email Address"
                                                    />
                                                </div>
                                                {/* Text area fields */}
                                                <div class="mb-4">
                                                    <textarea class="form-control" id="textarea" rows="4"
                                                        placeholder='Enter massege....'
                                                    ></textarea>
                                                </div>

                                                <div className="text-center pt-1 mb-5 pb-1 ">
                                                    <button
                                                        className="btn btn-primary btn-block text-center fa-lg gradient-custom-2 mb-3"
                                                        type="button"
                                                        style={{ borderRadius: "0px", width: "100%" }}
                                                    >
                                                        Send
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact
