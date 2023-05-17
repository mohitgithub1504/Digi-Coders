import React from 'react'

const ChapterDetails = () => {
  return (
    <div>


      <section>
        <div className="container py-5">
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
                <div className="col-lg-6 col-md-6">
                  <div className="card">
                    <div className="card-header">
                      <h4 className="text-center mb-0">Feature 2</h4>
                    </div>
                    <div className="card-body">
                      <p className="card-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                        enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat.
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