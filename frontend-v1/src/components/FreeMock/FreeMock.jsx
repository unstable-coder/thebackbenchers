import React from 'react';
import { Link } from 'react-router-dom';

const FreeMock = () => {
  return (
    <>
      
    <section>
      <div className="container">
        <div className="wrapper-mock py-5">

            <div className="heading text-center mb-4">
              <h1 className="fs-3">Free Mock Interviews</h1>
              <p className=''>Practice. Get Confident. Get hired</p>
            </div>

            <div className="row">
              <div className="col-12 col-md-6">
                <Link to="/mock-assessment" className="text-dark link-underline link-underline-opacity-0">
                  <div className="wrapper-free-mock-assessment border border-1 rounded-3 mb-3">
                    <div className="row align-items-center">
                      <div className="col-12 col-md-6">
                        <div className="free-mock-assessment">
                          <img src="src/assets/logo/free-mock-assessment.avif" alt="Free Mock Assessment" className='img-fluid rounded-3' loading='lazy' />
                        </div>
                      </div>
                      <div className="col-12 col-md-6">
                      <div className="free-mock-assessment p-2">
                        <p className='mb-1 fw-semibold heading-color'>Free Mock Assessment</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime?</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>

              <div className="col-12 col-md-6">
              <div className="wrapper-free-mock-assessment border border-1 rounded-3 mb-3">
                <div className="row align-items-center">
                  <div className="col-12 col-md-6">
                    <div className="free-mock-assessment">
                      <img src="src/assets/logo/online-mock-interview.jpg" alt="Free Mock Interview" className='img-fluid rounded-3' loading='lazy' />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                  <div className="free-mock-assessment p-2">
                  <p className='mb-1 fw-semibold'>Free Mock Interview</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, maxime?</p>
                    </div>
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

export default FreeMock
