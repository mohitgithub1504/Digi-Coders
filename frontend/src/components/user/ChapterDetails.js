import React from 'react'
import { useParams } from 'react-router-dom'

const ChapterDetails = () => {

  const { id } = useParams();


  return (
    <div>
      <section>
        <div className="container my-3">
          <div className="card shadow-0 border-light rounded-3">
            <div className="card-body">
              <div className="row mb-5 d-flex align-items-center justify-content-center">
                <div className="col-md-6 col-lg-4 mt-4">
                  <div
                    class="mt-n3 bg-image hover-overlay ripple mx-3 shadow-4-strong rounded-7"
                    data-mdb-ripple-color="light"
                  >
                    <img
                      src="/images/course6.jpg"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="content col-md-6 mb-4 mb-md-0 ">

                  <div class="row">
                    <div class="col-4">
                      <h5 className="fw-bold mx-3">
                        <strong>Title - </strong>
                      </h5>
                    </div>
                    <div class="col-6">
                      <p className="">
                        HTML
                      </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-4">
                      <h5 className="fw-bold mx-3">
                        <strong>category - </strong>
                      </h5>
                    </div>
                    <div class="col-6">
                      <p className="">
                        Web
                      </p>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-4">
                      <h5 className="fw-bold mx-3">
                        <strong>Description - </strong>
                      </h5>
                    </div>
                    <div class="col-6">
                      <p className="">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default ChapterDetails