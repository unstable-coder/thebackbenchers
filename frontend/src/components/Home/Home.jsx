import React from "react";
import Hero from '../Lottie/hero4.json'
import MockInterview from '../Lottie/mock-interview.json'
import {Link} from 'react-router-dom';
import './Home.css'
import Lottie from "lottie-react"
import Testimonials from "../Testimonials/Testimonials";
import { FaCircleCheck } from "react-icons/fa6";
import { useEffect } from "react";



function Home() {

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.querySelectorAll(".object").forEach((move) => {
        const moving_value = move.getAttribute('data-value');
        const x = (e.clientX * moving_value) / 200; // Adjusting the factor to make the effect subtle
        const y = (e.clientY * moving_value) / 200; // Adjusting the factor to make the effect subtle

        move.style.transform = `translateX(${x}px) translateY(${y}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  
  return (
    <>


    <section className="hero-page-banner-main d-flex justify-content-center align-items-center position-relative">
      <div className="container-fluid">
        <div className="wrapper-mainHero d-flex justify-content-center align-items-center">
          <div className="wrapper-ctn text-center">
            <h1 className="fw-semibold custom-title_fs">Build Better Future</h1>
            <p className="custom-subtitle_fs">All you need to ace your upcoming tech interview.</p>

            <div className="wrapper-icons">
              <div className="row justify-content-center align-items-center">
                <div className="col-6 col-md-4">
                  <p className=" me-3"><FaCircleCheck className="text-success" /> All Free Notes </p>
                </div>
                <div className="col-6 col-md-4 m-0 p-0">
                  <p className="me-3"><FaCircleCheck className="text-success" /> Free Mock Interviews </p>
                </div>
                <div className="col-8 col-md-4 m-0 p-0">
                  <p className="me-3"><FaCircleCheck className="text-success" /> Latest Job Updates </p>
                </div>
              </div>
            </div>

            <div className="wrapper_header-links mt-3">
              <Link to='/notes' className="me-2 heading-color-bg-3 text-light rounded-3 py-2 px-3 link-underline link-underline-opacity-0">All Notes</Link>
              <Link to='/free-mock' className="heading-color-bg-1 text-light rounded-3 py-2 px-3 link-underline link-underline-opacity-0">Free Mock Interviews</Link>
            </div>  

          </div>
        </div>
      </div>

      <div className="wrapper_header-animated-icons">
        <img src="src/assets/logo/react-2.png" width="60" className="object img1 d-none d-lg-block" data-value="-2" alt="animation icon" />
        <img src="src/assets/logo/html.png" width="60" className="object img2 d-none d-lg-block" data-value="6" alt="animation icon" />
        <img src="src/assets/logo/css.png" width="60" className="object img3 d-none d-lg-block" data-value="4" alt="animation icon" />
        <img src="src/assets/logo/js.png" width="60" className="object img4 d-none d-lg-block" data-value="-6" alt="animation icon" />
        <img src="src/assets/logo/java.png" width="60" className="object img5 d-none d-lg-block" data-value="8" alt="animation icon" />
        <img src="src/assets/logo/nodejs.png" width="60" className="object img6 d-none d-lg-block" data-value="-4" alt="animation icon" />
        <img src="src/assets/logo/mongoDB.png" width="60" className="object img7 d-none d-lg-block" data-value="5" alt="animation icon" />
        <img src="src/assets/logo/git.png" width="60" className="object img8 d-none d-lg-block" data-value="-9" alt="animation icon" />
        <img src="src/assets/logo/redux.png" width="60" className="object img9 d-none d-lg-block" data-value="-5" alt="animation icon" />
        <img src="src/assets/logo/sql.png" width="60" className="object img10 d-none d-lg-block" data-value="3" alt="animation icon" />
        <img src="src/assets/logo/jquery.png" width="60" className="object img11 d-none d-lg-block" data-value="-5" alt="animation icon" />
        <img src="src/assets/logo/bootstrap.png" width="60" className="object img12 d-none d-lg-block" data-value="8" alt="animation icon" />
      </div>
    </section>


    {/* hero section starts here */}
    <section>
      <div className="container-fluid position-relative overflow-hidden" style={{background: "#F9F6F2"}}>
        <div className="container">
          <div className="wrapper-hero py-5">
            <div className="row align-items-center">
              <div className="col-md-12 col-lg-6">
                <div className="wrapper-hero-text mb-3">
                  <h2 className="fs-1">Improve Your Learning, Grab Your Dream Job</h2>
                  <p className="mb-4 text-justify">
                    Unlock Your Learning Potential and Seize Your Dream Job in the IT industry with our comprehensive guide. Discover how to enhance your skills, navigate the job market, and secure fulfilling opportunities. 
                    </p>
                  <div className="custom-btn">
                    <Link to='/notes' className="heading-color-bg text-light rounded-3 py-2 px-3 link-underline link-underline-opacity-0">Get Started for free</Link>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="hero-page-banner">
                  <Lottie animationData={Hero} />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
    {/* hero section ends here */}


    {/* all-available-notes section starts here */}
      <section>
        <div className="container">
          <div className="wrapper-subjects my-5">
            <div className="heading text-center mb-4">
              <h2 className="fs-2">All Available Notes</h2>
              <p>Brush up your skills or learn from scratch. Increase your pace of learning.</p>
            </div>

            <div className="subjects">
              <div className="row">
                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/react-2.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">React Js</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/java.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">Java</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/js.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-1 ps-lg-0">JavaScript</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/css.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">CSS</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/git.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">Git</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/html.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">HTML</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/jquery.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">JQuery</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/mongoDB.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-1 ps-lg-0">MongoDB</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/nodejs.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">Node Js</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/redux.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">Redux</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                      <img src="src/assets/logo/sql.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-5 ps-2 ps-lg-0">SQL</h3>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-6 col-md-4 col-lg-3">
                  <div className="subject-name py-2 py-md-2 px-2 border border-1 rounded-3 my-3">
                    <div className="row align-items-center">
                      <div className="col-3">
                        <img src="src/assets/logo/more-than.png" alt="subject-logo" loading="lazy" width="60" />
                      </div>
                      <div className="col-9">
                        <h3 className="ms-3 fs-6 ps-2 ps-lg-0">And Many More.....</h3>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    {/* all-available-notes section ends here */}


    {/* mock-interview section starts here */}
      <section>
        <div className="container">
          <div className="wrapper-mock-interview my-5">

            <div className="heading text-center mt-3 pt-lg-4">
              <h2 className="fs-2">Free Mock Interviews</h2>
              {/* <p>Practice. Get Confident. Get hired</p> */}
              <p>
                Take your interview preparation to the next level with completely free and real-time mock interviews. Take one today or schedule for later!
              </p>
            </div>
            
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <Lottie animationData={MockInterview} />
              </div>
              <div className="col-12 col-lg-6">
                <div className="mock-interview-detail ">
                  <h2 className="fs-3">Unsure Where To Start Preparation?</h2>
                  <p className="fs-4">Take Our</p>
                  <h2 className="heading-color">Free Mock Coding Interview</h2>
                  <p className="fs-4 fw-semibold mb-3">For Software Engineers</p>

                  <div className="custom-btn mt-4">
                    <Link to='/free-mock' className="heading-color-bg text-light rounded-3 py-2 px-3 link-underline link-underline-opacity-0">Attempt Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {/* mock-interview section ends here */}


    {/* testimonials section starts here */}
    <section>
      <div className="container">
        <div className="wrapper-testimoinals">
            <div className="heading text-center mt-3 pt-lg-4">
              <h2 className="fs-2">What Our Students Say</h2>
              <p>Hear from our students about their experiences and achievements </p>
            </div>

            <Testimonials />
        </div>
      </div>
    </section>
    {/* testimonials section ends here */}
      
    </>
  );
}

export default Home;
