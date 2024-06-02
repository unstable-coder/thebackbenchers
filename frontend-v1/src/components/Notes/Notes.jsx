import Lottie from 'lottie-react'
import React from 'react'
import BookIcon from '../Lottie/BookIcon.json'
import { FaCheckCircle } from "react-icons/fa";


const Notes = () => {
  return (
    <>
      <section>
        <div className="container my-5">
          <div className="wrapper-all-notes">
            <div className="row ">
              <div className="col-6 col-md-4 col-lg-3">
                <div className="wrapper-one-note border border-1 p-2 rounded-3">
                  <div className="book-icon d-flex justify-content-center">
                    <Lottie style={{width: "280px"}} animationData={BookIcon}/>
                  </div>
                  <div className="book-detail d-flex justify-content-between mt-3 mx-3">
                    <div className='d-flex justify-content-center'> 
                      <img src="src/assets/logo/react-2.png" alt="book-icon" width="30" height="30" />
                      <p className='ms-2 fw-semibold'>React Js</p>
                    </div>
                    <p><FaCheckCircle className='text-success me-1' /> free</p>
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

export default Notes
