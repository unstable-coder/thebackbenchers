import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper-about-us">
            <div className="row align-items-center">
              <div className="col-12 col-md-6">
                <div className="about-us text-justify mt-5">
                  <h1 className='fs-2 heading-color'>About Us</h1>
                  <p>Welcome to <strong>The BackBencher,</strong>  where a team of dedicated backbenchers is here to assist you in achieving your dream job. Our sole focus is to provide invaluable real-life interview experiences to students, empowering them to secure their dream jobs. We understand the significance of practical exposure and strive to deliver it in the most impactful manner possible. With our guidance, you can confidently face any interview scenario, armed with the skills and knowledge required to succeed. Join us at The BackBencher, where dreams turn into reality.</p>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="about-img">
                  <img src="src/assets/logo/about-us.avif" alt="about us" width="100%" className='img-fluid rounded-3' loading='lazy' />
                </div>
              </div>

              <div className="col-12 col-md-6 order-md-2">
                <div className="our-mission text-justify mt-5">
                  <h2 className='fs-2 heading-color'>Our Mission</h2>
                  <p>Our mission is to provide invaluable real-life interview experiences to students and individuals, helping them gain the confidence and expertise necessary to succeed in today’s competitive job market. We understand the significance of practical exposure and strive to deliver it in the most impactful manner possible. With our guidance and support, you can confidently face any interview scenario, armed with the skills and knowledge required to turn your dreams into reality.</p>
                </div>
              </div>
              <div className="col-12 col-md-6 order-md-1">
                <div className="our-mission-img">
                  <img src="src/assets/logo/our-mission.jpg" alt="about us" width="100%" className='img-fluid rounded-3' loading='lazy' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="wrapper-what-we-offer my-5">
              <h3 className='fs-2 text-center'>What We Offer</h3>
              <div className="row justify-content-center">
                {offerDetails.map((key) => (
                  <div className="col-12 col-md-4">
                    <div className="what-we-offer rounded-3 shadow p-4 my-4">
                      <div className="text-center mt-1 mb-2">
                        <img src={key.offerDetailsImg} alt="about us" width="70" className='img-fluid' loading='lazy' />
                      </div>
                      <h4>{key.offerDetailsTitle}</h4>
                      <p className='text-justify'>{key.offerDetailsDesc}</p>
                    </div>
                  </div> 
                ))}
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs;


const offerDetails = [
  {
    offerDetailsImg: "src/assets/logo/information.png",
    offerDetailsTitle: "Personalized Assistance",
    offerDetailsDesc: "We recognize that each individual has unique strengths, weaknesses, and career aspirations. That’s why we offer personalized guidance and support tailored to your specific needs. Our experienced team will work closely with you to identify your areas of improvement and provide targeted training to enhance your interview skills."
  },
  {
    offerDetailsImg: "src/assets/logo/job-interview.png",
    offerDetailsTitle: "Real-Life Interview Experiences",
    offerDetailsDesc: "We provide you with real-life interview scenarios that mimic the challenges you may encounter during your job search. Through mock interviews, case studies, and interactive sessions, we expose you to various interview formats and help you develop effective strategies to tackle them with confidence."
  },
  {
    offerDetailsImg: "src/assets/logo/execution.png",
    offerDetailsTitle: "Comprehensive Content",
    offerDetailsDesc: "We understand the importance of being well-prepared for interviews. That’s why we offer comprehensive content that covers a wide range of industries, job roles, and interview techniques. From resume writing tips to behavioral interview questions, our resources will equip you with the knowledge you need to make a lasting impression on potential employers."
  },
  {
    offerDetailsImg: "src/assets/logo/presentation.png",
    offerDetailsTitle: "Job-Specific Training",
    offerDetailsDesc: "We go beyond generic interview advice and offer job-specific training. Whether you’re aiming for a career in finance, technology, marketing, or any other field, our experts will provide you with industry-specific insights and guidance to excel in interviews and stand out from the competition."
  },
  {
    offerDetailsImg: "src/assets/logo/reward.png",
    offerDetailsTitle: "Empowerment and Confidence-Building",
    offerDetailsDesc: "Our ultimate goal is to empower you with the confidence and skills necessary to excel in interviews and beyond. We believe that success stems from self-assurance, and we are committed to helping you build a strong foundation of confidence that will propel you towards your career goals."
  }
]