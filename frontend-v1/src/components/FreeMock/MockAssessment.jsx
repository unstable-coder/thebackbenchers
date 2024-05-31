import './FreeMock.css'
import { Link } from 'react-router-dom';
import { FaRegClock } from "react-icons/fa";
import { CiBoxList } from "react-icons/ci";
import { CiLocationArrow1 } from "react-icons/ci";

const MockAssessment = () => {
  return (
    <>
    {/* hero section starts here */}
        <section>
            <div className="container">
                <div className="wrapper-mock-assessment mb-3">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 order-2 order-md-1">
                            <div className="wrapper-mock-details">
                                <h1 className='fs-2 mb-2 heading-color'>Free Online Mock Assessment: <span className='text-dark'> Sharpen Your <span style={{color: "#FFC606"}}> Coding  </span> Interview Techniques </span></h1>
                                <h2 className='fs-5 fw-normal mb-4'>Perfect Your Responses and Secure Your Dream Software Job</h2>
                                <Link to='' className="heading-color-bg text-light rounded-3 py-2 px-3 link-underline link-underline-opacity-0">Start Now</Link>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 order-1 order-md-2">
                            <img src="src/assets/logo/mcq.jpg" alt="subject-logo" loading="lazy" width="100%" className='img-fluid' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    {/* hero section ends here */}


    {/* popular quizzes starts here */}
        <section>
            <div className="container mt-5">
                <h2 className="fs-4 fw-normal text-center pt-2 pt-md-4 pb-2 pb-md-4">Mastering the Future: Preparing for Success with Cutting-Edge Technology</h2>
                    
                    <div className="wrapper-quiz">
                        <div className="row">
                        {quizCard.map((key) => (
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="wrapper-quiz-cards border border-1 rounded-4 mb-4 anim-hover">
                                    <div className="quiz-ctn text-center">
                                        <img src={key.subjectImg} alt="subject-logo" loading="lazy" width="60" className='img-fluid mt-3' />
                                        <p className='mt-2 fs-5'>{key.subjectName}</p>
                                    </div>
                                    <div className="quiz-ctn2 px-3">
                                        <p className='mt-2 fs-6'><FaRegClock className='me-1 text-primary' /> Time: {key.duration}</p>
                                        <p className='mt-2 fs-6 border-color pb-4'><CiBoxList className='me-1 text-success' /> MCQs: {key.mcqs}</p>
                                    </div>
                                    <div className="quiz-ctn3 d-flex justify-content-center align-items-center mt-2 mb-2">
                                        <Link to='' className="heading-color link-underline link-underline-opacity-0 ">Attempt Now <CiLocationArrow1 /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}

                        <Link to='#all-mocks-assessments' className="fs-5 text-center pt-3 heading-color link-offset-3 link-offset-3-hover link-underline link-underline-opacity-0 link-underline-opacity-75-hover">Explore All Mocks <CiLocationArrow1 /></Link>
                        </div>
                    </div>
            </div>
        </section>
    {/* popular quizzes ends here */}


    {/* benefits page starts here */}
        <section>
            <div className="container">
                <div className="wrapper-help-data mt-5">
                    <h2 className="fs-4 fw-normal text-center pt-2 pt-md-4 pb-2 pb-md-4">How Will This Mock Assessment Benefit Me?</h2>
                
                    <div className="row">
                        {helpData.map((key) => (
                            <div className="col-12 col-md-6 col-lg-4">
                                <div className="wrapper-data shadow rounded-3 text-center py-3 mb-5">
                                    <img src={key.helpDataImg} alt="subject-logo" loading="lazy" width="60" className='img-fluid mt-3 mb-2' />
                                    <div className="data-ctn px-3">
                                        <p className='mt-2 fs-6 fw-semibold'>{key.helpDataTitle}</p>
                                        <p className='mt-2 fs-6'>{key.helpDataDescription}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    {/* benefits page ends here */}


    {/* all-mock page starts here */}
        <section id="all-mocks-assessments">
            <div className="container mt-5">
                <h2 className="fs-4 fw-normal text-center pt-2 pt-md-4 pb-2 pb-md-4">Explore All Mock Assessments</h2>
                    
                    <div className="wrapper-quiz">
                        <div className="row">
                        {allQuizCard.map((key) => (
                            <div className="col-6 col-md-4 col-lg-3">
                                <div className="wrapper-quiz-cards border border-1 rounded-4 mb-4 anim-hover">
                                    <div className="quiz-ctn text-center">
                                        <img src={key.subjectImg} alt="subject-logo" loading="lazy" width="60" className='img-fluid mt-3' />
                                        <p className='mt-2 fs-5'>{key.subjectName}</p>
                                    </div>
                                    <div className="quiz-ctn2 px-3">
                                        <p className='mt-2 fs-6'><FaRegClock className='me-1 text-primary' /> Time: {key.duration}</p>
                                        <p className='mt-2 fs-6 border-color pb-4'><CiBoxList className='me-1 text-success' /> MCQs: {key.mcqs}</p>
                                    </div>
                                    <div className="quiz-ctn3 d-flex justify-content-center align-items-center mt-2 mb-2">
                                        <Link to='' className="heading-color link-underline link-underline-opacity-0 ">Attempt Now <CiLocationArrow1 /></Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
            </div>
        </section>
    {/* all-mock page ends here */}

    </>
  )
}

export default MockAssessment;


const quizCard = [
    {
        subjectImg: "src/assets/logo/react-2.png",
        subjectName: "React Js",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/html.png",
        subjectName: "HTML",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/css.png",
        subjectName: "CSS",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/js.png",
        subjectName: "JavaScript",
        duration: "40 Minutes",
        mcqs: "30"
    },
]

const helpData = [
    {
        helpDataImg: "src/assets/logo/target.png",
        helpDataTitle: "Tackle Real-World Challenges",
        helpDataDescription: "Engage with interview questions from leading tech companies, taking your preparation to the next level with practical, real-world problem-solving."
    },
    {
        helpDataImg: "src/assets/logo/open-book.png",
        helpDataTitle: "Address Weaknesses Proactively",
        helpDataDescription: "Maintain your progress by identifying and working on your pain points, ensuring you're well-prepared for real-life scenarios and technical challenges."
    },
    {
        helpDataImg: "src/assets/logo/location.png",
        helpDataTitle: "Adopt a Systematic Learning Approach",
        helpDataDescription: "Benefit from a structured, comprehensive, and industry-guided learning path designed to enhance your skills, knowledge, and career prospects."
    },
]

const allQuizCard = [
    {
        subjectImg: "src/assets/logo/react-2.png",
        subjectName: "React Js",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/html.png",
        subjectName: "HTML",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/css.png",
        subjectName: "CSS",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/js.png",
        subjectName: "JavaScript",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/git.png",
        subjectName: "Git",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/java.png",
        subjectName: "Java",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/jquery.png",
        subjectName: "JQuery",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/mongoDB.png",
        subjectName: "MongoDB",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/nodejs.png",
        subjectName: "Node Js",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/redux.png",
        subjectName: "Redux",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/sql.png",
        subjectName: "SQL",
        duration: "40 Minutes",
        mcqs: "30"
    },
    {
        subjectImg: "src/assets/logo/js.png",
        subjectName: "JavaScript",
        duration: "40 Minutes",
        mcqs: "30"
    },
]