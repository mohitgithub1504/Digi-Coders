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
                            <input
                                type="text"
                                id="data"
                                name='data'
                                className="form-control mb-4"
                                placeholder="Chapter Icone"
                            />
                            <input
                                type="date"
                                id="crated_at"
                                name='crated_at'
                                className="form-control mb-4"
                                placeholder="Chapter Icone"
                            />
                            <input
                                type="date"
                                id="updated_at"
                                name='updated_at'
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
                            {/* Send button */}
                            <button className="btn btn-primary btn-block mt-5" type="submit">
                                SUBMIT
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