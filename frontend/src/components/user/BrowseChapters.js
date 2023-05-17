import React, { useEffect, useState } from 'react'

const BrowseChapters = () => {

    const [chapterList, setChapterList] = useState([]);

    const fetchUserData = async () => {
        const res = await fetch('http://localhost:5000/chapter/getall');
        console.log(res.status);
        const data = await res.json();
        console.log(data);
        setChapterList(data);
    }

    const displayChapters = () => {
        return chapterList.map((chapter) => (
            <div className="card shadow-0 border-light rounded-3">
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-3 col-xl-3 mb-4 mb-lg-0">
                                            <div
                                                class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-7"
                                                data-mdb-ripple-color="light"
                                            >
                                                <img
                                                    src="/images/course6.jpg"
                                                    className="img-fluid"
                                                />
                                                <a href="#!">
                                                    <div
                                                        className="mask"
                                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                                                    />
                                                </a>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-lg-6 col-xl-6">
                                            <h5>{chapter.title}</h5>
                                            
                                            <div className="mt-1 mb-0 text-muted small">
                                                <span>{chapter.category}</span>
                                                
                                            </div>
                                            <p className="text-truncate mb-4 mb-md-0">
                                                There are many variations of passages of Lorem Ipsum
                                                available, but the majority have suffered alteration in some
                                                form, by injected humour, or randomised words which don't look
                                                even slightly believable.
                                            </p>
                                        </div>
                                        <div className="col-md-6 col-lg-3 col-xl-3 border-sm-start-none border-start">
                                            <div className="d-flex flex-row align-items-center mb-1">
                                                <h4 className="mb-1 me-1">$13.99</h4>
                                                <span className="text-danger">
                                                    <s>$20.99</s>
                                                </span>
                                            </div>
                                            <h6 className="text-success">Free shipping</h6>
                                            <div className="d-flex flex-column mt-4">
                                                <button className="btn btn-primary" type="button">
                                                    Details
                                                </button>
                                                <button
                                                    className="btn btn-primary mt-2"
                                                    type="button"
                                                >
                                                    Add to wishlist
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
        ))
    }

    useEffect(() => {
      fetchUserData();
    }, []);

  return (
    <div>
            {/* Our Chapters*/}
            <section>
                <div className="container py-5">
                   
                   {
                          displayChapters()     
                   }
                   
                </div>
            </section>
        </div>
  )
}

export default BrowseChapters