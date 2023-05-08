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
                            <h3 className="font-weight-bold mb-4">Manage Chapter</h3>
                            {/* Name */}
                            <input
                                type="text"
                                id="trainer"
                                name = 'trainer'
                                className="form-control mb-4"
                                placeholder="Trainer Name"
                            />
                            {/* Email */}
                            <input
                                type="text"
                                id="title"
                                name  = 'title'
                                className="form-control mb-4"
                                placeholder="Title"
                            />
                            <input
                                type="text"
                                id="category"
                                name='category'
                                className="form-control mb-4"
                                placeholder="Category"
                            />
                            <input
                                type="file"
                                id="icon"
                                name='Icon'
                                className="form-control mb-4"
                                placeholder="Chapter Icone"
                            />
                            {/* Description */}
                            <div className="form-group">
                                <textarea
                                    className="form-control rounded-0"
                                    id="exampleFormControlTextarea2"
                                    rows={3}
                                    placeholder="Description.."
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

export default ManageChapter;