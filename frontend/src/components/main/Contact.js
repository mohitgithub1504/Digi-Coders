import React from 'react';

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
                <div className="container h-100">
                    <div className="row d-flex align-items-center h-100">
                        <div className="col-xl-10">
                            <div className="card rounded-3 text-black">
                                <div className="row g-0">
                                    <div className="col-lg-6 px-5" style={{ background: '#4fd6f7' }}>
                                        <div className="text-center mb-5">
                                            <img
                                                src='/logo/logo.png'
                                                style={{ width: '100%', marginTop: '0px' }}
                                                alt="logo"
                                            />
                                        </div>
                                        <div className="card-body d-block">
                                            <div className='d-block p-2  text-dark' style={{borderColor:'#f0f', border:'2px'}}>
                                                <img src="/logo/location.png" alt="errors" />
                                                <span className='text-uppercase fw-bold '>Address</span>
                                            </div>
                                            <div className="mb-3 d-block p-2 text-white">
                                                <i className="fas fa-map-marker-alt"></i> 
                                                <span className='text-uppercase fw-bold '>Address</span>

                                            </div>
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
