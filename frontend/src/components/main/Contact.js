import React from 'react'

const Contact = () => {
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
            </>
        </div>
    )
}

export default Contact
