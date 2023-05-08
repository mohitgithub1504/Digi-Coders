import React from 'react'

const ManageChapter = () => {
    return (
        <div className="container my-5 py-5 z-depth-1">
            {/*Section: Content*/}
            <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                    {/*Grid column*/}
                    <div className="col-md-6">
                        {/* Default form contact */}
                        <form className="text-center" action="#!">
                            <h3 className="font-weight-bold mb-4">Contact Us</h3>
                            {/* Name */}
                            <input
                                type="text"
                                id="defaultContactFormName"
                                className="form-control mb-4"
                                placeholder="Name"
                            />
                            {/* Email */}
                            <input
                                type="email"
                                id="defaultContactFormEmail"
                                className="form-control mb-4"
                                placeholder="E-mail"
                            />
                            {/* Subject */}
                            <label>Subject</label>
                            <select className="browser-default custom-select mb-4">
                                <option value="" disabled="">
                                    Choose option
                                </option>
                                <option value={1} selected="">
                                    Feedback
                                </option>
                                <option value={2}>Report a bug</option>
                                <option value={3}>Feature request</option>
                                <option value={4}>Feature request</option>
                            </select>
                            {/* Message */}
                            <div className="form-group">
                                <textarea
                                    className="form-control rounded-0"
                                    id="exampleFormControlTextarea2"
                                    rows={3}
                                    placeholder="Message"
                                    defaultValue={""}
                                />
                            </div>
                            {/* Copy */}
                            <div className="custom-control custom-checkbox mb-4">
                                <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="defaultContactFormCopy"
                                />
                                <label
                                    className="custom-control-label"
                                    htmlFor="defaultContactFormCopy"
                                >
                                    Send me a copy of this message
                                </label>
                            </div>
                            {/* Send button */}
                            <button className="btn btn-info btn-block" type="submit">
                                Send
                            </button>
                        </form>
                        {/* Default form contact */}
                    </div>
                    {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </section>
            {/*Section: Content*/}
        </div>

    )
}

export default ManageChapter